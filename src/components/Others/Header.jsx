import React, { useState } from "react";

function Header({ data }) {
  console.log({data});

  // const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // } else {
  //   setUserName(data.firstName)
  // }


  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    window.location.reload()
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Shreekant👋</span>
        {/* ({...data.firstName}) */}
      </h1>
      <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md">
        Log Out
      </button>
    </div>
  );
}

export default Header;
