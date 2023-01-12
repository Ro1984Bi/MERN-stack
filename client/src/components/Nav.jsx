import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='bg-zinc-700 flex justify-between px-10 py-2'>
      <Link to='/' className='text-white font-bold'>
      <h1>React & Mysql</h1>
      </Link>
        <ul className='flex'>
            <li>
                <Link to="/" className='text-white font-bold px-3 py-1'>Home</Link>
            </li>
            <li>
                <Link to="/create" className='text-white font-bold'>New Task</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav