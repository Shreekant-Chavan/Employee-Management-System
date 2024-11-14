const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e1@me.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a responsive design for the homepage.",
        date: "2023-10-29",
        category: "Design",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve dropdown issue on mobile view.",
        date: "2023-10-25",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
      },
      {
        title: "Write Blog Post",
        description: "Draft a blog post on latest tech trends.",
        date: "2023-10-20",
        category: "Writing",
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failedTask: 1,
    },
  },
  {
    id: 2,
    firstName: "Ravi",
    email: "e2@me.com",
    password: "123",
    tasks: [
      {
        title: "Research User Personas",
        description: "Conduct research on target user personas.",
        date: "2023-10-18",
        category: "Research",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Update Documentation",
        description: "Update internal project documentation.",
        date: "2023-10-21",
        category: "Documentation",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completedTask: 0,
      failedTask: 0,
    },
  },
  {
    id: 3,
    firstName: "Sita",
    email: "e3@me.com",
    password: "123",
    tasks: [
      {
        title: "SEO Audit",
        description: "Audit site for SEO improvements.",
        date: "2023-10-15",
        category: "SEO",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Develop Footer Section",
        description: "Add a footer section with social links.",
        date: "2023-10-22",
        category: "Development",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completedTask: 0,
      failedTask: 0,
    },
  },
  {
    id: 4,
    firstName: "Lakshmi",
    email: "e4@me.com",
    password: "123",
    tasks: [
      {
        title: "Test Login Page",
        description: "Perform testing on the login page.",
        date: "2023-10-18",
        category: "Testing",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Create Feature Request",
        description: "Add user feature request board.",
        date: "2023-10-20",
        category: "User Experience",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completedTask: 0,
      failedTask: 0,
    },
  },
  {
    id: 5,
    firstName: "Vijay",
    email: "e5@me.com",
    password: "123",
    tasks: [
      {
        title: "Email Campaign",
        description: "Prepare emails for new product launch.",
        date: "2023-10-25",
        category: "Marketing",
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
      },
      {
        title: "Fix CSS Issues",
        description: "Resolve responsive design issues.",
        date: "2023-10-24",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completedTask: 0,
      failedTask: 1,
    },
  },
  {
    id: 6,
    firstName: "Neha",
    email: "e6@me.com",
    password: "123",
    tasks: [
      {
        title: "Analyze Sales Data",
        description: "Review sales data for last quarter.",
        date: "2023-10-22",
        category: "Data Analysis",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Redesign Profile Page",
        description: "Update layout of user profile page.",
        date: "2023-10-27",
        category: "UI Design",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completedTask: 0,
      failedTask: 0,
    },
  },
  {
    id: 7,
    firstName: "Ankit",
    email: "e7@me.com",
    password: "123",
    tasks: [
      {
        title: "Implement Dark Mode",
        description: "Add dark mode support to app.",
        date: "2023-10-30",
        category: "Development",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Content Review",
        description: "Review all site content for accuracy.",
        date: "2023-10-17",
        category: "Review",
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failedTask: 0,
    },
  },
  {
    id: 8,
    firstName: "Priya",
    email: "e8@me.com",
    password: "123",
    tasks: [
      {
        title: "Create Database Schema",
        description: "Design schema for new feature.",
        date: "2023-10-26",
        category: "Database",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Design Login Flow",
        description: "Improve user experience in login process.",
        date: "2023-10-20",
        category: "User Experience",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completedTask: 0,
      failedTask: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123",
  },
];

export { employees, admin };

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };

  //   console.log(employees, admin);
};
