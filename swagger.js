const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Sistema de Votaciones API',
        version: '1.0.0',
        description: 'Documentación de la API del Sistema de Votaciones',
    },
    servers: [
        {
            url: 'http://localhost:3000/',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        schemas: {
            Voter: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 2,
                    },
                    name: {
                        type: 'string',
                        example: 'Camilo Puche',
                    },
                    email: {
                        type: 'string',
                        format: 'email',
                        example: 'camilo1@gmail.com',
                    },
                    has_voted: {
                        type: 'boolean',
                        example: false,
                    },
                },
            },
            VoterVote: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 2,
                    },
                    name: {
                        type: 'string',
                        example: 'Camilo Puche',
                    },
                    email: {
                        type: 'string',
                        format: 'email',
                        example: 'camilo1@gmail.com',
                    },
                    password: {
                        type: 'string',
                        example: '$2a$10$mBB4mxXdq9q1LgQVfH.gHeppCFJ1za2E/.cj5zY3pCThTq5HmVTQe',
                    },
                    has_voted: {
                        type: 'boolean',
                        example: false,
                    },
                },
            },
            VoterLogin: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 2,
                    },
                    name: {
                        type: 'string',
                        example: 'Camilo Puche',
                    },
                    email: {
                        type: 'string',
                        format: 'email',
                        example: 'camilo1@gmail.com',
                    },
                },
            },
            CreateVoterRequest: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'Camilo Puche',
                    },
                    email: {
                        type: 'string',
                        format: 'email',
                        example: 'camilo1@gmail.com',
                    },
                    password: {
                        type: 'string',
                        example: 'password123',
                    },
                },
            },
            UpdateVoterRequest: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'Camilo Puche',
                    },
                    email: {
                        type: 'string',
                        format: 'email',
                        example: 'camilo1@gmail.com',
                    },
                },
            },
            LoginResponse: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Inicio de sesión exitoso.',
                    },
                    voter: {
                        $ref: '#/components/schemas/VoterLogin',
                    },
                    token: {
                        type: 'string',
                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                    },
                },
            },
            RegisterResponse: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Registro exitoso.',
                    },
                    voter: {
                        $ref: '#/components/schemas/VoterLogin',
                    },
                    token: {
                        type: 'string',
                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                    },
                },
            },
            Candidate: {
                type: 'object',
                properties: {
                    votes: {
                        type: 'integer',
                        example: 0,
                    },
                    id: {
                        type: 'integer',
                        example: 1,
                    },
                    name: {
                        type: 'string',
                        example: 'John Doe',
                    },
                    party: {
                        type: 'string',
                        example: 'Party A',
                    },
                },
            },
            CandidateVote: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1,
                    },
                    name: {
                        type: 'string',
                        example: 'John Doe',
                    },
                    party: {
                        type: 'string',
                        example: 'Party A',
                    },
                    votes: {
                        type: 'integer',
                        example: 0,
                    },
                },
            },
            CandidateList: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1,
                    },
                    name: {
                        type: 'string',
                        example: 'John Doe',
                    },
                    party: {
                        type: 'string',
                        example: 'Party A',
                    },
                    votes: {
                        type: 'integer',
                        example: 0,
                    },
                },
            },
            CreateCandidateRequest: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'John Doe',
                    },
                    party: {
                        type: 'string',
                        example: 'Party A',
                    },
                },
            },
            UpdateCandidateRequest: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'John Doe',
                    },
                    party: {
                        type: 'string',
                        example: 'Party A',
                    },
                },
            },
            UpdateCandidate: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Candidato actualizado exitosamente.',
                    },
                    name: {
                        type: 'string',
                        example: 'John Doe',
                    },
                    party: {
                        type: 'string',
                        example: 'Party A',
                    },
                },
            },
            Vote: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1,
                    },
                    voter_id: {
                        type: 'integer',
                        example: 2,
                    },
                    candidate_id: {
                        type: 'integer',
                        example: 3,
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        example: '2023-10-01T12:34:56Z',
                    },
                },
            },
            VoteMessage: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Voto emitido exitosamente.',
                    },
                },
            },
            VoteDeleteMessage: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Voto eliminado exitosamente.',
                    },
                },
            },
            VoterDeleteMessage: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Votante eliminado exitosamente.',
                    },
                },
            },
            CandidateDeleteMessage: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Candidato eliminado exitosamente.',
                    },
                },
            },
            VoteWithDetails: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 3,
                    },
                    voter_id: {
                        type: 'integer',
                        example: 3,
                    },
                    candidate_id: {
                        type: 'integer',
                        example: 3,
                    },
                    Voter: {
                        $ref: '#/components/schemas/VoterVote',
                    },
                    Candidate: {
                        $ref: '#/components/schemas/CandidateVote',
                    },
                },
            },
            CreateVoteRequest: {
                type: 'object',
                properties: {
                    candidate_id: {
                        type: 'integer',
                        example: 3,
                    },
                },
            },
            ErrorResponse: {
                type: 'object',
                properties: {
                    error: {
                        type: 'string',
                        example: 'Descripción detallada del error.',
                    },
                },
            },
        },
    },
    VoteStatistics: {
        type: 'object',
        properties: {
            totalVotes: {
                type: 'integer',
                example: 100,
            },
            candidateVotes: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        candidateId: {
                            type: 'integer',
                            example: 1,
                        },
                        candidateName: {
                            type: 'string',
                            example: 'Juan Pérez',
                        },
                        votes: {
                            type: 'integer',
                            example: 50,
                        },
                    },
                },
            },
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ['./docs/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

