import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../features/blogs/blogSlice';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SingleBlogCard({ blog }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div tabIndex="0" className="focus:outline-none relative " aria-label="card 2">
      <Link to={`/blog/${blog?._id}`}>
        {user?._id && user?._id == blog?.user?._id && (
          <div className="absolute right-5 top-5 cursor-pointer" onClick={() => dispatch(deleteBlog(blog._id, user))}>
            <FaTrash color="#ef4444" />
          </div>
        )}

        <img tabIndex="0" role="img" aria-label="gaming" className="focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
          <p tabIndex="0" className="focus:outline-none  text-sm text-white font-semibold tracking-wide">
            {blog?.user?.name}
          </p>
          <p tabIndex="0" className="focus:outline-none text-sm text-white font-semibold tracking-wide">
            {moment(blog?.createdAt).fromNow()}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
          <h1 tabIndex="0" className="focus:outline-none text-lg text-gray-900 dark:text-white font-semibold tracking-wider">
            {blog?.text}
          </h1>
          <p tabIndex="0" className="truncate focus:outline-none text-gray-700 dark:text-gray-200 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
            {blog?.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
