import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function footer() {
    let [isOpen, setIsOpen] = useState(false);
   

    return(
        <main className="absolute bottom-0 mt-10 w-full h-16 sticky bg-white/50 backdrop-blur">
            <div className="flex flex-row md:m-auto lg:m-auto">
                <div className="px-2">
                    <button className="px-2 py-5 font-bold text-xs hover:underline">Site<br></br> Map</button>
                    <button onClick={() => setIsOpen(true)} className="px-2 py-5 font-bold text-xs hover:underline">Terms &<br></br> conditions</button>
                    <button onClick={() => setIsOpen(true)} className="px-2 py-5 font-bold text-xs hover:underline">What we do<br></br> with your data?</button>
                </div>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                    <Transition appear show={isOpen} as={Fragment}>
                    <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0">
                    <Dialog.Panel className={"absolute m-auto w-92 h-64 bg-white rounded-2xl border"}>
                        <Dialog.Title className={"text-2xl font-bold px-20 py-5"}>This is just assignment work this is not going to be a real website sorry</Dialog.Title>

                        <p className={'text-sm font-bold px-20'}>
                            Sorry<br></br> but this website isnt real<br></br> it is assignment work!
                        </p>
                        <button className={'font-bold py-20 border mt-10 ml-20 px-10 py-2 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'} onClick={() => setIsOpen(false)}>close</button>
                    </Dialog.Panel>
                    </Transition.Child>
                    </Transition>
                </Dialog>
                    <button onClick={() => setIsOpen(true)} className="px-2 font-bold text-xs hover:underline">Copyright© 2022</button>
              
            </div>
        </main>
    )
}