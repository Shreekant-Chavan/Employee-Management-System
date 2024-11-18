import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import {
  employees as employeeData,
  getLocalStorage,
  setLocalStorage,
} from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import Header from "./components/Others/Header";

// function App() {
//   // useEffect(() => {
//   //   if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
//   //     setLocalStorage();
//   //   }
//   // });

//   // localStorage.clear()

//   const [user, setUser] = useState("");
//   const [loggedInUserData, setLoggedInUserData] = useState(null);

//   const authData = useContext(AuthContext);
//   console.log(authData);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     console.log(loggedInUser);

//     if (loggedInUser) {
//       const userData = JSON.parse(loggedInUser);
//       setUser(userData.role);
//       setLoggedInUserData(userData.data);
//     }
//   }, []);

//   useEffect(() => {
//     let { employees } = getLocalStorage();
//   }, []);

//   // useEffect(() => {
//   //   if (authData) {
//   //     const loggedInUser = localStorage.getItem("loggedInUser");
//   //     if (loggedInUser) {
//   //       setUser(loggedInUser.role);
//   //     }
//   //   }
//   // }, [authData]);

//   const loginHandler = (email, password) => {
//     if (email == "admin@me.com" && password == "123") {
//       setUser("admin");
//       localStorage.setItem(
//         "loggedInUser",
//         JSON.stringify({ role: "admin", data: "admin" })
//       );
//     } else if (authData) {
//       const employees = authData.employees.find(
//         (event) => email == event.email && password == event.password
//       );
//       if (employees) {
//         setUser("employees");
//         setLoggedInUserData(employees);
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify({ role: "employees", data: "employees" })
//         );
//       }
//     } else {
//       alert("Invalid Credentials");
//     }
//   };
//   // console.log(email, password);

//   // loginHandler("user@me.com", "123")

//   return (
//     <>
//       {!user ? <Login handleLogin={loginHandler} /> : ""}
//       {user == "admin" ? (
//         <AdminDashboard />
//       ) : user == "employees" ? (
//         <EmployeeDashboard data={loggedInUserData} />
//       ) : null}
//       {/* <EmployeeDashboard /> */}
//       {/* <AdminDashboard /> */}
//     </>
//   );
// }

// export default App;

function App() {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();

    if (!employees || !admin) {
      setLocalStorage();
    }
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setLoggedInUserData(parsedUser.data);
    }
  }, []);

  const loginHandler = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: "admin" })
      );
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (event) => email == event.email && password == event.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("role");
    localStorage.removeItem("data");
    setUser("");
    setLoggedInUserData(null);
  };

  // localStorage.clear()

  return (
    <>
      {user && <Header data={loggedInUserData} onLogout={logoutHandler}/>}
      {!user && <Login handleLogin={loginHandler} />}
      {user == "admin" && (
        <AdminDashboard />
      )}
      {user == "employee" && (<EmployeeDashboard data={loggedInUserData} />)}
    </>
  );
}
export default App;
