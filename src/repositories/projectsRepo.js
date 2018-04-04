import { apiRequestAsync } from '../utils/fetchData'

export const addContactAsync = async contactInfo => { 
  await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact`, { body: contactInfo, method: 'POST' });
}

export const getContactsAsync = async contactInfo => { 
  const contactList = await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact/`, { body: contactInfo, method: 'GET' });

  return contactList;
}

export const getContactAsync = async contactId => {
  const contact = await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact/${contactId}`);

  return contact;
}


export const updateContactAsync = async (contactId, contactInfo) => {
  const contact = await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact/${contactId}`, { body: contactInfo, method: 'PUT'});

  return contact;
}

export const deleteContactAsync = async (contactId) => {
  await apiRequestAsync(`https://challenge.acstechnologies.com/api/contact/${contactId}`, { method: 'DELETE' });
}