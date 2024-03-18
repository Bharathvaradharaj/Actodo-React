import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Landing from "./pages/Landing";
function App() {


  const [user, setuser] = useState([{ username: "Bharath", password: "123" } , { username: "Simran", password: "123" }])
  return (

    <>
      <BrowserRouter>


        <Routes>
          <Route path='/' element={<Login  user={user} setuser={setuser}></Login>}></Route>

          <Route path='/signup' element={<Signup  user={user} setuser={setuser}></Signup>}></Route>
          <Route path='/landing' element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
