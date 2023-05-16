
import { Fragment} from 'react'
import  Router from 'next/router'
import { Menu, Transition } from '@headlessui/react'

export default function navbar() {
    return (
        <main className="w-full h-20 bg-slate-100 bg-white/50 backdrop-blur text-black fixed">
            <div className="flex flex-row">
                <div className="flex flex-row absolute left-0 py-5 px-3">
                    <img src="Hot_beans_Icon.png"/>
                    <p className="text-2xl font-bold opacity-100">Hot Beans</p>
                </div>
                <div className="absolute right-0 ">
                    <div className="flex flex-row px-10 py-5 invisible md:visible lg:visible">
                        <button onClick={() => Router.push('/')} className="px-5 font-bold opacity-100 hover:underline ">Home</button>
                        <button onClick={() => Router.push('/jobs')} className="px-5 font-bold opacity-100 hover:underline">Jobs</button>
                        <button onClick={() => Router.push('/learning')} className="px-5 font-bold opacity-100 hover:underline">Learning</button>
                    </div>
                    <Menu as="div" className="absolute top-6 right-5 flex flex-col visible md:invisible lg:invisible">
                        <Menu.Button className={'font-bold px-4'}>
                            Menu
                        </Menu.Button>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                    
                    <Menu.Items className="flex flex-col px-1 py-4 font-bold right-0 bg-white/50 backdrop-blur h-auto border rounded-b-lg">
                        <Menu.Item>
                            { ({ active }) => (
                                <button className={`${active}&& py-1`}>Home</button>
                            )}    
                        </Menu.Item>
                        <Menu.Item>
                            { ({ active }) => (
                                <button className={`${active} && py-1`}>Jobs</button>
                            )}    
                        </Menu.Item>
                        <Menu.Item>
                            { ({ active }) => (
                                <button className={`${active} && py-1`}>Learning</button>
                            )}    
                        </Menu.Item>
                    </Menu.Items>
                    </Transition>
                    </Menu>
                </div>
            </div>
        </main>
        
    )
}

