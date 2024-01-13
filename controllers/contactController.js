const Contact = require('../models/Contact');

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({
                message: 'Contact not found'});
        }
        res.json(contact);
    } catch (error) {
        res,status.replace(500).json({ message: error.message});
    }
};

module.exports = {
    getAllContacts,
    getContactById
};