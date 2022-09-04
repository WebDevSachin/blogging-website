import { FaPlus, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="header container ">
      <div className="absolute  left-2/4 z-[999] my-4 flex w-full max-w-screen-2xl -translate-x-2/4 flex-wrap items-center px-4 lg:fixed undefined">
        <nav className="block w-full max-w-screen-2xl rounded-xl px-8 backdrop-saturate-200 header_blur backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-white py-4 pl-6 pr-5 lg:py-2 shadow-2xl shadow-blue-gray-500/10">
          <div className="flex w-full items-center !justify-between text-[#1A237E] undefined">
            <a className="py-2.375 text-size-sm mr-4 whitespace-nowrap font-bold text-inherit lg:ml-0" href="/">
              Blogger
            </a>
            <button
              className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[40px] max-h-[40px] rounded-lg text-xs ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
            </button>

            <div className="lg:base-auto hidden flex-grow basis-full items-center overflow-hidden lg:flex lg-max:max-h-0">
              <ul className=" mb-0 flex list-none flex-col gap-2 pl-0 items-center	text-inherit transition-all lg:ml-auto lg:flex-row lg:gap-4">
                {user ? (
                  <>
                    <div className="add-container">
                      <Link to="/addblog">
                        <div
                          className="cursor-pointer block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          type="button"
                          data-modal-toggle="authentication-modal"
                        >
                          <FaPlus />
                        </div>
                      </Link>
                    </div>

                    <li aria-expanded="false" className="flex" aria-haspopup="menu" id=":Rt8mH2:">
                      <div className="d-inline-flex mr-10">
                        <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-purple-100 rounded-full dark:bg-purple-600">
                          <span className="font-medium text-gray-600 dark:text-gray-300">{user.name.slice(0, 2)}</span>
                        </div>
                        &nbsp; <span>👋🏻 {user.name}</span>
                      </div>

                      <span
                        onClick={onLogout}
                        className="flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current font-light lg:px-2 cursor-pointer"
                      >
                        <i className="material-icons mr-2 !text-base opacity-60">
                          <FaSignOutAlt />
                        </i>
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li aria-expanded="false" aria-haspopup="menu" id=":Rt8mH2:">
                      <Link to="/register">
                        <span className="flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current font-light lg:px-2 cursor-pointer">
                          <i className="material-icons mr-2 !text-base opacity-60">
                            <FaUser />
                          </i>
                        </span>
                      </Link>
                    </li>
                    <li aria-expanded="false" aria-haspopup="menu" id=":Rt8mH2:">
                      <Link to="/login">
                        <span className="flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current font-light lg:px-2 cursor-pointer">
                          <i className="material-icons mr-2 !text-base opacity-60">
                            <FaSignInAlt />
                          </i>
                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
