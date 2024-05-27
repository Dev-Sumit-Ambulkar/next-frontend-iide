"use client";
function RegistrationPopup({ showPopup, setShowPopup }:any) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${showPopup ? '' : 'hidden'}`} onClick={() => setShowPopup(false)}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className={` p-6 rounded shadow-lg z-10`}>
        <p className="text-lg font-semibold"></p>
      </div>
    </div>
  );
}

export default RegistrationPopup;
