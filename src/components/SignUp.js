import React, {useEffect} from "react";

function SignUp() {
  useEffect(() => {
    const signUP = document.querySelector(".signUp");
    signUP.style.display = "none";
    return () => (signUP.style.display = "block");
  }, []);
  return (
    <div className="signup flex flex-col  W-[100vw] h-[100vh] items-center justify-center">
      <div className="formTitle text-4xl py-[1rem]">SIGNUP</div>
      <form action="/" className="font-medium flex flex-col">
        <input
          placeholder="Name"
          className="inputBox"
          type="text"
          name="name"
          id="name"
        />
        <input
          placeholder="Email"
          className="inputBox"
          type="email"
          name="email"
          id="email"
        />
        <input
          placeholder="Password"
          className="inputBox"
          type="password"
          name="password"
          id="password"
        />
        <div className="file inputBox">
          <input type="file" id="files" class="hidden" required />
          <label for="files" className="text-gray-400">
            Upload Photo
          </label>
        </div>
        <button
          className="ml-[7.5rem] my-[1rem] text-center border-[2.5px] border-purple-300 text-purple-500 rounded-md  py-[.5rem]"
          type="submit">
          Sign UP
        </button>
      </form>
    </div>
  );
}

export default SignUp;
