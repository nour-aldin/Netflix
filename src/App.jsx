import { Route, Routes } from "react-router-dom"


// components
import NavBar from "./components/NavBar"

// pages
import HomePage from "./pages/HomePage"

function App() {


  return (
    <>
     <NavBar />
     <Routes>
      <Route path="/" element={<HomePage />} />
     </Routes>
    </>
  )
}

export default App
