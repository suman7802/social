import React, {useEffect} from "react";

function Login() {
  useEffect(() => {
    const logIn = document.querySelector(".logIn");
    logIn.style.display = "none";
    return () => (logIn.style.display = "block");
  }, []);
  return (
    <div className="signup flex flex-col  W-[100vw] h-[100vh] items-center justify-center">
      <div className="formTitle text-4xl py-[1rem]">LOG IN</div>
      <form action="/" className="font-medium flex flex-col">
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

        <button
          className="ml-[7.5rem] my-[1rem] text-center border-[2.5px] border-purple-300 text-purple-500 rounded-md  py-[.5rem]"
          type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
