import { Link } from 'react-router-dom';


export const Nav = () => {
  return (
    <nav className='bg-blue-900 h-screen px-6 pt-10 shadow-lg'>
      <div>
        <ul className='text-white'>
          <li className='text-2xl py-4'>
            <Link to='/'>About</Link>
          </li>
          <li className='text-2xl py-4'>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li className='text-2xl py-4'>
            <Link className=' whitespace-nowrap' to='/experience'>Work Experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}