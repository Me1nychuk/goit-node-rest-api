import Contact from "../models/contact.js";
async function listContacts(ownerId) {
  try {
    const data = await Contact.find({ owner: ownerId });
    return data;
  } catch (error) {
    next(error);
  }
}

async function getContactById(contactId, ownerId) {
  try {
    const contact = await Contact.findOne({ _id: contactId, owner: ownerId });
    return contact;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId, ownerId) {
  try {
    const data = await Contact.findOneAndDelete({
      _id: contactId,
      owner: ownerId,
    });
    return data;
  } catch (error) {
    next(error);
  }
}

async function addContact(ownerId, name, email, phone, favorite = false) {
  const newBook = {
    name: name,
    email: email,
    phone: phone,
    favorite: favorite,
    owner: ownerId,
  };

  try {
    const data = await Contact.create(newBook);

    return data;
  } catch (error) {
    next(error);
  }
}

async function updateContact(contactId, ownerId, favorite, name, email, phone) {
  const currentContact = await Contact.findOne({
    _id: contactId,
    owner: ownerId,
  });
  if (currentContact == null) {
    return null;
  }
  const newData = {
    name: name !== undefined ? name : currentContact.name,
    email: email !== undefined ? email : currentContact.email,
    phone: phone !== undefined ? phone : currentContact.phone,
    favorite: favorite !== undefined ? favorite : currentContact.favorite,
  };

  try {
    const result = await Contact.findByIdAndUpdate(contactId, newData, {
      new: true,
    });
    console.log(result);
    return result;
  } catch (error) {
    next(error);
  }
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
