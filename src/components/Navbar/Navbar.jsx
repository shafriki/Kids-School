import logo from '../../assets/logo.png';

const Navbar = () => {

    const links = <>
        <a className="text-[#FEA301] cursor-pointer font-semibold">Home</a>
        <a className="text-[#01ACFD] cursor-pointer font-semibold">About</a>
        <a className="text-[#05D4DF] cursor-pointer font-semibold">Facilities</a>
        <a className="text-[#5D58EF] cursor-pointer font-semibold">Admission</a>

    </>
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-screen-xl mx-auto">
            <div className="navbar-start ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <img src={logo} alt="logo" className='w-10'/>
                <a className="btn btn-ghost text-xl uppercase hover:text-[#FEA301] ">school</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-10 menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn uppercase bg-[#FEA301] rounded-lg text-white">contact</a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;