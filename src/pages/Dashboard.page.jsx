import React from 'react';
import Navbar from '../components/Navbar';

const DashboardPage = (props) => {
    const [counter, setCounter] = React.useState(0);
    return <>
        <Navbar name={props.name} />
        <div className="mt-10 flex justify-center items-center">
            <button onClick={() => setCounter((counter) => counter - 1)} className="border px-8 py-2 
            bg-gray-300 rounded-md hover:bg-gray-400 mx-4">-</button>
            <span className="text-2xl font-serif">{counter}</span>
            <button onClick={() => setCounter((counter) => counter + 1)} className="border px-8 py-2 
            bg-gray-300 rounded-md hover:bg-gray-400 mx-4">+</button>
        </div>
    </>
};

export default React.memo(DashboardPage);