
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints relacionados con la autenticación
*/

/**
 * @swagger
 * /register:
*   post:
 *     summary: Registrar un nuevo votante
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Camilo Puche'
 *               email:
 *                 type: string
 *                 format: email
 *                 example: 'camilo1@gmail.com'
 *               password:
 *                 type: string
 *                 format: password
 *                 example: 'tu_contraseña_segura'
 *     responses:
 *       201:
 *         description: Registro exitoso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 *       400:
 *         description: Un candidato no puede ser votante o el nombre ya está registrado.
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
 *                   error: 'El nombre ya está registrado.'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Error interno del servidor.'
 */



/**
 * @swagger
 * /login:
  *   post:
 *     summary: Iniciar sesión
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Camilo Puche'
 *               password:
 *                 type: string
 *                 format: password
 *                 example: 'tu_contraseña_segura'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Contraseña incorrecta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Contraseña incorrecta.'
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Usuario no encontrado.'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               error: 'Error interno del servidor.'
 */

