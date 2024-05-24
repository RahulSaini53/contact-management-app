// component to add contact 
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../features/contacts/contactsSlice';


//contact interface
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactFormProps {
  contact?: Contact | null;
  onClose: () => void;
}

// Form to add contact
const ContactForm: React.FC<ContactFormProps> = ({ contact, onClose }) => {
  const [firstName, setFirstName] = useState(contact?.firstName || '');
  const [lastName, setLastName] = useState(contact?.lastName || '');
  const [status, setStatus] = useState(contact?.status || 'active');
  const [warning, setWarning] = useState('');
  const dispatch = useDispatch();

  //function to hnadle submition
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !status) {
      setWarning('Please fill all fields');
      return;
    }

    if (contact) {
      dispatch(editContact({ id: contact.id, firstName, lastName, status }));
    } else {
      dispatch(addContact({ id: String(Date.now()), firstName, lastName, status }));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded lg:min-w-96 shadow-sm shadow-black">
      {warning && <div className="text-red-500 mb-2">{warning}</div>}
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Status:</label>
        <div>
          <label>
            <input
              type="radio"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
            />
            Active
          </label>
          <label className="ml-4">
            <input
              type="radio"
              value="inactive"
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
            />
            Inactive
          </label>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
        {contact ? 'Edit' : 'Add'} Contact
      </button>
      <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded mt-2 ml-2">
        Cancel
      </button>
    </form>
  );
};

export default ContactForm;
