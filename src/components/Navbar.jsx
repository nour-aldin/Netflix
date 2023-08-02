import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const {user, logOut} = UserAuth()

  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-between z-[100] absolute w-full p-4">
      <Link to='/'>
        <h1 className="uppercase text-red-600 text-4xl font-bold cursor-pointer">Netflix</h1>
      </Link>
      {user && user.email ? (
        <div>
      <Link to='/account'>
          <button className="text-white pr-4 cursor-pointer">Account</button>
      </Link>
        <button onClick={handleLogOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Log out</button>
      </div>
      ): (<div>
      <Link to='/login'>
          <button className="text-white pr-4 cursor-pointer">Sign In</button>
      </Link>
      <Link to='/signup'>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
      </Link>
      </div>)}
    </div>
  )
}

export default NavBar