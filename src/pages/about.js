import HeadShot from '../static/headshot.jpg';

export const About = () => {

  return (
    <article className='max-w-4xl mx-auto px-6'>
      <div className='mt-20'>
        <img className='rounded-full h-48 w-48 mx-auto' src={HeadShot} alt="Cortlin's Headshot" />
        <div className='my-10'>
          <h1 className='text-center text-5xl py-4'>Hi. Thanks for visiting.</h1>
          <h2 className='text-center text-2xl py-2'>My name is Cortlin and I am a front-end developer and designer.</h2>
        </div>
      </div>
      <h1 className='text-center font-mono text-5xl py-10 mb-4'>About Me</h1>
      <p className='text-gray-900 text-lg'>I have been working as a front-end developer and designer for 7 years. I began my career as a wordpress developer for a small marketing agency, building websites for local businesses. I’ve always had an interest in technology, both software and hardware, so I took advantage of working at small companies to learn as many skills as possible. I have experience in marketing, social media advertising, server management, networking, application development, and even Active Directory and exchange management. </p>
      <p className='mt-4 mb-16 text-gray-900 text-lg'>These days I tend to narrow my focus and stick to web development, building SPA’s using React and Vue, as well as REST and web socket API’s using ExpressJS.</p>
    </article>
  )
}