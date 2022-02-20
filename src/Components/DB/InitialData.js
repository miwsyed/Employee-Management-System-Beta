import IMG_HR_Department from "../Assets/Images/HR_Department.jpg";
import IMG_Enginerring_Department from "../Assets/Images/Engineering_Department.jpg";
import IMG_Design_Department from "../Assets/Images/Design_Department.jpg";

export const initialData = {
  DATABASE: [
    {
      DESIGNATION: "CEO",
      DETAILS: [
        { EMPLOYEE_ID: 1 },
        { NAME: "Beekram Khatiwada" },
        { EMAIL_ID: "beekramKhatiwada94@gmail.com" },
        { PHONE_NUMBER: "7221454852" },
        { IS_DEPARTMENT_HEAD: false },
        { IS_TEAM_LEADER: false },
        { IS_TEAM_MEMBER: false },
      ],
    },
    {
      DESIGNATION: "HEAD OF HR DEPARTMENT",
      DETAILS: [
        { EMPLOYEE_ID: 2 },
        { NAME: "Kamlesh Yadav" },
        { EMAIL_ID: "kamleshyadav91@gmail.com" },
        { PHONE_NUMBER: "6001145485" },
        { IS_DEPARTMENT_HEAD: true },
        { IS_TEAM_LEADER: false },
        { IS_TEAM_MEMBER: false },
      ],
    },
    {
      DESIGNATION: "HEAD OF ENGINEERING DEPARTMENT",
      DETAILS: [
        { EMPLOYEE_ID: 3 },
        { NAME: "Vikas Sharma" },
        { EMAIL_ID: "vikassharma90@gmail.com" },
        { PHONE_NUMBER: "7220004852" },
        { IS_DEPARTMENT_HEAD: true },
        { IS_TEAM_LEADER: false },
        { IS_TEAM_MEMBER: false },
      ],
    },
    {
      DESIGNATION: "HEAD OF DESIGN DEPARTMENT",
      DETAILS: [
        { EMPLOYEE_ID: 4 },
        { NAME: "Megha Singhania" },
        { EMAIL_ID: "meghasinghania@gmail.com" },
        { PHONE_NUMBER: "9591114852" },
        { TITLE: "Head of Design Department" },
        { IS_DEPARTMENT_HEAD: true },
        { IS_TEAM_LEADER: false },
        { IS_TEAM_MEMBER: false },
      ],
    },

    //team LEADS
    {
      DESIGNATION: "TEAM LEAD",
      DETAILS: [
        { EMPLOYEE_ID: 5 },
        { NAME: "Mukesh Kumar" },
        { EMAIL_ID: "mukeskumar93@gmail.com" },
        { PHONE_NUMBER: "7221454852" },
        { IS_TEAM_LEADER: true },
        { IS_DEPARTMENT_HEAD: false },
        { IS_TEAM_MEMBER: false },
      ],
    },
    {
      DESIGNATION: "TEAM LEAD",
      DETAILS: [
        { EMPLOYEE_ID: 6 },
        { NAME: "Dinesh Kumar Singhania" },
        { EMAIL_ID: "dineskumar95@gmail.com" },
        { PHONE_NUMBER: "7001454852" },
        { IS_TEAM_LEADER: true },
        { IS_DEPARTMENT_HEAD: false },
        { IS_TEAM_MEMBER: false },
      ],
    },
    {
      DESIGNATION: "TEAM LEAD",
      DETAILS: [
        { EMPLOYEE_ID: 7 },
        { NAME: "Shiraaz Ahmedd" },
        { EMAIL_ID: "shiraazAhmed4@gmail.com" },
        { PHONE_NUMBER: "6789998212" },
        { IS_TEAM_LEADER: true },
        { IS_DEPARTMENT_HEAD: false },
        { IS_TEAM_MEMBER: false },
      ],
    },

    // EMPLOYEES BELOW
    {
      DESIGNATION: "TEAM MEMBER",
      DETAILS: [
        { TEAM_LEADER_ID: 5 },
        { EMPLOYEE_ID: 8 },
        { NAME: "Suresh Raina" },
        { EMAIL_ID: "suresraina12@gmail.com" },
        { PHONE_NUMBER: "7221400852" },
        { IS_TEAM_LEADER: false },
        { IS_DEPARTMENT_HEAD: false },
        { IS_TEAM_MEMBER: true },
      ],
    },
    {
      DESIGNATION: "TEAM MEMBER",
      DETAILS: [
        { TEAM_LEADER_ID: 5 },
        { EMPLOYEE_ID: 9 },
        { NAME: "Javed Altaf" },
        { EMAIL_ID: "javaidaltaf42@gmail.com" },
        { PHONE_NUMBER: "7881400852" },
        { IS_TEAM_LEADER: false },
        { IS_DEPARTMENT_HEAD: false },
        { IS_TEAM_MEMBER: true },
      ],
    },
    {
      DESIGNATION: "TEAM MEMBER",
      DETAILS: [
        { TEAM_LEADER_ID: 6 },
        { EMPLOYEE_ID: 10 },
        { NAME: "Laraib Khan" },
        { EMAIL_ID: "laraibkhan99@gmail.com" },
        { PHONE_NUMBER: "7221400300" },
        { IS_TEAM_LEADER: false },
        { IS_DEPARTMENT_HEAD: false },
        { IS_TEAM_MEMBER: true },
      ],
    },
    {
      DESIGNATION: "TEAM MEMBER",
      DETAILS: [
        { TEAM_LEADER_ID: 7 },
        { EMPLOYEE_ID: 11 },
        { NAME: "Gaurav Kumar" },
        { EMAIL_ID: "gauravkumar@gmail.com" },
        { PHONE_NUMBER: "7221845300" },
        { IS_TEAM_LEADER: false },
        { IS_DEPARTMENT_HEAD: false },
        { IS_TEAM_MEMBER: true },
      ],
    },

    //department and teams
    {
      DEPARTMENT_DETAILS: [
        {
          DEPARTMENT: "HR DEPARTMENT",
          DESCRIPTION: "Click below to head over to our HR department section ",
          IMAGE: IMG_HR_Department,
          TEAMS: {
            TEAM_HR_1: [{ TEAM_LEADER_ID: 5 }, { EMPLOYEE_ID: 11 }],
            TEAM_HR_2: [{ TEAM_LEADER_ID: 5 }, { EMPLOYEE_ID: 10 }],
          },
        },
      ],
    },
    {
      DEPARTMENT_DETAILS: [
        {
          DEPARTMENT: "ENGINEERING DEPARTMENT",
          DESCRIPTION:
            "Click below to head over to our Engineering Department section ",
          IMAGE: IMG_Enginerring_Department,
          TEAMS: {
            TEAM_DD_1: [{ TEAM_LEADER_ID: 6 }, { EMPLOYEE_ID: 9 }],
          },
        },
      ],
    },
    {
      DEPARTMENT_DETAILS: [
        {
          DEPARTMENT: "DESIGN DEPARTMENT",
          DESCRIPTION:
            "Click below to head over to our Design Department section ",
          IMAGE: IMG_Design_Department,
          TEAMS: {
            TEAM_DD_1: [{ TEAM_LEADER_ID: 7 }, { EMPLOYEE_ID: 8 }],
          },
        },
      ],
    },
    {
      IMAGES: [
        { IMAGE: IMG_HR_Department },
        { IMAGE: IMG_Enginerring_Department },
        { IMAGE: IMG_Design_Department },
      ],
    },
  ],
};
