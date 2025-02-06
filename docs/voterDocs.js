/**
 * @swagger
 * tags:
 *   name: Voters
 *   description: Endpoints relacionados con el CRUD de votantes
*/

/**
 * @swagger
 * /voters:
 *   post:
 *     summary: Crear un nuevo votante (Debido a la autenticacion con JWT este se crea por medio de el endpoint /register)
 *     tags: [Voters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateVoterRequest'
 *     responses:
 *       201:
 *         description: Votante creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voter'
 *       400:
 *         description: Un candidato no puede ser votante, el votante ya está registrado o el email ya está registrado como votante.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             examples:
 *               candidateExists:
 *                 value:
 *                   error: 'Un candidato no puede ser votante.'
 *               voterExists:
 *                 value:
 *                   error: 'El votante ya está registrado.'
 *               voterEmailExists:
 *                 value:
 *                   error: 'El email ya está registrado como votante.'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Error interno del servidor.'
 */

/**
 * @swagger
 * /voters:
 *   get:
 *     summary: Obtener una lista de votantes
 *     tags: [Voters]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de votantes obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalItems:
 *                   type: integer
 *                   example: 4
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 currentPage:
 *                   type: integer
 *                   example: 1
 *                 voters:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Voter'
 *               example:
 *                 totalItems: 4
 *                 totalPages: 1
 *                 currentPage: 1
 *                 voters:
 *                   - id: 1
 *                     name: "Juan Pérez"
 *                     email: "juanperez@gmail.com"
 *                     has_voted: true
 *                   - id: 2
 *                     name: "Camilo Parra"
 *                     email: "camilo1@gmail.com"
 *                     has_voted: true
 *                   - id: 3
 *                     name: "Pedro"
 *                     email: "pedro32@gmail.com"
 *                     has_voted: true
 *                   - id: 4
 *                     name: "Pepe"
 *                     email: "juanperez@gmail.com"
 *                     has_voted: true
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Error interno del servidor.'
 */

/**
 * @swagger
 * /voters/{id}:
 *   get:
 *     summary: Obtener un votante por ID
 *     tags: [Voters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Votante obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voter'
 *       404:
 *         description: Votante no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Votante no encontrado.'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Error interno del servidor.'
 */

/**
 * @swagger
 * /voters/{id}:
 *   delete:
 *     summary: Eliminar un votante por ID
 *     tags: [Voters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Votante eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VoterDeleteMessage'
 *       404:
 *         description: Votante no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Votante no encontrado.'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Error interno del servidor.'
 */

/**
 * @swagger
 * /voters/{id}:
 *   put:
 *     summary: Actualizar un votante por ID
 *     tags: [Voters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateVoterRequest'
 *     responses:
 *       200:
 *         description: Votante actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voter'
 *       404:
 *         description: Votante no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Votante no encontrado.'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Error interno del servidor.'
 */