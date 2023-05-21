/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import  Router from 'next/router'
import Circle from "./components/circle"
import { Dialog, Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function jobs() {


    function notification() {
        toast('Thank you your application has been submitted ✅');
    }
    const Jobs = [
        { id : 1, job: 'junior web developer'},
        { id : 2, job: 'senior web developer'},
        { id : 3, job: 'Ux & UI Designer'}
    ];
    const [selected, setSelected] = useState(Jobs[0])
    return(
        <main
      className={`flex flex-col w-full h-full bg-white`}
    >
      <ToastContainer />  
      <Navbar/>
      <div className="mt-32 px-20">
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-4xl md:text-5xl lg:text-6xl '>Jobs at HotBeans<br></br>Web development</h1>
      <p className='font-light py-3 text-lg'>At HotBeans Web-development we are always looking for future workers<br></br> to improve our company and add to our vast knowledge of developing skills </p>
      </div>
      <div className="mt-32 px-10">
        <h1 className="text-3xl font-bold">Meet The Team</h1>
        <p className="mt-10 font-light leading-loose text-lg ">we have many wonderful people working for us at Hotbeans Webdevelopment,<br></br> who would love to meet you, to know a little more about what they do at hot beans click on their face.</p>
      </div>
      <Circle/>
      <div className="mt-10 px-4 text-center py-20 w-full lg:w-full md:w-full bg-slate-400 rounded h-auto flex flex-col md:flex-row lg:flex-row">
        <div className=" w-auto md:w-[300px] lg:[300px] text-white font-light">
            <h1 className="font-bold font-4xl">Job Description</h1>
            <h2 className="font-bold font-xl py-4">Junior web developer</h2>
            <p>Pay: 32k-40k per year<br></br>
               Qualifications: Level 3 Btech, 5 GCSE at grades 5 and above <br></br>
               Description: As a junior web developer, you ll have the opportunity to work on exciting projects and learn from experienced developers. Were looking for individuals with a solid foundation in web development and a desire to learn and grow. 
            </p>
            <h2 className="font-bold font-xl py-4">Senior Web Developer</h2>
            <p>Pay: 60k-80k per year<br></br>
            Qualifications: Level 3 Btech, 5 GCSE at grades 5 and above <br></br>
               Description: For senior web developers, we re seeking individuals with a proven track record of delivering high-quality work, a deep understanding of the latest web development technologies, and a creative problem-solving mindset.
            </p>
            <h2 className="font-bold font-xl py-4"> UI & UX Designer</h2>
            <p>Pay: 20k-70k<br></br>
            Qualifications: Level 3 Btech, 5 GCSE at grades 5 and above <br></br>
               Description: As a UI/UX designer, youll play a crucial role in creating engaging user experiences. Were looking for individuals with a strong eye for detail, a deep understanding of design principles, and the ability to collaborate effectively with our development team. 
            </p>

        </div>
        <div className="m-auto text-center md:visible lg:visible invisible">
            
            
        </div>
        <div className="md:ml-auto lg:ml-auto md:px-10 lg:px-10">
                <h1 className="text-white text-lg font-bold mt-4 m-auto ">Apply for a job now</h1>
                <div className="flex flex-row mt-10">
                    <div className="m-auto flex flex-col mt-6">
                        <label className="font-bold text-white">Full Name</label>
                     <input className="w-[300px] h-8 border-auto mt-6 px-2 text-black font-bold" placeholder=" Full name"/>
                     </div>
                </div>
                <div className="flex flex-col m-auto mt-6">
                <label className="font-bold text-white">Job Wanted</label>
                <Listbox value={selected} onChange={setSelected}>
                 <Listbox.Button className={'mt-6 w-[300px] h-8 bg-white border-auto rounded-top text-slate-400 text-left px-2 m-auto font-bold'}>{selected.job}</Listbox.Button>
                 <Transition 
                 as={Fragment}
                 enter="transition ease-in-ease-out duration-200"
                 enterFrom="opacity-0"
                 enterTo="opacity-100"
                 leave="transition ease-in-ease-out duration-200"
                 leaveFrom="opacity-100"
                 leaveTo="opacity-0">
                    <Listbox.Options className={'w-[300px] h-auto bg-white border-auto text-left m-auto'}>
                        {Jobs.map((job) => (
                            <Listbox.Option className={'py-2 px-2'} key={job.id} value={job}>
                                {job.job}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                </Listbox>
                </div>
                <div className="flex flex-col m-auto mt-6">
                    <label className="text-white font-bold">Phone Number</label>
                    <input className="mt-6 w-[300px] h-8 font-bold px-2 m-auto" placeholder="Telephone Number" type="text"/>
                </div>
                <div className="mt-6 m-auto">
                    <label className="text-white font-light">CV:</label>
                    <input className="px-2 text-white font-light" type="file"/>
                </div>
                <div className="mt-6">
                    <label className="text-white">Do you agree to<br></br> terms & conditions</label>
                    <input className="ml-3" id="terms" type="checkbox"/>
                </div>
                <div>
                <button onClick={notification} className="mt-4 font-bold text-white text-sm w-32 h-auto py-3 px-4 border-2 border-gray-800 rounded-full text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200">Apply</button> 
                </div>
        </div>
      </div>
      <div className="px-6 py-6 md:m-auto lf:m-auto">
           <h1 className="font-bold text-2xl">If you want to learn</h1>
           <img className="w-[600px] h-[300px] mt-5 rounded" src="learning.jpg"/>
           <p className="font-light py-4 text-lg">if you want to learn how to become a better web developer go to our learning page with wonderfull<br></br> learning recources to give yourself a headstart on becomming the best developer you can be.</p>
           <button onClick={ () => Router.push('/learning')} className="mt-4 font-bold text-black text-sm w-32 h-auto py-3 px-4 border-2 border-gray-800 rounded-full text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200">Try & Learn</button>
      </div>
      <Footer/>
    </main>
    )
}
