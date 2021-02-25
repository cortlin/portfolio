import { Link } from 'react-router-dom';


export const Nav = () => {
  return (
    <nav className='px-6 shadow-lg'>
      <div className='max-w-md mx-auto flex'>
        <ul className='text-gray-800 flex flex-1 justify-center first:mr-auto last:ml-auto md:text-lg'>
          <li className='py-4 px-5 hover:underline md:px-10'>
            <Link to='/'>About</Link>
          </li>
          <li className='py-4 px-5 hover:underline md:px-10'>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li className='py-4 px-5 hover:underline md:px-10'>
            <Link className=' whitespace-nowrap' to='/experience'>Work Experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}