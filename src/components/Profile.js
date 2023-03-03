import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faComment} from "@fortawesome/free-regular-svg-icons";

function Profile() {
  return (
    <div className="profile w-[100vw] h-[100vh] py-10">
      <div className="uerProfile flex flex-col items-center justify-center ">
        <div className="user flex flex-row">
          <img className="max-h-[1.5rem] mx-[3px]" src="/image/image.jpg" />
          <div className="userName text-left px-1 min-w-[13.5rem]">
            Test user
          </div>
        </div>
        <div className="title text-center px-1 min-w-[15rem] ">
          Title : test
        </div>
        <img className="h-[15rem]" src="/image/image.jpg" />
        <div className="react comments flex flex-row space-x-5 items-start justify-start h-[1rem] px-1 py-3 min-w-[15rem] ">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
