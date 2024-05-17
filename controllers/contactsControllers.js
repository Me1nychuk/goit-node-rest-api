import contactsService from "../services/contactsServices.js";
export const getAllContacts = (req, res) => {
  contactsService
    .listContacts()
    .then((contacts) => res.status(200).json(contacts))
    .catch((err) => res.status(500).json("Internal Server Error"));
};

export const getOneContact = (req, res) => {
  const { id } = req.params;

  contactsService
    .getContactById(id)
    .then((contact) => {
      if (contact === null) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.status(200).json(contact);
    })
    .catch((err) => {
      res.status(500).json("Internal Server Error");
    });
};

export const deleteContact = (req, res) => {
  const { id } = req.params;
  contactsService
    .removeContact(id)
    .then((contact) => {
      if (contact == null) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.status(204);
    })
    .catch((err) => res.status(500).json("Internal Server Error"));
};

export const createContact = (req, res) => {
  const { name, email, phone, favortie } = req.body;
  contactsService
    .addContact(name, email, phone, favortie)
    .then((contact) => {
      res.status(201).json(contact);
    })
    .catch((err) => res.status(500).json("Internal Server Error"));
};

export const updateContact = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, favortie } = req.body;

  if (name === undefined && email === undefined && phone === undefined) {
    return res
      .status(400)
      .json({ message: "Body must have at least one field" });
  }

  contactsService
    .updateContact(id, favortie, name, email, phone)
    .then((contact) => {
      if (contact == null) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.status(201).json(contact);
    })
    .catch((err) => res.status(500).json("Internal Server Error"));
};

export const updateContactFavorite = (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  contactsService
    .updateContactFavorite(id, favorite)
    .then((contact) => {
      if (contact == null) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(contact);
    })
    .catch((err) => res.status(500).json("Internal Server Error"));
};
