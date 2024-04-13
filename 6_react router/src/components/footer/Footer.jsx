import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <NavLink to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </NavLink>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <NavLink to="/" className={({isActive})=>{
                                        return isActive? "text-red-600" : "text-gray-500";
                                    }}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({isActive})=>{
                                        return isActive? "text-red-600" : "text-gray-500";
                                    }}>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Prafoolsingh"
                                        className={({isActive})=>{
                                            return isActive? "text-red-600" : "text-gray-500";
                                        }}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                           
                            </ul>
                        </div>
                       
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://github.com/Prafoolsingh" >
                            Prafool singh
                        </a>
                        . All Rights Reserved.
                    </span>
                   
                </div>
            </div>
        </footer>
    );
}
