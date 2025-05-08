import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { ContactProvider } from "./ContactContext"; // importa o Provider
import api from '../../services/api'

function App() {
  
  return (
    <ContactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/contatos" element={<ContactList />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
