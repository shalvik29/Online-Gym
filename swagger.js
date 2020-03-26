const express = require('express');
const app = express();
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(cors())

const options ={
  definition :{
    info :
      {
        title: "Online Gym",
        description: "Gym API documentation.",
        contact: {
        name: "Shalvik Shah",
        url: "https://github.com/Kaitoke-kid",
        email: "sshah96@uncc.edu"
    },
    servers : ["http://localhost:3000/"]
  }
},
    apis: ["swagger.js"]
}

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;

 /**
  * @swagger
  * definitions:
  *   fitness:
  *     properties:
  *       name:
  *         type: string
  *       details:
  *         type: string
  */

  /**
   * @swagger
   * definitions:
   *   contact:
   *     properties:
   *       name:
   *         type: string
   *       emailId:
   *         type: string
   *       phone_number:
   *         type: integer
   */

  /**
 * @swagger
 * definitions:
 *   yoga:
 *     properties:
 *       fitnessId:
 *         type: number
 *       instructor:
 *         type: string
 *       room_number:
 *         type: number
 *       capacity:
 *         type: number
 *       start_time:
 *         type: time
 *       end_time:
 *         type: time
 */

 /**
 * @swagger
 * definitions:
 *   zumba:
 *     properties:
 *       fitnessId:
 *         type: number
 *       instructor:
 *         type: string
 *       room_number:
 *         type: number
 *       capacity:
 *         type: number
 *       start_time:
 *         type: time
 *       end_time:
 *         type: time
 */

 /**
 * @swagger
 * definitions:
 *   cardio:
 *     properties:
 *       fitnessId:
 *         type: number
 *       instructor:
 *         type: string
 *       room_number:
 *         type: number
 *       capacity:
 *         type: number
 *       start_time:
 *         type: time
 *       end_time:
 *         type: time
 */

 /**
 * @swagger
 * definitions:
 *   strength:
 *     properties:
 *       fitnessId:
 *         type: number
 *       instructor:
 *         type: string
 *       room_number:
 *         type: number
 *       capacity:
 *         type: number
 *       start_time:
 *         type: time
 *       end_time:
 *         type: time
 */

  /**
   * @swagger
   * definitions:
   *   affectedResponse:
   *     properties:
   *       fieldCount:
   *         type: integer
   *       affectedRows:
   *         type: integer
   *       insertId:
   *         type: integer
   *       serverStatus:
   *         type: integer
   *       warningCount:
   *         type: integer
   *       message:
   *         type: string
   *       protocol41:
   *         type: boolean
   *       changedRows:
   *         type: integer
   */

 /**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Admin page of gym
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dashboard of the admin
 */

  /**
 * @swagger
 * /contact:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Contact page of gym
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *         schema:
*           type: string
 *     responses:
 *       200:
 *         description: Contact of the admin
 */

  /**
 * @swagger
 * /fitness:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Fitness page of gym
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *         schema:
*           type: string
 *     responses:
 *       200:
 *         description: Details of fitness classes on the gym.
 *         schema:
 *           $ref: '#/definitions/fitness'
 */

  /**
  * @swagger
  * /yoga:
  *   get:
  *     tags:
  *       - Yoga
  *     summary: Get classes information of yoga
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: List of yoga classes
  *         schema:
  *           $ref: '#/definitions/yoga'
  */

  /**
 * @swagger
 * /yoga:
 *   post:
 *     tags:
 *       - Yoga
 *     summary: Insert new class for the yoga
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: yoga
 *         description: body
 *         in: body
 *         fitnessId: fitnessId
 *         instructor: instructor
 *         room_number: room_number
 *         capacity: capacity
 *         start_time: start_time
 *         end_time: end_time 
 *         schema:
 *           $ref: '#/definitions/yoga'
 *         required: true
 *     responses:
 *       200:
 *         description: list of all classes of yoga with new class
 */

  /**
  * @swagger
  * /yogaUpd/{yogaId}:
  *   put:
  *     tags:
  *       - Yoga
  *     summary: update the information of yoga class 
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: yogaId
  *         description: yogaId requires
  *         in: path
  *         required: true
  *         type: integer
  *       - name: body
  *         description: fitnessId required
  *         in: body
  *         fitnessId: fitnessId
  *         instructor: instructor
  *         room_number: room_number
  *         capacity: capacity
  *         start_time: start_time
  *         end_time: end_time 
  *         schema:
  *           $ref: '#/definitions/yoga'
  *         required: true
  *     responses:
  *       200:
  *         description: Class of updated entry
  *         schema:
  *           $ref: '#/definitions/affectedResponse'
  */

  /**
  * @swagger
  * /yoga/{yogaId}:
  *   delete:
  *     tags:
  *       - Yoga
  *     summary: delete yoga class with specific id
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - yogaId: yogaId
  *         description: yoga id is mandatory
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Deleted Successfully
  */

    /**
  * @swagger
  * /zumba:
  *   get:
  *     tags:
  *       - Zumba
  *     summary: Get classes information of zumba
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: List of zumba classes
  *         schema:
  *           $ref: '#/definitions/zumba'
  */

  /**
 * @swagger
 * /zumba:
 *   post:
 *     tags:
 *       - Zumba
 *     summary: Insert new class for the zumba
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: zumba
 *         description: body
 *         in: body
 *         fitnessId: fitnessId
 *         instructor: instructor
 *         room_number: room_number
 *         capacity: capacity
 *         start_time: start_time
 *         end_time: end_time 
 *         schema:
 *           $ref: '#/definitions/zumba'
 *         required: true
 *     responses:
 *       200:
 *         description: list of all classes of zumba with new class
 */

  /**
  * @swagger
  * /zumbaUpd/{zumbaId}:
  *   patch:
  *     tags:
  *       - Zumba
  *     summary: update the information of zumba class 
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: zumbaId
  *         description: zumbaId requires
  *         in: path
  *         required: true
  *         type: string
  *       - name: zumba
  *         description: fitnessId required
  *         in: body
  *         fitnessId: fitnessId
  *         instructor: instructor
  *         room_number: room_number
  *         capacity: capacity
  *         start_time: start_time
  *         end_time: end_time 
  *         schema:
  *           $ref: '#/definitions/zumba'
  *         required: true
  *     responses:
  *       200:
  *         description: Class of updated entry
  *         schema:
  *           $ref: '#/definitions/affectedResponse'
  */

  /**
  * @swagger
  * /zumba/{zumbaId}:
  *   delete:
  *     tags:
  *       - Zumba
  *     summary: delete zumba class with specific id
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - zumbaId: zumbaId
  *         description: zumba id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Deleted Successfully
  */

    /**
  * @swagger
  * /cardio:
  *   get:
  *     tags:
  *       - Cardio
  *     summary: Get classes information of cardio
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: List of cardio classes
  *         schema:
  *           $ref: '#/definitions/cardio'
  */

  /**
 * @swagger
 * /cardio:
 *   post:
 *     tags:
 *       - Cardio
 *     summary: Insert new class for the cardio
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: cardio
 *         description: body
 *         in: body
 *         fitnessId: fitnessId
 *         instructor: instructor
 *         room_number: room_number
 *         capacity: capacity
 *         start_time: start_time
 *         end_time: end_time 
 *         schema:
 *           $ref: '#/definitions/cardio'
 *         required: true
 *     responses:
 *       200:
 *         description: list of all classes of cardio with new class
 */

  /**
  * @swagger
  * /cardioUpd/{cardioId}:
  *   put:
  *     tags:
  *       - Cardio
  *     summary: update the information of cardio class 
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: cardioId
  *         description: cardioId requires
  *         in: path
  *         required: true
  *         type: integer
  *       - name: cardio
  *         description: fitnessId required
  *         in: body
  *         fitnessId: fitnessId
  *         instructor: instructor
  *         room_number: room_number
  *         capacity: capacity
  *         start_time: start_time
  *         end_time: end_time 
  *         schema:
  *           $ref: '#/definitions/cardio'
  *         required: true
  *     responses:
  *       200:
  *         description: Class of updated entry
  *         schema:
  *           $ref: '#/definitions/affectedResponse'
  */

  /**
  * @swagger
  * /cardio/{cardioId}:
  *   delete:
  *     tags:
  *       - Cardio
  *     summary: delete cardio class with specific id
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - cardioId: cardioId
  *         description: cardio id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Deleted Successfully
  */

    /**
  * @swagger
  * /strength:
  *   get:
  *     tags:
  *       - Strength and endurance training
  *     summary: Get classes information of strength and endurance training
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     responses:
  *       200:
  *         description: List of all strength and endurance training classes
  *         schema:
  *           $ref: '#/definitions/strength'
  */

  /**
 * @swagger
 * /strength:
 *   post:
 *     tags:
 *       - Strength and endurance training
 *     summary: Insert new class for the strength and endurance training
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: strength and endurance training
 *         description: body
 *         in: body
 *         fitnessId: fitnessId
 *         instructor: instructor
 *         room_number: room_number
 *         capacity: capacity
 *         start_time: start_time
 *         end_time: end_time 
 *         schema:
 *           $ref: '#/definitions/strength'
 *         required: true
 *     responses:
 *       200:
 *         description: list of all classes of strength and endurance training with new class
 */

  /**
  * @swagger
  * /strengthUpd/{strengthId}:
  *   patch:
  *     tags:
  *       - Strength and endurance training
  *     summary: update the information of strength and endurance training class 
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: strengthId
  *         description: strengthId requires
  *         in: path
  *         required: true
  *         type: string
  *       - name: strength and endurance training
  *         description: fitnessId required
  *         in: body
  *         fitnessId: fitnessId
  *         instructor: instructor
  *         room_number: room_number
  *         capacity: capacity
  *         start_time: start_time
  *         end_time: end_time 
  *         schema:
  *           $ref: '#/definitions/strength'
  *         required: true
  *     responses:
  *       200:
  *         description: Class of updated entry
  *         schema:
  *           $ref: '#/definitions/affectedResponse'
  */

  /**
  * @swagger
  * /strength/{strengthId}:
  *   delete:
  *     tags:
  *       - Strength and endurance training
  *     summary: delete strength and endurance training class with specific id
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - strengthId: strengthId
  *         description: strength and endurance training id
  *         in: path
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Deleted Successfully
  */