import { useState } from 'react';

function RegistrationPopup({ showPopup, setShowPopup, message }:any) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${showPopup ? '' : 'hidden'}`} onClick={() => setShowPopup(false)}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className={`${message.color} p-6 rounded shadow-lg z-10`}>
        <p className="text-lg font-semibold">{message.mes}</p>
      </div>
    </div>
  );
}

export default RegistrationPopup;
