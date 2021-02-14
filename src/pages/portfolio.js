import { Card } from '../components/Card';
import SpecLogo from '../static/spce-logo.png';

export const Portfolio = () => {

  return (
    <article className='max-w-4xl mx-auto px-4'>
      <h1 className='text-center font-mono text-5xl py-20 underline mb-4'>Portfolio</h1>
      <Card
        title='Specialty QR Scanner'
        description='QR Code quality control system built with React and Express'
        picture={SpecLogo}
        link='/portfolio/spec-scanner'
      />     
    </article>
  )
}