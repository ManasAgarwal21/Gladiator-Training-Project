import React from 'react';
import {Link} from "react-router-dom";


const NotFoundPage = (props) => {
    return <>
        <div class="bg-gray-100 h-screen justify-center">
            <center class="m-auto">
                <div class=" tracking-widest">
                    <br />
                    <span class="text-gray-500 text-6xl block"><span>4  0  4</span></span><br />
                    <span class="text-gray-500 text-xl block">Sorry, We couldn't find what you are looking for!</span>
                </div>
            </center>
            <center class="py-6">
                <Link to="/dashboard" class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go to Dashboard Page </Link>
            </center>
        </div>
    </>
};

export default React.memo(NotFoundPage);