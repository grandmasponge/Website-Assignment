import Navbar from '../pages/components/navbar'
import Footer from '../pages/components/footer'
import { Tab } from '@headlessui/react'
import  Router from 'next/router'

export default function Home() {
  return (
    
    <main
      className={`flex flex-col min-h-screen bg-white`}
    >
      <Navbar/>
      <div className=' px-6 py-20 md:px-20 lg:px-20 lg:py-32 md:py-32'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-4xl md:text-5xl lg:text-6xl '>Hot Beans<br></br> Web Developement</h1>
        <p className='font-light text-sm'>(a company that says it cares but we rlly dont)</p>
      </div>
      <div className=' px-6 w-[400px] md:w-[700px] lg:w-[700px] h-auto px-6 md:ml-10 lg:ml-10 '>
          <h1 className='font-bold text-xl py-6 md:text-2xl lg:text-3xl'>Who we are</h1>
          <p className='font-light leading-loose tracking-wide text-sm md:text-lg lg:text-lg'>Welcome to Hot Beans,<br></br><br></br> a leading web development company founded in 2008. We are a team of passionate professionals who are dedicated to delivering high-quality web development solutions to businesses of all sizes.<br></br>Our expertise lies in building custom websites and web applications that are tailored to meet our clients' unique business needs.<br></br> We take pride in our ability to develop intuitive, user-friendly websites that are optimized for maximum performance and speed.At Hot Beans, we understand that every business is different, and that's why we take a personalized approach to every project we work on.<br></br> We collaborate closely with our clients to ensure that we fully understand their goals and make a website that works for them</p>
          <img className='w-[450px] h-[200px] md:w-[652px] md:h-[435px] lg:w-[652px] lg:h-[435px] rounded mt-6' src='Office.jpg'></img>
      </div>
      <div className='w-[400px] md:w-[700px] lg:w-[700px] h-auto px-6 md:ml-auto lg:ml-auto'>
      <h1 className='font-bold text-xl py-6 md:text-2xl lg:text-3xl'>Jobs</h1>
          <p className='font-light text-sm tracking-wide leading-loose md:text-lg lg:text-lg '>Are you passionate about web development and design? Hot Beans, a leading web development company, is seeking talented individuals to join our dynamic team. We're currently hiring for junior and senior web developers, as well as UI/UX designers.

As a junior web developer, you'll have the opportunity to work on exciting projects and learn from experienced developers. We're looking for individuals with a solid foundation in web development and a desire to learn and grow.

For senior web developers, we're seeking individuals with a proven track record of delivering high-quality work, a deep understanding of the latest web development technologies, and a creative problem-solving mindset.

As a UI/UX designer, you'll play a crucial role in creating engaging user experiences. We're looking for individuals with a strong eye for detail, a deep understanding of design principles, and the ability to collaborate effectively with our development team.

Hot Beans offers competitive compensation, a supportive work environment, and opportunities for growth and advancement. If you're ready to take the next step in your career, apply now and join our team of passionate professionals.</p>
          <div className='mt-4'>
          <button onClick={() => {Router.push('/jobs')}} className='ml-auto font-bold text-sm w-auto h-auto py-3 px-4 border-2 border-gray-800 rounded-full text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200'>Look at Jobs Now</button>
          </div>
      </div>
      <div className='w-[400px] md:w-[700px] lg:w-[700px] h-auto px-6 md:ml-10 lg:ml-10 '>
      <h1 className='font-bold text-xl py-6 md:text-2xl lg:text-3xl'>Learning</h1>
      <img className='rounded ' src='coding.jpg'/>
          <p className='font-light leading-loose tracking-wide text-sm mt-4 md:text-lg lg:text-lg'>At Hot Beans, we believe in empowering individuals and businesses to learn and grow in the ever-evolving world of web development. That's why we've curated a collection of valuable resources to help you master the art of web development.

Our resource page features a range of free and paid resources, including tutorials, articles, videos, and courses, covering various aspects of web development. Whether you're a beginner just starting or an experienced developer looking to upskill, our resources cater to all levels of proficiency.</p>
          <div className='mt-4'>
          <button onClick={() => {Router.push('/learning')}} className='font-bold text-sm w-auto h-auto py-3 px-4 border-2 border-gray-800 rounded-full text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200'>Learning recources</button>
          </div>
      </div>
      
      <Footer/>
    </main>
  )
}
