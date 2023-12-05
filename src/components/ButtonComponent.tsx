import React, { useState } from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebase"; // Adjust the path to your actual file location

interface ButtonProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const messagesCollection = collection(firestore, "messagesCollection");
      await addDoc(messagesCollection, {
        name,
        message,
      });

      setName("");
      setMessage("");
    } catch (error) {
      setLoading(false);
      console.error("Error saving to Firebase:", error);
    }
  };

  return (
    <div>
      <button
        type="submit"
        style={{ opacity: loading ? 0.5 : 1 }}
        title="Submit"
        onClick={onClick}
        className="email_btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
      >
        <FontAwesomeIcon className="i" icon={faEnvelope} />
      </button>

      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Send Us a Message
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="w-100 mb-3"
                  type="text"
                  name="Name"
                  id="name-input"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="w-100"
                  type="text"
                  name="Message"
                  id="message-input"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <div className="modal-footer">
                  <button type="submit" className="modal_button w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script>
        const myModal = new bootstrap.Modal(document.getElementById('modalId'),
        options)
      </script>
    </div>
  );
};

export default ButtonComponent;
