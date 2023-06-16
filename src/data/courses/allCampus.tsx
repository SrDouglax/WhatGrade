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
  vacancies: {
    no: number;
    a1: number;
    a2: number;
  };
};

type Campus = {
    campus: string;
    courses: Course[];
};

export const allCampus: Array<Campus> = [
  {
    campus: "Arcoverde",
    courses: [
      {
        name: "Direito",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 67.63,
            lowest: 58.57,
          },
          quotaholder: {
            highest: 66,
            lowest: 47.1,
          },
        },
        vacancies: {
          no: 17,
          a1: 4,
          a2: 4,
        },
      },
      {
        name: "Odontologia",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 63.1,
            lowest: 59.77,
          },
          quotaholder: {
            highest: 53.84,
            lowest: 47.37,
          },
        },
        vacancies: {
          no: 7,
          a1: 2,
          a2: 1,
        },
      },
    ],
  },
  {
    campus: "Benfica",
    courses: [
      {
        name: "Administração",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 74.67,
            lowest: 54.94,
          },
          quotaholder: {
            highest: 70.33,
            lowest: 29.8,
          },
        },
        vacancies: {
          no: 84,
          a1: 18,
          a2: 18,
        },
      },
      {
        name: "Direito",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 80.17,
            lowest: 69.23,
          },
          quotaholder: {
            highest: 73.3,
            lowest: 56.47,
          },
        },
        vacancies: {
          no: 17,
          a1: 4,
          a2: 4,
        },
      },
      {
        name: "Engenharia Civil",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 69.73,
            lowest: 47.14,
          },
          quotaholder: {
            highest: 59.54,
            lowest: 29.47,
          },
        },
        vacancies: {
          no: 72,
          a1: 21,
          a2: 7,
        },
      },
      {
        name: "Engenharia da Computação",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 80.47,
            lowest: 71.13,
          },
          quotaholder: {
            highest: 73.07,
            lowest: 56.14,
          },
        },
        vacancies: {
          no: 28,
          a1: 6,
          a2: 6,
        },
      },
      {
        name: "Engenharia de Controle e Automação",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 70.43,
            lowest: 56.27,
          },
          quotaholder: {
            highest: 62.64,
            lowest: 44.74,
          },
        },
        vacancies: {
          no: 23,
          a1: 3,
          a2: 4,
        },
      },
      {
        name: "Engenharia Elétrica Eletrônica",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 78.27,
            lowest: 53.97,
          },
          quotaholder: {
            highest: 50.94,
            lowest: 41.24,
          },
        },
        vacancies: {
          no: 14,
          a1: 6,
          a2: 0,
        },
      },
      {
        name: "Engenharia Elétrica Eletrotécnica",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 76.57,
            lowest: 47.44,
          },
          quotaholder: {
            highest: 64.67,
            lowest: 38.6,
          },
        },
        vacancies: {
          no: 33,
          a1: 6,
          a2: 1,
        },
      },
      {
        name: "Engenharia Elétrica Telecomunicações",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 63.37,
            lowest: 31.87,
          },
          quotaholder: {
            highest: 40.37,
            lowest: 26.54,
          },
        },
        vacancies: {
          no: 18,
          a1: 4,
          a2: 1,
        },
      },
      {
        name: "Engenharia Mecânica Industrial",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 75.93,
            lowest: 48.8,
          },
          quotaholder: {
            highest: 72.87,
            lowest: 21.24,
          },
        },
        vacancies: {
          no: 22,
          a1: 4,
          a2: 4,
        },
      },
      {
        name: "Física de Materiais",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 72.77,
            lowest: 55.34,
          },
          quotaholder: {
            highest: 40.87,
            lowest: 39.04,
          },
        },
        vacancies: {
          no: 8,
          a1: 1,
          a2: 1,
        },
      },
    ],
  },
  {
    campus: "Caruaru",
    courses: [
      {
        name: "Administração",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 58.94,
            lowest: 46.97,
          },
          quotaholder: {
            highest: 47.04,
            lowest: 34.4,
          },
        },
        vacancies: {
          no: 17,
          a1: 4,
          a2: 4,
        },
      },
      {
        name: "Sistemas de Informação",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 65.3,
            lowest: 57,
          },
          quotaholder: {
            highest: 61.5,
            lowest: 47.7,
          },
        },
        vacancies: {
          no: 14,
          a1: 3,
          a2: 3,
        },
      },
    ],
  },
  {
    campus: "Garanhuns",
    courses: [
      {
        name: "Ciências Biológicas",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 60.87,
            lowest: 41.74,
          },
          quotaholder: {
            highest: 51.97,
            lowest: 34.04,
          },
        },
        vacancies: {
          no: 17,
          a1: 4,
          a2: 4,
        },
      },
      {
        name: "Computação",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 54.67,
            lowest: 47.3,
          },
          quotaholder: {
            highest: 57.67,
            lowest: 35.07,
          },
        },
        vacancies: {
          no: 10,
          a1: 3,
          a2: 2,
        },
      },
      {
        name: "Engenharia de Software",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 75.87,
            lowest: 62.3,
          },
          quotaholder: {
            highest: 67,
            lowest: 55.8,
          },
        },
        vacancies: {
          no: 10,
          a1: 3,
          a2: 2,
        },
      },
      {
        name: "Geografia",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 41.77,
            lowest: 22.6,
          },
          quotaholder: {
            highest: 46.54,
            lowest: 30.44,
          },
        },
        vacancies: {
          no: 11,
          a1: 4,
          a2: 1,
        },
      },
      {
        name: "História",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 62.54,
            lowest: 40.8,
          },
          quotaholder: {
            highest: 52.84,
            lowest: 37.5,
          },
        },
        vacancies: {
          no: 17,
          a1: 5,
          a2: 3,
        },
      },
      {
        name: "Letras",
        formation: "Português",
        grades: {
          broadCompetition: {
            highest: 69.2,
            lowest: 44.54,
          },
          quotaholder: {
            highest: 46.97,
            lowest: 37.14,
          },
        },
        vacancies: {
          no: 17,
          a1: 4,
          a2: 4,
        },
      },
      {
        name: "Matemática",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 56.34,
            lowest: 42.27,
          },
          quotaholder: {
            highest: 62.57,
            lowest: 38.34,
          },
        },
        vacancies: {
          no: 17,
          a1: 5,
          a2: 3,
        },
      },
      {
        name: "Medicina",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 83.83,
            lowest: 76.2,
          },
          quotaholder: {
            highest: 76.13,
            lowest: 54.9,
          },
        },
        vacancies: {
          no: 14,
          a1: 3,
          a2: 3,
        },
      },
      {
        name: "Pedagogia",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 58.24,
            lowest: 37.2,
          },
          quotaholder: {
            highest: 48.97,
            lowest: 29.74,
          },
        },
        vacancies: {
          no: 17,
          a1: 5,
          a2: 3,
        },
      },
      {
        name: "Psicologia",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 70.8,
            lowest: 59.7,
          },
          quotaholder: {
            highest: 73.67,
            lowest: 52.57,
          },
        },
        vacancies: {
          no: 17,
          a1: 4,
          a2: 4,
        },
      },
    ],
  },
  {
    campus: "Mata Norte",
    courses: [
      {
        name: "Ciências Biológicas",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 63.4,
            lowest: 40.57,
          },
          quotaholder: {
            highest: 48.54,
            lowest: 36.7,
          },
        },
        vacancies: {
          no: 31,
          a1: 8,
          a2: 6,
        },
      },
      {
        name: "Computação",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 54.1,
            lowest: 43.8,
          },
          quotaholder: {
            highest: 46.1,
            lowest: 41.7,
          },
        },
        vacancies: {
          no: 10,
          a1: 3,
          a2: 2,
        },
      },
      {
        name: "Geografia",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 49.8,
            lowest: 34,
          },
          quotaholder: {
            highest: 57.97,
            lowest: 32.77,
          },
        },
        vacancies: {
          no: 21,
          a1: 5,
          a2: 4,
        },
      },
      {
        name: "Gestão em Logística",
        formation: "Tecnólogo",
        grades: {
          broadCompetition: {
            highest: 48.9,
            lowest: 34.67,
          },
          quotaholder: {
            highest: 43.4,
            lowest: 32.87,
          },
        },
        vacancies: {
          no: 14,
          a1: 5,
          a2: 1,
        },
      },
      {
        name: "História",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 60.54,
            lowest: 49,
          },
          quotaholder: {
            highest: 55.3,
            lowest: 40.7,
          },
        },
        vacancies: {
          no: 21,
          a1: 5,
          a2: 4,
        },
      },
      {
        name: "Letras – Português/Espanhol",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 56.44,
            lowest: 33.97,
          },
          quotaholder: {
            highest: 44.1,
            lowest: 27.37,
          },
        },
        vacancies: {
          no: 14,
          a1: 4,
          a2: 2,
        },
      },
      {
        name: "Letras – Português/Inglês",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 59.17,
            lowest: 40.2,
          },
          quotaholder: {
            highest: 52.44,
            lowest: 27.24,
          },
        },
        vacancies: {
          no: 21,
          a1: 6,
          a2: 3,
        },
      },
      {
        name: "Matemática",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 62.34,
            lowest: 42.3,
          },
          quotaholder: {
            highest: 53.07,
            lowest: 36.44,
          },
        },
        vacancies: {
          no: 28,
          a1: 6,
          a2: 6,
        },
      },
      {
        name: "Pedagogia",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 50.84,
            lowest: 37.3,
          },
          quotaholder: {
            highest: 49.8,
            lowest: 34.4,
          },
        },
        vacancies: {
          no: 21,
          a1: 5,
          a2: 4,
        },
      },
    ],
  },
  {
    campus: "Mata Sul",
    courses: [
      {
        name: "Administração",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 59.64,
            lowest: 27.67,
          },
          quotaholder: {
            highest: 42.44,
            lowest: 33.74,
          },
        },
        vacancies: {
          no: 21,
          a1: 4,
          a2: 0,
        },
      },
      {
        name: "Serviço Social",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 48.9,
            lowest: 29.07,
          },
          quotaholder: {
            highest: 37.8,
            lowest: 33.44,
          },
        },
        vacancies: {
          no: 13,
          a1: 3,
          a2: 0,
        },
      },
    ],
  },
  {
    campus: "Ouricuri",
    courses: [
      {
        name: "Enfermagem",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 48.74,
            lowest: 39.64,
          },
          quotaholder: {
            highest: 46.07,
            lowest: 36.3,
          },
        },
        vacancies: {
          no: 6,
          a1: 2,
          a2: 1,
        },
      },
    ],
  },
  {
    campus: "Petrolina",
    courses: [
      {
        name: "Ciências Biológicas",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 59.4,
            lowest: 21.07,
          },
          quotaholder: {
            highest: 51.57,
            lowest: 26.54,
          },
        },
        vacancies: {
          no: 33,
          a1: 12,
          a2: 1,
        },
      },
      {
        name: "Enfermagem",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 67,
            lowest: 53.97,
          },
          quotaholder: {
            highest: 58.6,
            lowest: 45.47,
          },
        },
        vacancies: {
          no: 14,
          a1: 3,
          a2: 3,
        },
      },
      {
        name: "Fisioterapia",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 65.73,
            lowest: 48.24,
          },
          quotaholder: {
            highest: 59.07,
            lowest: 45.3,
          },
        },
        vacancies: {
          no: 14,
          a1: 3,
          a2: 3,
        },
      },
      {
        name: "Geografia",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 46.47,
            lowest: 27.64,
          },
          quotaholder: {
            highest: 32.94,
            lowest: 29.8,
          },
        },
        vacancies: {
          no: 15,
          a1: 5,
          a2: 0,
        },
      },
      {
        name: "História",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 52.6,
            lowest: 28.54,
          },
          quotaholder: {
            highest: 46.87,
            lowest: 25.87,
          },
        },
        vacancies: {
          no: 19,
          a1: 9,
          a2: 2,
        },
      },
      {
        name: "Letras – Português/Espanhol",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 50.7,
            lowest: 30.3,
          },
          quotaholder: {
            highest: 50.07,
            lowest: 27.4,
          },
        },
        vacancies: {
          no: 4,
          a1: 9,
          a2: 5,
        },
      },
      {
        name: "Letras – Português/Inglês",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 57.4,
            lowest: 33.77,
          },
          quotaholder: {
            highest: 43.24,
            lowest: 21.8,
          },
        },
        vacancies: {
          no: 16,
          a1: 6,
          a2: 2,
        },
      },
      {
        name: "Matemática",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 62.97,
            lowest: 29.9,
          },
          quotaholder: {
            highest: 53.97,
            lowest: 36.24,
          },
        },
        vacancies: {
          no: 20,
          a1: 7,
          a2: 3,
        },
      },
      {
        name: "Nutrição",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 65.4,
            lowest: 53.07,
          },
          quotaholder: {
            highest: 56.57,
            lowest: 45.14,
          },
        },
        vacancies: {
          no: 17,
          a1: 4,
          a2: 4,
        },
      },
      {
        name: "Pedagogia",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 47.24,
            lowest: 25.77,
          },
          quotaholder: {
            highest: 42.74,
            lowest: 29.24,
          },
        },
        vacancies: {
          no: 17,
          a1: 11,
          a2: 2,
        },
      },
    ],
  },
  {
    campus: "Salgueiro",
    courses: [
      {
        name: "Administração",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 54.84,
            lowest: 32.17,
          },
          quotaholder: {
            highest: 47.7,
            lowest: 29.47,
          },
        },
        vacancies: {
          no: 17,
          a1: 5,
          a2: 3,
        },
      },
    ],
  },
  {
    campus: "Santo Amaro",
    courses: [
      {
        name: "Ciências Biológicas",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 73.6,
            lowest: 58.24,
          },
          quotaholder: {
            highest: 57.14,
            lowest: 36.97,
          },
        },
        vacancies: {
          no: 28,
          a1: 6,
          a2: 6,
        },
      },
      {
        name: "Ciências Sociais",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 68.67,
            lowest: 55.77,
          },
          quotaholder: {
            highest: 57.3,
            lowest: 41.64,
          },
        },
        vacancies: {
          no: 14,
          a1: 3,
          a2: 3,
        },
      },
      {
        name: "Educação Física",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 66.57,
            lowest: 46.1,
          },
          quotaholder: {
            highest: 52.14,
            lowest: 37.87,
          },
        },
        vacancies: {
          no: 45,
          a1: 10,
          a2: 10,
        },
      },
      {
        name: "Educação Física",
        formation: "Licenciatura",
        grades: {
          broadCompetition: {
            highest: 51,
            lowest: 43.57,
          },
          quotaholder: {
            highest: 48.04,
            lowest: 35.84,
          },
        },
        vacancies: {
          no: 24,
          a1: 6,
          a2: 5,
        },
      },
      {
        name: "Enfermagem",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 72.63,
            lowest: 55.17,
          },
          quotaholder: {
            highest: 61.2,
            lowest: 47.9,
          },
        },
        vacancies: {
          no: 35,
          a1: 8,
          a2: 7,
        },
      },
      {
        name: "Medicina",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 96.7,
            lowest: 78.53,
          },
          quotaholder: {
            highest: 91,
            lowest: 59.5,
          },
        },
        vacancies: {
          no: 52,
          a1: 12,
          a2: 11,
        },
      },
      {
        name: "Odontologia",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 73.63,
            lowest: 60.34,
          },
          quotaholder: {
            highest: 66.87,
            lowest: 47.4,
          },
        },
        vacancies: {
          no: 35,
          a1: 8,
          a2: 7,
        },
      },
      {
        name: "Saúde Coletiva",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 57.04,
            lowest: 46.67,
          },
          quotaholder: {
            highest: 44.54,
            lowest: 39.5,
          },
        },
        vacancies: {
          no: 7,
          a1: 2,
          a2: 1,
        },
      },
      {
        name: "Terapia Ocupacional",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 64.2,
            lowest: 54.97,
          },
          quotaholder: {
            highest: 60.4,
            lowest: 45.97,
          },
        },
        vacancies: {
          no: 7,
          a1: 2,
          a2: 1,
        },
      },
    ],
  },
  {
    campus: "Serra Talhada",
    courses: [
      {
        name: "Medicina",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 76.8,
            lowest: 73.43,
          },
          quotaholder: {
            highest: 75.47,
            lowest: 61.1,
          },
        },
        vacancies: {
          no: 7,
          a1: 2,
          a2: 1,
        },
      },
    ],
  },
  {
    campus: "Surubim",
    courses: [
      {
        name: "Engenharia de Software",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 65.93,
            lowest: 52.1,
          },
          quotaholder: {
            highest: 49.97,
            lowest: 48.07,
          },
        },
        vacancies: {
          no: 10,
          a1: 3,
          a2: 2,
        },
      },
      {
        name: "Sistemas de Informação",
        formation: "Bacharelado",
        grades: {
          broadCompetition: {
            highest: 54.6,
            lowest: 28.6,
          },
          quotaholder: {
            highest: 37.27,
            lowest: 30.94,
          },
        },
        vacancies: {
          no: 11,
          a1: 3,
          a2: 0,
        },
      },
    ],
  },
];