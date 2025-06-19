export const Icons = {
    dashboard: '📊',
    schedule: '📅',
    transport: '🤖',
    report: '⚡️',
    profile: '👤',
};

export const MOCK_USERS = {
    'operador1': { password: '123', name: 'João Silva' },
    'admin': { password: 'admin', name: 'Admin Geral' },
};

export const MOCK_AGVS = [
    { id: 'AGV-01', status: 'Carregando', battery: 85, location: 'Doca 1' },
    { id: 'AGV-02', status: 'Em percurso', battery: 62, location: 'Corredor B' },
    { id: 'AGV-03', status: 'Ocioso', battery: 98, location: 'Ponto de Recarga' },
];

export const MOCK_ORDERS = [
    { id: 'T-001', productName: 'Caixa de Sabão OMO', destination: 'Pallet D4', status: 'Agendado', agvId: null },
    { id: 'T-002', productName: 'Pack de Sabão Comfort', destination: 'Estação de Empacotamento 2', status: 'Agendado', agvId: null },
];