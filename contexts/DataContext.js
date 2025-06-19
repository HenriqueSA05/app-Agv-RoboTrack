import React, { useState, createContext, useContext, useMemo } from 'react';
import { MOCK_ORDERS, MOCK_AGVS } from '../data/mockData';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [orders, setOrders] = useState(MOCK_ORDERS);
    const [agvs, setAgvs] = useState(MOCK_AGVS);

    const dataContextValue = useMemo(() => ({
        orders,
        agvs,
        getScheduledOrders: () => orders.filter(o => o.status === 'Agendado'),
        getEnRouteOrders: () => orders.filter(o => o.status === 'Em Percurso'),
        getCompletedOrders: () => orders.filter(o => o.status === 'Concluído'),
        scheduleNewTransport: (newOrder) => {
            setOrders(prev => [...prev, { ...newOrder, id: `T-${String(Date.now()).slice(-4)}`, status: 'Agendado' }]);
        },
        assignAndStartTransport: (orderId) => {
            const availableAGV = agvs.find(a => a.status === 'Ocioso' || a.status === 'Carregando');
            if (!availableAGV) {
                alert("Nenhum AGV disponível no momento.");
                return;
            }
            setAgvs(prev => prev.map(a => a.id === availableAGV.id ? { ...a, status: 'Em percurso' } : a));
            setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: 'Em Percurso', agvId: availableAGV.id } : o));
        },
        completeTransport: (orderId) => {
            const orderToComplete = orders.find(o => o.id === orderId);
            if (!orderToComplete) return;
            setAgvs(prev => prev.map(a => a.id === orderToComplete.agvId ? { ...a, status: 'Ocioso' } : a));
            setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: 'Concluído', agvId: null } : o));
        }
    }), [orders, agvs]);

    return <DataContext.Provider value={dataContextValue}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);