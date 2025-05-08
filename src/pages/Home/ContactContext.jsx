import React, { createContext, useState, useContext } from "react";


// Criar contexto
const ContactContext = createContext();

// Hook personalizado para usar o contexto
export const useContacts = () => useContext(ContactContext);

// Provedor
export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};
