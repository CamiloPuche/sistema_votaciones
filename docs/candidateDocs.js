/**
 * @swagger
 * tags:
 *   name: Candidates
 *   description: Endpoints relacionados con el CRUD de candidatos
*/

/**
 * @swagger
 * /candidates:
 *   post:
 *     summary: Crear un nuevo candidato
 *     tags: [Candidates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCandidateRequest'
 *     responses:
 *       201:
 *         description: Candidato creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidate'
 *       400:
 *         description: El candidato ya está registrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'El candidato ya está registrado.'
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
 * /candidates:
 *   get:
 *     summary: Obtener una lista de candidatos
 *     tags: [Candidates]
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
 *       - in: query
 *         name: party
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de candidatos obtenida exitosamente.
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
 *                 candidates:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CandidateList'
 *               example:
 *                 totalItems: 4
 *                 totalPages: 1
 *                 currentPage: 1
 *                 candidates:
 *                   - id: 2
 *                     name: "Camilo Puche"
 *                     party: "Partido Innovación"
 *                     votes: 1
 *                   - id: 3
 *                     name: "Camilo Perez"
 *                     party: "Partido Innovación"
 *                     votes: 0
 *                   - id: 4
 *                     name: "Camilo Guzman"
 *                     party: "Partido LGTQB"
 *                     votes: 0
 *                   - id: 5
 *                     name: "luis"
 *                     party: "Partido Liberal"
 *                     votes: 0
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
 * /candidates/{id}:
 *   get:
 *     summary: Obtener un candidato por ID
 *     tags: [Candidates]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Candidato obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CandidateList'
 *       404:
 *         description: Candidato no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Candidato no encontrado.'
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
 * /candidates/{id}:
 *   delete:
 *     summary: Eliminar un candidato por ID
 *     tags: [Candidates]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Candidato eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CandidateDeleteMessage'
 *             example:
 *               message: 'Candidato eliminado exitosamente.'
 *       404:
 *         description: Candidato no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Candidato no encontrado.'
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
 * /candidates/{id}:
 *   put:
 *     summary: Actualizar un candidato por ID
 *     tags: [Candidates]
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
 *             $ref: '#/components/schemas/UpdateCandidateRequest'
 *     responses:
 *       200:
 *         description: Candidato actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateCandidate'
 *       404:
 *         description: Candidato no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Candidato no encontrado.'
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Error interno del servidor.'
 */
