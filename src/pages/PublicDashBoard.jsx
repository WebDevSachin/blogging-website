import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BlogForm from '../components/BlogForm';
import BlogItem from '../components/BlogItem';
import Spinner from '../components/Spinner';
import { getAllBlogs, getBlogs, reset } from '../features/blogs/blogSlice';
import SingleBlogCard from '../components/SingleBlogCard';
import moment from 'moment';

function PublicDashBoard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { blogs, isLoading, isError, message } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getAllBlogs());

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
            <span role="contentinfo ">
              <h4 tabIndex="0" className="pt-10 focus:outline-none text-center text-3xl tracking-wider text-gray-900 dark:text-white">
                Latest from our Blog
              </h4>
            </span>
            <div tabIndex="0" aria-label="Group of cards" className="focus:outline-none mt-5 lg:mt-10">
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
                      {blogs[0]?.user?.name}
                    </p>
                    <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
                      {moment(blogs[0]?.updatedAt).fromNow()}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                    <h1 tabIndex="0" className="focus:outline-none text-4xl text-gray-900 dark:text-white font-semibold tracking-wider">
                      {blogs[0]?.title}
                    </h1>
                    <p tabIndex="0" className="focus:outline-none text-gray-700 dark:text-gray-200 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                      {blogs[0]?.description}
                    </p>

                    <div className="w-full flex justify-end">
                      <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                        <span className=" text-base tracking-wide text-indigo-700">
                          <Link to={`/blog/${blogs[0]?._id}`}>Read more</Link>
                        </span>
                        <img className="ml-3 lg:ml-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2-column-with-main-and-supporting-svg1.svg" alt="arrow" />
                      </button>
                    </div>
                    <div className="h-5 w-2"></div>
                  </div>
                </div>
                <div>
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {blogs?.map((blog, index) => {
                      if (index != 0) {
                        return <SingleBlogCard blog={blog} key={index} />;
                      }
                    })}
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

export default PublicDashBoard;
