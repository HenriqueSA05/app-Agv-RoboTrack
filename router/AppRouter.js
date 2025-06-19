import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AgendamentoScreen from '../screens/AgendamentoScreen';
import TransportesScreen from '../screens/TransportesScreen';
import RelatorioScreen from '../screens/RelatorioScreen';
import PerfilScreen from '../screens/PerfilScreen';
import styles from '../styles/styles';
import { Icons } from '../data/mockData';

const AppRouter = () => {
    const { user, logout } = useAuth();
    const [currentScreen, setCurrentScreen] = useState('Dashboard');

    // ---- INÍCIO DA ALTERAÇÃO ----
    // 1. Adicionado este objeto para mapear os nomes em português para as chaves dos ícones em inglês
    const screenToIconKey = {
        'Dashboard': 'dashboard',
        'Agendamento': 'schedule',
        'Transportes': 'transport',
        'Relatórios': 'report',
        'Perfil': 'profile',
    };
    // ---- FIM DA ALTERAÇÃO ----

    if (!user) return <LoginScreen />;

    const renderContent = () => {
        switch (currentScreen) {
            case 'Dashboard': return <DashboardScreen />;
            case 'Agendamento': return <AgendamentoScreen />;
            case 'Transportes': return <TransportesScreen />;
            case 'Relatórios': return <RelatorioScreen />;
            case 'Perfil': return <PerfilScreen onLogout={logout} />;
            default: return <DashboardScreen />;
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: 1, paddingBottom: '60px' /* Adiciona espaço para não sobrepor o menu */ }}>
                {renderContent()}
            </div>
            <div style={styles.tabBar}>
                {['Dashboard', 'Agendamento', 'Transportes', 'Relatórios', 'Perfil'].map(screen => (
                    <div key={screen} onClick={() => setCurrentScreen(screen)} style={styles.tabItem}>
                        <span style={{ ...styles.tabText, ...(currentScreen === screen && styles.tabTextActive) }}>
                            {/* ---- INÍCIO DA ALTERAÇÃO ---- */}
                            {/* 2. Acessa o ícone usando o mapeamento */}
                            {Icons[screenToIconKey[screen]] || '?'} {screen}
                            {/* ---- FIM DA ALTERAÇÃO ---- */}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppRouter;