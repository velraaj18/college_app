'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { JwtPayload } from "../interfaces/JwtPayload";
import { AuthContextType } from '../interfaces/AuthContextType'

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  loading : true,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<JwtPayload | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    console.log("Auth Context working")
    if (!jwtToken) {
      setLoading(false)
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(jwtToken);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        setLoading(false)
        return;
      }
      setUser(decoded);
      setToken(jwtToken);
    } catch {
      localStorage.removeItem('token');
    } finally{
      setLoading(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
