import { Link } from 'react-router-dom';

export const Card = ({ picture, title, description, link }) => {
  return (
    <div className='border border-gray-500 rounded-md shadow-md hover:border-blue-900 hover:bg-gray-100 mb-20'>
      <Link to={link}>
        <div className='flex px-10 py-6'>
          <img className=' w-28 object-contain' src={picture} alt={title} />
          <div className='ml-6'>
            <h3 className='text-2xl'>{title}</h3>
            <p className='mt-4'>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
} 