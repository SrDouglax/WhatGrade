type Grades = {
    broadCompetition: {
        highest: number;
        lowest: number;
    };
    quotaholder: {
        highest: number;
        lowest: number;
    };
};

type Course = {
    name: string;
    formation: string;
    grades: Grades;
};

type Campus = {
    campus: string;
    courses: Course[];
};

export const allCampus: Array<Campus> = [
    {
        campus: 'PETROLINA',
        courses: [
            {
                name: 'CIÊNCIAS BIOLÓGICAS (noturno)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 52.44,
                        lowest: 37.57,
                    },
                    quotaholder: {
                        highest: 42.7,
                        lowest: 35.57,
                    }
                }
            },
            {
                name: 'CIÊNCIAS BIOLÓGICAS (vespertino)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 50.74,
                        lowest: 39.94,
                    },
                    quotaholder: {
                        highest: 63.9,
                        lowest: 33.8,
                    }
                }
            },
            {
                name: 'ENFERMAGEM',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 68.6,
                        lowest: 54.9,
                    },
                    quotaholder: {
                        highest: 62.6,
                        lowest: 48.64,
                    }
                }
            },
            {
                name: 'FISIOTERAPIA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 60.07,
                        lowest: 54.27,
                    },
                    quotaholder: {
                        highest: 58.57,
                        lowest: 42.37,
                    }
                }
            },
            {
                name: 'GEOGRAFIA (noturno)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 49.7,
                        lowest: 25.47,
                    },
                    quotaholder: {
                        highest: 37.4,
                        lowest: 29.17,
                    }
                }
            },
            {
                name: 'GEOGRAFIA (vespertino)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 43.74,
                        lowest: 18.7,
                    },
                    quotaholder: {
                        highest: 38.1,
                        lowest: 22.97,
                    }
                }
            },
            {
                name: 'HISTÓRIA (noturno)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 53.04,
                        lowest: 31.3,
                    },
                    quotaholder: {
                        highest: 43.27,
                        lowest: 30.94,
                    }
                }
            },
            {
                name: 'HISTÓRIA (vespertino)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 55.37,
                        lowest: 32.34,
                    },
                    quotaholder: {
                        highest: 43.4,
                        lowest: 36.4,
                    }
                }
            },
            {
                name: 'LETRAS - PORTUGUÊS E ESPANHOL (noturno)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 40.44,
                        lowest: 48.1,
                    },
                    quotaholder: {
                        highest: 34.2,
                        lowest: 26.97,
                    }
                }
            },
            {
                name: 'LETRAS - PORTUGUÊS E ESPANHOL (vespertino)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 48.0,
                        lowest: 37.0,
                    },
                    quotaholder: {
                        highest: 32.3,
                        lowest: 28.37,
                    }
                }
            },
            {
                name: 'LETRAS - PORTUGUÊS E INGLÊS (noturno)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 50.44,
                        lowest: 44.14,
                    },
                    quotaholder: {
                        highest: 32.57,
                        lowest: 39.6,
                    }
                }
            },
            {
                name: 'LETRAS - PORTUGUÊS E INGLÊS (vespertino)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 60.57,
                        lowest: 39.04,
                    },
                    quotaholder: {
                        highest: 27.97,
                        lowest: 30.64,
                    }
                }
            },
            {
                name: 'MATEMÁTICA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 69.5,
                        lowest: 62.24,
                    },
                    quotaholder: {
                        highest: 35.84,
                        lowest: 40.87,
                    }
                }
            },
            {
                name: 'NUTRIÇÃO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 60.87,
                        lowest: 50.87,
                    },
                    quotaholder: {
                        highest: 49.3,
                        lowest: 41.24,
                    }
                }
            },
            {
                name: 'PEDAGOGIA (noturno)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 43.2,
                        lowest: 40.14,
                    },
                    quotaholder: {
                        highest: 21.37,
                        lowest: 26.14,
                    }
                }
            },
            {
                name: 'PEDAGOGIA (vespertino)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 49.0,
                        lowest: 38.97,
                    },
                    quotaholder: {
                        highest: 20.0,
                        lowest: 26.64,
                    }
                }
            }
        ]
    },
    {
        campus: 'ARCO VERDE',
        courses: [
            {
                name: 'DIREITO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 65.9,
                        lowest: 58.44,
                    },
                    quotaholder: {
                        highest: 56.7,
                        lowest: 43.77,
                    }
                }
            },
            {
                name: 'ODONTOLOGIA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 67.67,
                        lowest: 55.97,
                    },
                    quotaholder: {
                        highest: 54.27,
                        lowest: 45.5,
                    }
                }
            }
            
        ]
    },
    {
        campus: 'CAMARAGIBE',
        courses: [
            {
                name: 'ODONTOLOGIA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 78.7,
                        lowest: 61.54,
                    },
                    quotaholder: {
                        highest: 54.77,
                        lowest: 42.54,
                    }
                }
            }
        ]
    },
    {
        campus: 'CARUARU',
        courses: [
            {
                name: 'ADMINISTRAÇÃO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 59.4,
                        lowest: 46.0,
                    },
                    quotaholder: {
                        highest: 51.27,
                        lowest: 38.1,
                    }
                }
            },
            {
                name: 'SISTEMA DE INFORMAÇÃO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 65.74,
                        lowest: 51.57,
                    },
                    quotaholder: {
                        highest: 73.77,
                        lowest: 26.24,
                    }
                }
            }
        ]
    },
    {
        campus: 'GARANHUNS',
        courses: [
            {
                name: 'CIÊNCIAS BIOLÓGICAS',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 54.34,
                        lowest: 42.44,
                    },
                    quotaholder: {
                        highest: 58.87,
                        lowest: 28.17,
                    }
                }
            },
            {
                name: 'COMPUTAÇÃO',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 54.1,
                        lowest: 41.9,
                    },
                    quotaholder: {
                        highest: 47.4,
                        lowest: 36.64,
                    }
                }
            },
            {
                name: 'ENGENHARIA DE SOFTWARE',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 70.37,
                        lowest: 59.8,
                    },
                    quotaholder: {
                        highest: 54.04,
                        lowest: 49.97,
                    }
                }
            },
            {
                name: 'GEOGRAFIA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 49.6,
                        lowest: 20.87,
                    },
                    quotaholder: {
                        highest: 49.0,
                        lowest: 39.2,
                    }
                }
            },
            {
                name: 'HISTÓRIA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 64.77,
                        lowest: 45.07,
                    },
                    quotaholder: {
                        highest: 56.4,
                        lowest: 24.3,
                    }
                }
            },
            {
                name: 'LETRAS - LÍNGUA PORTUGUESA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 65.14,
                        lowest: 38.64,
                    },
                    quotaholder: {
                        highest: 52.14,
                        lowest: 39.44,
                    }
                }
            },
            {
                name: 'MATEMÁTICA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 60.9,
                        lowest: 41.77,
                    },
                    quotaholder: {
                        highest: 51.47,
                        lowest: 36.5,
                    }
                }
            },
            {
                name: 'MEDICINA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 81.13,
                        lowest: 74.8,
                    },
                    quotaholder: {
                        highest: 73.47,
                        lowest: 62.94,
                    }
                }
            },
            {
                name: 'PEDAGOGIA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 51.67,
                        lowest: 33.77,
                    },
                    quotaholder: {
                        highest: 48.1,
                        lowest: 26.6,
                    }
                }
            },
            {
                name: 'PSICOLOGIA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 72.4,
                        lowest: 59.37,
                    },
                    quotaholder: {
                        highest: 66.47,
                        lowest: 46.84,
                    }
                }
            },
        ]
    },
    {
        campus: 'MATA NORTE',
        courses: [
            {
                name: 'CIÊNCIAS BIOLÓGICAS (noturno)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 61.17,
                        lowest: 43.34,
                    },
                    quotaholder: {
                        highest: 49.87,
                        lowest: 35.27,
                    }
                }
            },
            {
                name: 'CIÊNCIAS BIOLÓGICAS (vespertino)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 58.14,
                        lowest: 42.5,
                    },
                    quotaholder: {
                        highest: 47.67,
                        lowest: 36.97,
                    }
                }
            },
            {
                name: 'GEOGRAFIA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 51.07,
                        lowest: 35.2,
                    },
                    quotaholder: {
                        highest: 50.5,
                        lowest: 33.64,
                    }
                }
            },
            {
                name: 'GESTÃO EM LOGÍSTICA',
                formation: 'Tecnológico',
                grades: {
                    broadCompetition: {
                        highest: 53.0,
                        lowest: 36.74,
                    },
                    quotaholder: {
                        highest: 48.2,
                        lowest: 33.54,
                    }
                }
            },
            {
                name: 'HISTÓRIA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 66.44,
                        lowest: 47.27,
                    },
                    quotaholder: {
                        highest: 48.9,
                        lowest: 31.07,
                    }
                }
            },
            {
                name: 'LETRAS - ESPANHOL',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 50.34,
                        lowest: 36.44,
                    },
                    quotaholder: {
                        highest: 60.57,
                        lowest: 27.64,
                    }
                }
            },
            {
                name: 'LETRAS - PORTUGUÊS E INGLÊS',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 60.34,
                        lowest: 45.87,
                    },
                    quotaholder: {
                        highest: 52.24,
                        lowest: 37.84,
                    }
                }
            },
            {
                name: 'MATEMÁTICA (noturno)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 53.44,
                        lowest: 42.24,
                    },
                    quotaholder: {
                        highest: 62.14,
                        lowest: 29.87,
                    }
                }
            },
            {
                name: 'MATEMÁTICA (vespertino)',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 61.57,
                        lowest: 41.57,
                    },
                    quotaholder: {
                        highest: 55.67,
                        lowest: 42.74,
                    }
                }
            },
            {
                name: 'PEDAGOGIA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 49.64,
                        lowest: 38.34,
                    },
                    quotaholder: {
                        highest: 54.3,
                        lowest: 36.24,
                    }
                }
            }
        ]
    },
    {
        campus: 'MATA SUL',
        courses: [
            {
                name: 'ADMINISTRAÇÃO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 54.17,
                        lowest: 39.14,
                    },
                    quotaholder: {
                        highest: 36.64,
                        lowest: 36.64,
                    }
                }
            },
            {
                name: 'SERVIÇO SOCIAL',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 50.77,
                        lowest: 35.5,
                    },
                    quotaholder: {
                        highest: 43.34,
                        lowest: 25.34,
                    }
                }
            }
        ]
    },
    {
        campus: 'SALGUEIRO',
        courses: [
            {
                name: 'ADMINISTRAÇÃO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 52.64,
                        lowest: 30.97,
                    },
                    quotaholder: {
                        highest: 46.9,
                        lowest: 34.4,
                    }
                }
            }
        ]
    },
    {
        campus: 'SANTO AMARO',
        courses: [
            {
                name: 'CIÊNCIAS BIOLÓGICAS',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 79.77,
                        lowest: 59.7,
                    },
                    quotaholder: {
                        highest: 62.2,
                        lowest: 45.87,
                    }
                }
            },
            {
                name: 'CIÊNCIAS SOCIAIS',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 77.9,
                        lowest: 54.14,
                    },
                    quotaholder: {
                        highest: 56.44,
                        lowest: 44.3,
                    }
                }
            },
            {
                name: 'EDUCAÇÃO FÍSICA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 64.84,
                        lowest: 46.8,
                    },
                    quotaholder: {
                        highest: 50.14,
                        lowest: 24.44,
                    }
                }
            },
            {
                name: 'EDUCAÇÃO FÍSICA',
                formation: 'Licenciatura',
                grades: {
                    broadCompetition: {
                        highest: 58.27,
                        lowest: 43.64,
                    },
                    quotaholder: {
                        highest: 50.27,
                        lowest: 27.77,
                    }
                }
            },
            {
                name: 'ENFERMAGEM',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 68.6,
                        lowest: 55.5,
                    },
                    quotaholder: {
                        highest: 58.74,
                        lowest: 40.17,
                    }
                }
            },
            {
                name: 'MEDICINA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 86.47,
                        lowest: 78.7,
                    },
                    quotaholder: {
                        highest: 86.27,
                        lowest: 63.74,
                    }
                }
            },
            {
                name: 'SAÚDE COLETIVA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 68.47,
                        lowest: 53.54,
                    },
                    quotaholder: {
                        highest: 46.8,
                        lowest: 42.97,
                    }
                }
            }
        ]
    },
    {
        campus: 'SERRA TALHADA',
        courses: [
            {
                name: 'MEDICINA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 87.53,
                        lowest: 74.97,
                    },
                    quotaholder: {
                        highest: 72.8,
                        lowest: 67.3,
                    }
                }
            }
        ]
    },
    {
        campus: 'FCAP',
        courses: [
            {
                name: 'ADMINISTRAÇÃO DE EMPRESAS (Matutino)',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 76.9,
                        lowest: 59.0,
                    },
                    quotaholder: {
                        highest: 62.8,
                        lowest: 29.5,
                    },
                },
            },
            {
                name: 'ADMINISTRAÇÃO DE EMPRESAS (Noturno)',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 69.87,
                        lowest: 55.2,
                    },
                    quotaholder: {
                        highest: 62.07,
                        lowest: 27.07,
                    },
                },
            },
            {
                name: 'DIREITO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 85.2,
                        lowest: 73.07,
                    },
                    quotaholder: {
                        highest: 75.03,
                        lowest: 49.74,
                    },
                },
            },
        ],
    },
    {
        campus: 'POLI',
        courses: [
            {
                name: 'ENGENHARIA CIVIL (Matutino)',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 84.3,
                        lowest: 57.7,
                    },
                    quotaholder: {
                        highest: 66.97,
                        lowest: 38.1,
                    },
                },
            },
            {
                name: 'ENGENHARIA CIVIL (Vespertino)',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 78.7,
                        lowest: 52.34,
                    },
                    quotaholder: {
                        highest: 56.8,
                        lowest: 30.24,
                    },
                },
            },
            {
                name: 'ENGENHARIA DA COMPUTAÇÃO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 83.27,
                        lowest: 73.87,
                    },
                    quotaholder: {
                        highest: 81.53,
                        lowest: 50.6,
                    },
                },
            },
            {
                name: 'ENGENHARIA DE CONTROLE E AUTOMAÇÃO',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 86.83,
                        lowest: 54.94,
                    },
                    quotaholder: {
                        highest: 68.8,
                        lowest: 36.4,
                    },
                },
            },
            {
                name: 'ENGENHARIA ELÉTRICA - ELETRÔNICA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 75.1,
                        lowest: 57.0,
                    },
                    quotaholder: {
                        highest: 55.84,
                        lowest: 34.44,
                    },
                },
            },
            {
                name: 'ENGENHARIA ELÉTRICA - ELETROTÉCNICA',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 75.33,
                        lowest: 48.77,
                    },
                    quotaholder: {
                        highest: 56.4,
                        lowest: 32.94,
                    },
                },
            },
            {
                name: 'ENGENHARIA ELÉTRICA - TELECOMUNICAÇÕES',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 66.47,
                        lowest: 52.87,
                    },
                    quotaholder: {
                        highest: 50.7,
                        lowest: 40.94,
                    },
                },
            },
            {
                name: 'FÍSICA DE MATERIAIS',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 83.5,
                        lowest: 55.84,
                    },
                    quotaholder: {
                        highest: 43.6,
                        lowest: 34.17,
                    },
                },
            },
            {
                name: 'MECÂNICA INDUSTRIAL',
                formation: 'Bacharelado',
                grades: {
                    broadCompetition: {
                        highest: 77.83,
                        lowest: 61.7,
                    },
                    quotaholder: {
                        highest: 56.44,
                        lowest: 37.14,
                    }
                }
            }
        ]
    }
]

