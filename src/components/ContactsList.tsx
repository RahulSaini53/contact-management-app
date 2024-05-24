// component to add create contacts and showing contact list
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { deleteContact } from '../features/contacts/contactsSlice';
import ContactForm from './AddContactForm';

const ContactsList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [editContactData, setEditContactData] = useState<{
    id: string;
    firstName: string;
    lastName: string;
    status: string;
  } | null>(null);

  //function to  hnadle delete contacts
  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  //function to handle edit contacts
  const handleEdit = (contact: any) => {
    setEditContactData(contact);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditContactData(null);
  };

  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <button
        onClick={() => setShowForm(true)}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Create Contact
      </button>

      {showForm && (
        <ContactForm contact={editContactData} onClose={handleCloseForm} />
      )}

      {contacts.length === 0 ? (
        <div>No contacts found</div>
      ) : 
    (
      <div className='container flex flex-wrap my-4  max-sm:justify-center max-md:items-center'>
       { contacts.map(contact => (
          <div key={contact.id} className="mr-8  p-4 mb-4  rounded min-w-60 min-h-40 flex flex-col items-start shadow-md shadow-black">
            <div className='min-w-52 text-lg'> <span className='w-28 text-right inline-block'>FirstName:</span> <span className='capitalize'>{contact.firstName}</span> </div>
            <div className='min-w-52 text-lg' > <span className='w-28 text-right inline-block'>LastName:</span> <span className='capitalize text-wrap inline-block'>{contact.lastName} </span></div>
            <div className='min-w-52 text-lg' > <span className='w-28 text-right inline-block'>Status:</span> <span className='capitalize'>{contact.status}</span></div>
            <button
              onClick={() => handleDelete(contact.id)}
              className="bg-red-500 text-white p-2 rounded mt-2 block w-full"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(contact)}
              className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
            >
              Edit
            </button>
          </div>
        ))
      }
    </div>
      )
      }
    </div>
  );
};

export default ContactsList;
