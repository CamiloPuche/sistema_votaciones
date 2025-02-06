/**
 * @swagger
 * tags:
 *   name: Votes
 *   description: Endpoints relacionados con el CRUD de votos
*/

/**
 * @swagger
 * tags:
 *   name: Statistics
 *   description: Endpoint para obtener estadísticas de votos
*/

/**
 * @swagger
 * /votes:
 *   post:
 *     summary: Crear un nuevo voto
 *     tags: [Votes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateVoteRequest'
 *     responses:
 *       201:
 *         description: Voto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VoteMessage'
 *       400:
 *         description: Error en la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             examples:
 *               voterNotFound:
 *                 value:
 *                   error: 'Votante no encontrado.'
 *               candidateNotFound:
 *                 value:
 *                   error: 'Candidato no encontrado.'
 *               alreadyVoted:
 *                 value:
 *                   error: 'El votante ya ha votado.'
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
 * /votes:
 *   get:
 *     summary: Obtener una lista de votos
 *     tags: [Votes]
 *     responses:
 *       200:
 *         description: Lista de votos obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VoteWithDetails'
 *               example:
 *                 - id: 3
 *                   voter_id: 3
 *                   candidate_id: 3
 *                   Voter:
 *                     id: 3
 *                     name: "Pedro"
 *                     email: "pedro32@gmail.com"
 *                     password: "$2a$10$mBB4mxXdq9q1LgQVfH.gHeppCFJ1za2E/.cj5zY3pCThTq5HmVTQe"
 *                     has_voted: true
 *                   Candidate:
 *                     id: 3
 *                     name: "Camilo perez"
 *                     party: "Partido Innovación"
 *                     votes: 2
 *                 - id: 4
 *                   voter_id: 4
 *                   candidate_id: 3
 *                   Voter:
 *                     id: 4
 *                     name: "Pepe"
 *                     email: "juanperez@gmail.com"
 *                     password: "$2a$10$UAezPGKaABg/xsknRQId2OJfsSLDshVWI.H2Blsnx8y9YudVfYfGq"
 *                     has_voted: true
 *                   Candidate:
 *                     id: 3
 *                     name: "Camilo perez"
 *                     party: "Partido Innovación"
 *                     votes: 2
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
/**
 * @swagger
 * /votes/{id}:
 *   get:
 *     summary: Obtener un voto por ID
 *     tags: [Votes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Voto obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VoteWithDetails'
 *       404:
 *         description: Voto no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Voto no encontrado.'
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
 * /votes/{id}:
 *   delete:
 *     summary: Eliminar un voto por ID
 *     tags: [Votes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Voto eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VoteDeleteMessage'
 *       404:
 *         description: Voto no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Voto no encontrado.'
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
 * /votes/{id}:
 *   put:
 *     summary: Actualizar un voto por ID
 *     tags: [Votes]
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
 *             $ref: '#/components/schemas/CreateVoteRequest'
 *     responses:
 *       200:
 *         description: Voto actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vote'
 *       400:
 *         description: Error en la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             examples:
 *               voterNotFound:
 *                 value:
 *                   error: 'Votante no encontrado.'
 *               candidateNotFound:
 *                 value:
 *                   error: 'Candidato no encontrado.'
 *       404:
 *         description: Voto no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Voto no encontrado.'
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
 * /votes/statistics:
 *   get:
 *     summary: Obtener estadísticas de votación
 *     tags: [Statistics]
 *     responses:
 *       200:
 *         description: Estadísticas de votación obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalVotes:
 *                   type: integer
 *                   example: 100
 *                 votersCount:
 *                   type: integer
 *                   example: 100
 *                 statistics:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       candidate:
 *                         type: string
 *                         example: 'María García'
 *                       votes:
 *                         type: integer
 *                         example: 60
 *                       percentage:
 *                         type: string
 *                         example: '60.00%'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */