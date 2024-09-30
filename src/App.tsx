import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './pages/Calculator/Calculator';
import SupportTicketForm from './pages/SupportTicketForm/SupportTicketForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator/>}/>
      <Route path="/support-ticket" element={<SupportTicketForm/>} />
    </Routes>
  );
}

export default App;
