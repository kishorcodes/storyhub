import React from "react";

const CommentBox = () => {
  return (
    <div class="mt-4 flex gap-3 w-full items-center">
      <input
        type="text"
        id="large-input"
        class="block w-full p-4 text-gray-900 border border-black rounded-lg sm:text-md"
      />
      <button
        type="button"
        className="scale-100 hover:scale-105  transition-all duration-75 ease-in inline-flex justify-center items-center space-x-2 font-semibold rounded-xl px-5 py-3 leading-5 text-md bg-black text-white hover:text-white"
        id="tk-dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Comment
      </button>
    </div>
  );
};

export default CommentBox;
