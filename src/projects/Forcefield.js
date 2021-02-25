import FFVideo from '../static/ff-demo.mp4';
import FFLanding from '../static/ff-landing.jpg';

export const Forcefield = () => {
  return (
    <article className='max-w-4xl mx-auto mt-20 px-6'>
      <h2 className='text-3xl font-bold mb-10'>SPA for Forcefield.ai</h2>
      <p>Forcefield is a contract management appliction that helps users manages all of there contract and never miss a deadline. Users can upload their contracts in PDF and Word formats, and our app will scan the documents and extract important clauses and dates and send the user notifications based on the extracted information.</p>
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        className="object-contain pt-6 w-full h-auto"
      >
        <source
          src={FFVideo}
          type="video/mp4"
        ></source>
      </video>

      <p className='pt-6'>I was responsible for designing and building the front-end of the application. The front-end is built with Vue3 and was designed in Figma.</p>
      
      <p className='pt-6'>My main objectives were to pull in all of the users data from the GoLang backend using the JRPC API. User experience is always important, so I wanted to make sure the path to uploading a document was seemless and intuitive. </p>
      
      <p className='pt-6 mb-16'>This project is expected to launch in Q2 of 2021</p>
      <img className='shadow-lg' src={FFLanding} alt="Forcefield Landing Page"/>
    </article>
  )
}