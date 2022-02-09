import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import useForm from "../components/ui/forms/useForm";

function LoginPage() {
    const loading = false;
    const schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
        password: Joi.string().min(5).required().label("Password"),
    };
    
    const { data, renderInput, renderButton, validateSubmit } = useForm({ schema });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateSubmit(e)) {
            console.log(data);
        }
    };

    return (
        <div className="bg-gray-200 h-screen flex">
            <div className="w-full md:w-1/3 px-5 py-10 h-full flex items-center justify-between flex-col">
                <div><img src="/logo.png" alt="Logo" className="h-16" /></div>
                <div className="w-80">
                    <h2 className="text-center text-2xl">Sign in to your account</h2>
                    <div className="text-center py-5 text-sm">Not Registered yet? <Link className="text-blue-500" to="/register" >Register</Link></div>
                    <form className="mb-6" onSubmit={handleSubmit}>
                        {renderInput("email", 'Email', 'text', 'MailIcon')}
                        {renderInput("password", 'Password', "password", 'ShieldExclamationIcon')}
                        <div className='flex justify-center'>
                            {renderButton("LOG IN", "primary", "w-full rounded flex justify-center", loading)}
                        </div>
                    </form>
                </div>
                <div>A problem? <Link to={"/"} className="text-blue-500">Click here</Link> and let us help you.</div>
            </div>

            {/* Right panel */}
            <div className="w-full hidden md:block"> 
                <img src="/bg-blue.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default LoginPage;
