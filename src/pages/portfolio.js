import { Card } from '../components/Card';
import SpecLogo from '../static/spce-logo.png';
import FFLogo from '../static/fflogo.svg';

export const Portfolio = () => {

  return (
    <article className='max-w-4xl mx-auto px-4 mb-20'>
      <h1 className='text-center font-mono text-5xl py-20 mb-4'>Portfolio</h1>
      <Card
        title='Specialty QR Scanner'
        description='QR Code quality control system built with React and Express'
        picture={SpecLogo}
        link='/portfolio/spec-scanner'
      />
      <Card
        title='Forcefield.ai'
        description='Web app for uploading your contracts and tracking renewal dates and other important information.'
        picture={FFLogo}
        link='/portfolio/forcefield'
      />  
    </article>
  )
}