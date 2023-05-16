import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';

export default function circles() {

    let [isOpen_1, setIsOpen_1 ] = useState(false);
    let [isOpen_2, setIsOpen_2 ] = useState(false);
    let [isOpen_3, setIsOpen_3 ] = useState(false);
    let [isOpen_4, setIsOpen_4 ] = useState(false);
    let [isOpen_5, setIsOpen_5 ] = useState(false);
    let [isOpen_6, setIsOpen_6 ] = useState(false);

    return(
        <main className='flex flex-col w-full h-auto'>
            <Dialog open={isOpen_1} onClose={() => setIsOpen_1(false)}>
            <Transition 
            appear
            show={isOpen_1}
            as={Fragment}
            enter="transition ease-in-ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">    
            <Dialog.Panel className={'absolute top-[120%] left-[25%] bg-white w-[300px] h-auto rounded border fixed'}>
                <Dialog.Title className={'mt-4 font-bold px-4 py-2'}>Bio</Dialog.Title>
                <Dialog.Description className={'mt-4 px-4 font-light py-2'}>
                        Name: Synthia Hawthrone<br></br>
                        Occupation: Junior Web Developer<br></br>
                        Description: As a junior web developer, I'm excited about the opportunity to work with a dynamic team of experienced developers at Hot Beans. I'm looking forward to learning new skills and building on my existing foundation in web development.
                </Dialog.Description>
            </Dialog.Panel>
            </Transition>
        </Dialog>
        <Dialog open={isOpen_2} onClose={() => setIsOpen_2(false)}>
            <Transition
            appear
            show={isOpen_2}
            as={Fragment}
            enter="transition ease-in-ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Panel className={'absolute top-[120%] left-[25%] bg-white w-[300px] h-auto rounded border fixed'}>
                <Dialog.Title className={'font-bold mt-4 px-4 py-2'}>Bio</Dialog.Title>
                <Dialog.Description className={'mt-4 px-4 py-2 font-light'}>
                         Name: James Wilburt<br></br>
                         Occupation: Junior Web Developer<br></br>
                         Description: As a junior web developer, I'm excited about the opportunity to work with a dynamic team of experienced developers at Hot Beans. I'm looking forward to learning new skills and building on my existing foundation in web development.
                </Dialog.Description>
            </Dialog.Panel>
            </Transition>
        </Dialog>
        <Dialog open={isOpen_3} onClose={() => setIsOpen_3(false)}>
            <Transition
            appear
            show={isOpen_3}
            as={Fragment}
            enter="transition ease-in-ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Panel className={'absolute top-[120%] left-[25%] bg-white w-[300px] h-auto rounded border fixed'}>
                <Dialog.Title className={'font-bold mt-4 px-4 py-2'}>Bio</Dialog.Title>
                <Dialog.Description className={'font-light px-4 mt-4 py-2'}>
                        Name: Rachel Zaine<br></br>
                        Occupation: Senior Web Developer<br></br>
                        Description: As a senior web developer, I understand the importance of staying ahead of the curve in a constantly evolving field. That's why I'm excited to join a company like Hot Beans, where I can work with a team of talented individuals who are passionate about web development.
                </Dialog.Description>
            </Dialog.Panel>
            </Transition>
        </Dialog>
        <Dialog open={isOpen_4} onClose={() => setIsOpen_4(false)}>
            <Transition
            appear
            show={isOpen_4}
            as={Fragment}
            enter="transition ease-in-ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Panel className={'absolute top-[120%] left-[25%] bg-white w-[300px] h-auto rounded border fixed'}>
                <Dialog.Title className={'font-bold px-4 mt-4 py-2'}>Bio</Dialog.Title>
                <Dialog.Description className={'font-light px-4 mt-4 py-2'}>
                        Name: Anna Higgins<br></br>
                        Occupation: Junior Web Developer<br></br>
                        Description: As a junior web developer, I'm excited about the opportunity to work with a dynamic team of experienced developers at Hot Beans. I'm looking forward to learning new skills and building on my existing foundation in web development.
                </Dialog.Description>
            </Dialog.Panel>
            </Transition>
        </Dialog>
        <Dialog open={isOpen_5} onClose={() => setIsOpen_5(false)}>
            <Transition 
            appear
            show={isOpen_5}
            as={Fragment}
            enter="transition ease-in-ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Panel className={'absolute top-[120%] left-[25%] bg-white w-[300px] h-auto rounded border fixed'}>
                <Dialog.Title className={'font-bold mt-4 px-4 py-2'}>Bio</Dialog.Title>
                <Dialog.Description className={'font-light mt-4 px-4 py-2'}>
                        Name: Charlie Manson<br></br>
                        Occupation:  UI & UX Developer<br></br>
                        Description: As a UI/UX designer, I understand the importance of creating engaging and intuitive user experiences that meet the needs of our clients and their customers. I'm excited about the opportunity to work with a talented team of professionals at Hot Beans and leverage my skills to deliver high-quality solutions.
                </Dialog.Description>
            </Dialog.Panel>
            </Transition>
        </Dialog>
        <Dialog open={isOpen_6} onClose={() => setIsOpen_6(false)}>
            <Transition
            appear
            show={isOpen_6}
            as={Fragment}
            enter="transition ease-in-ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <Dialog.Panel className={'absolute top-[120%] left-[25%] bg-white w-[300px] h-auto rounded border fixed'}>
                <Dialog.Title className={'mt-4 px-4 font-bold py-2'}>Bio</Dialog.Title>
                <Dialog.Description className={'mt-4 px-4 font-light py-2'}>
                        Name: Adam Francis<br></br>
                        Occupation: Senior Web Developer<br></br>
                        Description: As a senior web developer, I understand the importance of staying ahead of the curve in a constantly evolving field. That's why I'm excited to join a company like Hot Beans, where I can work with a team of talented individuals who are passionate about web development.
                </Dialog.Description>
            </Dialog.Panel>
            </Transition>
        </Dialog>
            <div className=" grid grid-rows-2 grid-cols-3 px-6 md:px-64 lg:px-64 gap-20  mt-20">
        <div className="w-[100px] md:w-[150px] lg:w-[200px]">
            <button onClick={() => setIsOpen_1(true)}><img className="rounded-full" src="person_1.jpg"/></button>
            <p className="text-center py-3 font-light">Synthia</p>
        </div>
        <div className="w-[100px] md:w-[150px] lg:w-[200px]">
            <button onClick={() => setIsOpen_2(true)}><img className="rounded-full" src="person_2.jpg"/></button>
            <p className="text-center py-3 font-light">James</p>
        </div>
        <div className="w-[100px] md:w-[150px] lg:w-[200px]">
            <button onClick={() => setIsOpen_3(true)}><img className="rounded-full" src="person_3.jpg"/></button>
            <p className="text-center py-3 font-light">Rachel</p>
        </div>
        <div className="w-[100px] md:w-[150px] lg:w-[200px]">
            <button onClick={() => setIsOpen_4(true)}><img className="rounded-full" src="person_4.jpg"/></button>
            <p className="text-center py-3 font-light">Anna</p>
        </div>
        <div className="w-[100px] md:w-[150px] lg:w-[200px]">
            <button onClick={() => setIsOpen_5(true)}><img className="rounded-full" src="person_5.jpg"/></button>
            <p className="text-center py-3 font-light">Charlie</p>
        </div>
        <div className="w-[100px] md:w-[150px] lg:w-[200px]">
             <button onClick={() => setIsOpen_6(true)}><img className="rounded-full" src="person_6.jpg"/></button>
             <p className="text-center py-3 font-light">Adam</p>
        </div>
      </div>
        </main>

    )

}