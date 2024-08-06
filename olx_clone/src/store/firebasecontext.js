import { createContext, useState } from 'react';
import { app, auth, db } from '../firebase/config';

export const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ app, auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const AuthContext = createContext(null);

export const Context = ({ children }) => {
  const [user, setUser] = useState('Hello');
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;
