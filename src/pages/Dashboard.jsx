import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BlogForm from '../components/BlogForm';
import BlogItem from '../components/BlogItem';
import Spinner from '../components/Spinner';
import { getBlogs, reset } from '../features/blogs/blogSlice';
import SingleBlogCard from '../components/SingleBlogCard';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { blogs, isLoading, isError, message } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/');
    }

    dispatch(getBlogs());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="content">
        <div id="blog" className="bg-gray-100 dark:bg-gray-900 px-4 xl:px-4 py-14">
          <div className="mx-auto container">
            <span role="contentinfo">
              <h1 tabIndex="0" className="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900 dark:text-white">
                Latest from our Blog
              </h1>
            </span>
            <div tabIndex="0" aria-label="Group of cards" className="focus:outline-none mt-12 lg:mt-24">
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div tabIndex="0" className="focus:outline-none" aria-label="card 1">
                  <img
                    role="img"
                    aria-label="code editor"
                    tabIndex="0"
                    className="focus:outline-none w-full"
                    src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                    alt="code editor"
                  />
                  <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                    <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      Bruce Wayne
                    </p>
                    <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                      Transactions
                    </h1>
                    <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                      Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of
                      Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and
                      cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.
                    </p>
                    <div className="w-full flex justify-end">
                      <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                        <span className=" text-base tracking-wide text-indigo-700">Read more</span>
                        <img className="ml-3 lg:ml-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2-column-with-main-and-supporting-svg1.svg" alt="arrow" />
                      </button>
                    </div>
                    <div className="h-5 w-2"></div>
                  </div>
                </div>
                <div>
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {blogs?.map((blog, index) => (
                      <SingleBlogCard blog={blog} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
