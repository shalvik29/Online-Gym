const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(cors())

const options ={
  definition :{
    info :
      {
    "title": "Online Gym",
    "description": "Gym API documentation.",
    "contact": {
      "name": "Shalvik Shah",
      "url": "https://github.com/Kaitoke-kid",
      "email": "sshah96@uncc.edu"
    },
    "servers" : ["http://206.81.14.184:3000/"]
  }
},
    apis: ["swagger.js"]
}

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/',(req, res) => res.send('http://206.81.14.184/'));

app.get('/yoga', (req, res) => res.send('{}'));

app.post('/yoga', (req, res) => res.send('Record added Successfully'));

app.delete('/yoga/{id}', (req, res) => res.send('deleted Successfully'));

app.listen(port, () => console.log(`App listening on port ${port}!`))

/**
 * @swagger
 * definitions:
 *   yoga:
 *     properties:
 *       fitnessId:
 *         type: number
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
  * /yogaUpd/{id}:
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
  *       - name: yoga
  *         description: fitnessId required
  *         in: body
  *         fitnessId: fitnessId
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
  * /yogaUpd/{id}:
  *   patch:
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
  *       - name: yoga
  *         description: fitnessId required
  *         in: body
  *         fitnessId: fitnessId
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
  * /yoga/{id}:
  *   delete:
  *     tags:
  *       - yoga
  *     summary: delete yoga class with specific id
  *     security:
  *       - bearerAuth: []
  *     consumes:
  *       - application/json
  *     produces:
  *       - application/json
  *     parameters:
  *       - yogaId: id
  *         description: yoga id
  *         in: query
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: Deleted Successfully
  */