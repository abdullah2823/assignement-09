import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='p-3'>
            <h1 className='font-bold mb-5 text-2xl'>Social  login</h1>
            <div className='flex flex-col gap-3'>
                <button className='btn btn-outline space-y-5 w-full btn-secondary'><FcGoogle size={24} />
                    Login with Google</button>
                <button className='btn btn-outline space-y-5 w-full btn-primary'><FaGithub size={24} />
                    Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;