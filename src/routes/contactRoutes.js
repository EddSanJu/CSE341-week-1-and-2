const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

/**
 * @openapi
 * /api/contacts:
 *  get:
 *   tags:
 *     - Contacts
 *   summary: Retrieve a list of contacts
 *   description: Fetch all the contacts resources in the DB.
 *   responses:
 *     200:
 *       description: A list of contacts.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Joe"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "joe@test.com"
 *               favoriteColor:
 *                 type: string
 *                 example: "Red"
 *               birthday:
 *                 type: string
 *                 format: date
 *                 example: "2000-01-26"
 *     500:
 *      description: Internal server error
 */
router.get('/contacts', contactController.getAllContacts);

/**
 * @openapi
 * /api/contacts/{id}:
 *  get:
 *   tags:
 *     - Contacts
 *   summary: Retrieve a specific contact
 *   description: Fetch a single contact resource by its unique ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the contact resource
 *
 *   responses:
 *     200:
 *       description: A specific contact resource
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Joe"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "joe@test.com"
 *               favoriteColor:
 *                 type: string
 *                 example: "Red"
 *               birthday:
 *                 type: string
 *                 format: date
 *                 example: "2000-01-26"
 *     404:
 *      description: Contact not found
 *     500:
 *      description: Internal server error
 */
router.get('/contacts/:id', contactController.getContactById);

/**
 * @openapi
 * /api/create-contact:
 *  post:
 *   tags:
 *     - Contacts
 *   summary: Create a new contact
 *   description: Creates a new contact resource in the DB.
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *               example: "Joe"
 *             lastName:
 *               type: string
 *               example: "Doe"
 *             email:
 *               type: string
 *               example: "joe@test.com"
 *             favoriteColor:
 *               type: string
 *               example: "Red"
 *             birthday:
 *               type: string
 *               format: date
 *               example: "2000-01-26"
 *   responses:
 *     201:
 *       description: Contact created successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: "Success"
 *               data:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *                   favoriteColor:
 *                     type: string
 *                   birthday:
 *                     type: string
 *                     format: date
 *     400:
 *       description: Bad request
 *     500:
 *       description: Internal server error
 */
router.post('/create-contact', contactController.createContact);

/**
 * @openapi
 * /api/update-contact/{id}:
 *  put:
 *   tags:
 *     - Contacts
 *   summary: Update an existing contact
 *   description: Updates an existing contact resource in the DB by its ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the contact to update
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *               example: "Jane"
 *             lastName:
 *               type: string
 *               example: "Doe"
 *             email:
 *               type: string
 *               example: "jane@test.com"
 *             favoriteColor:
 *               type: string
 *               example: "Blue"
 *             birthday:
 *               type: string
 *               format: date
 *               example: "1990-05-14"
 *   responses:
 *     200:
 *       description: Contact updated successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: "Success"
 *               data:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *                   favoriteColor:
 *                     type: string
 *                   birthday:
 *                     type: string
 *                     format: date
 *     404:
 *       description: Contact not found
 *     400:
 *       description: Bad request
 *     500:
 *       description: Internal server error
 */
router.put('/update-contact/:id', contactController.updateContact);

/**
 * @openapi
 * /api/delete-contact/{id}:
 *  delete:
 *   tags:
 *     - Contacts
 *   summary: Delete an existing contact
 *   description: Deletes an existing contact resource from the DB by its ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the contact to delete
 *   responses:
 *     200:
 *       description: Contact deleted successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Contact deleted successfully"
 *     404:
 *       description: Contact not found
 *     500:
 *       description: Internal server error
 */
router.delete('/delete-contact/:id', contactController.deleteContact);

module.exports = router;
