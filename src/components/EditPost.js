import React from "react";

function EditPost() {
  return (
    <div className="signup flex flex-col  W-[100vw] h-[100vh] items-center justify-center">
      <div className="formTitle text-4xl py-[1rem]">EDIT POST</div>
      <form action="/" className="font-medium flex flex-col">
        <input
          placeholder="Title"
          className="inputBox"
          type="text"
          name="name"
          id="name"
        />
        <div className="file inputBox">
          <input type="file" id="files" class="hidden" required />
          <label for="files" className="text-gray-400">
            Add Photo
          </label>
        </div>
        <textarea
          className="inputBox text-left"
          placeholder="Description"
          id="textArea"></textarea>
        <button
          className="ml-[7.5rem] my-[1rem] text-center border-[2.5px] border-purple-300 text-purple-500 rounded-md  py-[.5rem]"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditPost;
