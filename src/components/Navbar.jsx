

const NavBar = () => {
  return (
    <div className="flex items-center justify-between z-[100] absolute w-full p-4">
      <h1 className="uppercase text-red-600 text-4xl font-bold cursor-pointer">Netflix</h1>
      <div>
        <button className="text-white pr-4 cursor-pointer">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar