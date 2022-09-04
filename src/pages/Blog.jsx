import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllBlogs } from '../features/blogs/blogSlice';

export default function Blog() {
  const [current, setCurrent] = useState();
  const { blogs, isLoading, isError, message } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log(blogs);
    if (blogs.length > 0) {
      setCurrent(blogs.filter((item) => item?._id == id)[0]);
    }
  }, [blogs]);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <section className="content pt-10">
      <div id="blog" className="bg-gray-100 dark:bg-gray-900 px-4 xl:px-4 py-14 ">
        <div className="mx-auto container">
          <span role="contentinfo">
            <div>
              <section className="bg-white dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
                  <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{current?.title}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{current?.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                    >
                      Get started
                      <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
