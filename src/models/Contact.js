const mongoose = require('mongoose');
/**
 * @openapi
 * components:
 *  schemas:
 *    Contact:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          example: "65a2226e48e4e94150956ffd"
 *        fistName:
 *          type: string
 *          example: "Joe"
 *        lastName:
 *          type: string
 *          example: "Doe"
 *        email:
 *          type: string
 *          example: "joe@test.com"
 *        favoriteColor:
 *          type: string
 *          example: "Red"
 *        birthday:
 *          type: date
 *          example: "2002-01-26"
 */
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: Date
});

module.exports = mongoose.model('Contact', contactSchema);
