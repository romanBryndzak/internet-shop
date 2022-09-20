import React from 'react';

interface propsModal {
    children: React.ReactNode,
    title: string,
    setIsModal: (b: boolean) => void,
}

const Modal = ({children, title, setIsModal}: propsModal) => {
    return (
        <>
            <div className="fixed bg-black/50 top-0 right-0 bottom-0 left-0" onClick={() => setIsModal(false)}/>
            <div className="w-[500px] p-5 rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2">
                <div className="flex justify-between">
                    <div className='pl-5 pt-1 text-lg'>{title}</div>
                    <button className="py-1 px-2 rounded-md bg-orange-300 hover:bg-orange-200 hover:text-gray-400"
                            onClick={() => setIsModal(false)}>
                        X
                    </button>
                </div>
                {children}
            </div>
        </>
    );
};

export default Modal;