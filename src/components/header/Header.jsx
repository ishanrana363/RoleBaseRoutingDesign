import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-green-500 text-white font-semibold ' >
      <div className=' max-w-7xl mx-auto flex justify-between items-center py-2.5  ' >
        {/* logo */}
          <div>
            <Link to={"/"}>LoGo</Link>
          </div>
          {/* menu */}
          <div>
            <nav>
              <ul className='flex  items-center gap-3.5 ' >
                <li> <NavLink to={"/"} >Home</NavLink> </li>
                <li> <NavLink to={"/about"} >About</NavLink> </li>
                <li> <NavLink to={"/contact"} >Contact</NavLink> </li>
              </ul>
            </nav>
          </div>
          {/* login button */}
          <div>
              <Link to={"/login"}><button>Login</button></Link>
          </div>
      </div>
    </div>
  )
}

export default Header
