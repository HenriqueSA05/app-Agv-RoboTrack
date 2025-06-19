// --- ESTILOS ---
const styles = {
    container: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F5F5F5', height: '100vh', boxSizing: 'border-box' },
    containerList: { flex: 1, backgroundColor: '#F5F5F5', width: '100%', paddingBottom: 80, boxSizing: 'border-box' },
    title: { fontSize: 28, fontWeight: 'bold', color: '#005C9E', marginBottom: 8, textAlign: 'center' },
    subtitle: { fontSize: 18, color: '#333', marginBottom: 40, textAlign: 'center' },
    header: { fontSize: 24, fontWeight: 'bold', color: '#333', padding: '20px 20px 10px 20px' },
    buttonContainer: { marginTop: 20, width: '80%', maxWidth: 400, alignSelf: 'center' },
    button: { width: '100%', padding: '12px', fontSize: '16px', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', marginTop: 10 },
    card: { backgroundColor: 'white', borderRadius: 8, padding: 20, margin: '8px 16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'relative' },
    cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', margin: '0 0 10px 0' },
    cardSubtitle: { fontSize: 14, color: '#666', margin: 0 },
    statusBadge: { position: 'absolute', top: 10, right: 10, padding: '4px 8px', borderRadius: 12 },
    statusText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
    detailText: { fontSize: 15, color: '#333', marginBottom: 5 },
    tabBar: { display: 'flex', flexDirection: 'row', height: 60, borderTop: '1px solid #ddd', backgroundColor: 'white', position: 'fixed', bottom: 0, width: '100%' },
    tabItem: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' },
    tabText: { fontSize: 14, color: '#888', textAlign: 'center' },
    tabTextActive: { color: '#005C9E', fontWeight: 'bold' },
    loginForm: { width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 10 },
    input: { padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #ccc', marginBottom: 10, width: '100%', boxSizing: 'border-box' },
    errorText: { color: 'red', textAlign: 'center', marginBottom: 10 },
    dashboardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, padding: 16 },
    progressBarContainer: { width: '100%', backgroundColor: '#e0e0e0', borderRadius: 4, marginTop: 10 },
    progressBar: { height: 20, backgroundColor: '#007BFF', borderRadius: 4, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }
};
export default styles;