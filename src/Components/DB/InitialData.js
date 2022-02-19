export const initialData = {
  CEO: {
    EMPLOYEE_ID: 1,
    NAME: "Beekram Khatiwada",
    EMAIL_ID: "beekramKhatiwada94@gmail.com",
    PHONE_NUMBER: "7221454852",
  },
  HEAD_OF_HR: {
    EMPLOYEE_ID: 2,
    NAME: "Kamlesh Yadav",
    EMAIL_ID: "kamleshyadav91@gmail.com",
    PHONE_NUMBER: "6001145485",
    TEAMS_UNDER: {
      TEAM_1: {
        TEAM_LEADER: {
          EMPLOYEE_ID: 3,
          NAME: "Mukesh Kumar",
          EMAIL_ID: "mukeskumar93@gmail.com",
          PHONE_NUMBER: "7221454852",
        },
        TEAM_MEMBER_1: {
          TEAM_LEADER_ID: 3,
          EMPLOYEE_ID: 4,
          NAME: "Suresh Raina",
          EMAIL_ID: "suresraina12@gmail.com",
          PHONE_NUMBER: "7221400852",
        },
      },
      TEAM_2: {
        TEAM_LEADER: {
          EMPLOYEE_ID: 5,
          NAME: "Dinesh Kumar Singhania",
          EMAIL_ID: "dineskumar95@gmail.com",
          PHONE_NUMBER: "7001454852",
        },
        TEAM_MEMBER_1: {
          TEAM_LEADER_ID: 5,
          EMPLOYEE_ID: 6,
          NAME: "Javed Altaf",
          EMAIL_ID: "javaidaltaf42@gmail.com",
          PHONE_NUMBER: "7881400852",
        },
      },
    },
  },

  HEAD_OF_ENGINEERING: {
    EMPLOYEE_ID: 7,
    NAME: "Vikas Sharma",
    EMAIL_ID: "vikassharma90@gmail.com",
    PHONE_NUMBER: "7220004852",
    TEAMS_UNDER: {
      TEAM_1: {
        TEAM_LEADER: {
          EMPLOYEE_ID: 8,
          NAME: "Mukesh Kumar",
          EMAIL_ID: "mukeskumar93@gmail.com",
          PHONE_NUMBER: "7221999332",
        },
        TEAM_MEMBER_1: {
          TEAM_LEADER_ID: 8,
          EMPLOYEE_ID: 9,
          NAME: "Laraib Khan",
          EMAIL_ID: "laraibkhan99@gmail.com",
          PHONE_NUMBER: "7221400300",
        },
      },
    },
  },
  HEAD_OF_DESIGN: {
    EMPLOYEE_ID: 10,
    NAME: "Megha Singhania",
    EMAIL_ID: "meghasinghania@gmail.com",
    PHONE_NUMBER: "9591114852",
    TEAMS_UNDER: {
      TEAM_1: {
        TEAM_LEADER: {
          EMPLOYEE_ID: 11,
          NAME: "Shiraaz Ahmedd",
          EMAIL_ID: "shiraazAhmed4@gmail.com",
          PHONE_NUMBER: "6789998212",
        },
        TEAM_MEMBER_1: {
          TEAM_LEADER_ID: 11,
          EMPLOYEE_ID: 12,
          NAME: "Gaurav Kumar",
          EMAIL_ID: "gauravkumar@gmail.com",
          PHONE_NUMBER: "7221845300",
        },
      },
    },
  },
};
