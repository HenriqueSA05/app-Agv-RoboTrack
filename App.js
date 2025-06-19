import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import AppRouter from './router/AppRouter';

export default function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <AppRouter />
            </DataProvider>
        </AuthProvider>
    );
}