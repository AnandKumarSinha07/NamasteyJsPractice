import React, {useState } from "react";
import "./style.css";

function ConfirmationModal() {
  const [isOpne, setIsopne] = useState(false);
  const [action, setAction] = useState("");

 
  function confirmedFunction()
  {
    setAction("confirmed")
    setIsopne(false)
  }

  function cancelledFunction(){
     setAction("cancelled")
     setIsopne(false)
  }
  return (
    <div className="modal-container">
      <button className="open-modal-btn" onClick={() => setIsopne(true)}>
        Open Confirmation Modal
      </button>

      {isOpne ? (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h2 className="modal-title">Confirm Action</h2>
            <p className="modal-message">Are you sure you want to proceed?</p>

            <div className="modal-buttons">
              <button
                className="confirm-btn"
                onClick={confirmedFunction}
              >
                Confirm
              </button>

              <button
              className="cancel-btn"
               onClick={cancelledFunction}
              >
                Cancel
              </button>
            </div>
          </div>
         
        </div>
      ) : (
          ""
         )}
          {action && <div className="action-status">{action}</div>}
    </div>
  );
}

export default ConfirmationModal;
