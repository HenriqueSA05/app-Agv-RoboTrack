import React, { useState, createContext, useContext, useMemo } from 'react';
import { MOCK_USERS } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const authContextValue = useMemo(() => ({
        login: (username, password) => {
            const foundUser = MOCK_USERS[username];
            if (foundUser && foundUser.password === password) {
                setUser({ username, name: foundUser.name });
                return true;
            }
            return false;
        },
        logout: () => setUser(null),
        user,
    }), [user]);
    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);