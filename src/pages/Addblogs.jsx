import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createBlog } from '../features/blogs/blogSlice';

export default function Addblogs() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    console.log(!blog?.title || !blog?.description);
    e.preventDefault();
    if (!blog?.title || !blog?.description) {
      toast('All fields required', {
        type: 'error',
      });
      return console.log('shoould be');
    }

    dispatch(createBlog(blog));
    navigate('/')
  };
  return (
    <section className="content pt-10">
      <div id="blog" className="bg-gray-100 dark:bg-gray-900 px-4 xl:px-4 py-14 ">
        <div className="mx-auto container">
          <span role="contentinfo">
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0 mt-auto h-full flex flex-col  justify-around align-middle">
                    <img src="./addImage.svg" />
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST" onSubmit={onSubmit}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                              Title
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                onChange={handleChange}
                                name="title"
                                type="text"
                                id="company-website"
                                className="block w-full flex-1  rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter blog title"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                            Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              onChange={handleChange}
                              id="about"
                              name="description"
                              rows={3}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter blog description"
                              defaultValue={''}
                            />
                          </div>
                          {/* <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p> */}
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
