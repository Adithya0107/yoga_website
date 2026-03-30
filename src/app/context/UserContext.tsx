import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserData {
  id?: number;
  goal: string;
  gender: string;
  age: string;
  height: string;
  weight: string;
  experience: string;
  focus: string;
  activity: string;
  frequency: string;
  streak: number;
  minutes: number;
  level: number;
  name: string;
  email?: string;
  phone_number?: string;
  dietaryPreference: string;
  startDate?: string;
  calories: number;
}

interface UserContextType {
  userData: UserData;
  isLoggedIn: boolean;
  updateUserData: (data: Partial<UserData>) => void;
  resetUserData: () => void;
  login: (user: any) => void;
  logout: () => void;
}

const defaultUserData: UserData = {
  goal: '',
  gender: '',
  age: '',
  height: '',
  weight: '',
  experience: '',
  focus: '',
  activity: '',
  frequency: '',
  streak: 0,
  minutes: 0,
  level: 1,
  name: 'Aditya',
  dietaryPreference: '',
  startDate: '2026-01-15',
  calories: 0
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(() => {
    const saved = localStorage.getItem('zen_user_data');
    return saved ? JSON.parse(saved) : defaultUserData;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('zen_user_id');
  });

  useEffect(() => {
    localStorage.setItem('zen_user_data', JSON.stringify(userData));
    if (userData.id) {
      localStorage.setItem('zen_user_id', userData.id.toString());
    }
  }, [userData]);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const login = (user: any) => {
    setUserData({
      ...defaultUserData,
      ...user,
      id: user.id
    });
    setIsLoggedIn(true);
    localStorage.setItem('zen_user_id', user.id.toString());
  };

  const logout = () => {
    setUserData(defaultUserData);
    setIsLoggedIn(false);
    localStorage.removeItem('zen_user_id');
    localStorage.removeItem('zen_user_data');
  };

  const resetUserData = () => {
    setUserData(defaultUserData);
  };

  return (
    <UserContext.Provider value={{ userData, isLoggedIn, updateUserData, resetUserData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

