import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return ( 
        <div className='p-4'>
            <h1 className='text-center text-xl'>Home Page</h1>
            <Link to="/login" className='bg-slate-200 hover:bg-slate-300 rounded shadow mx-1 px-2 py-1'>Login</Link>
            <Link to="/dashboard" className='bg-slate-200 hover:bg-slate-300 rounded shadow mx-1 px-2 py-1'>Dashboard</Link>
        </div>
     );
}

export default HomePage;