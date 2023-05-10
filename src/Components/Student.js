import React from "react";

function singleStudent({ username, profilePhoto, names, dob, id }) {
  const { preferredName, middleName, surname } = names;

  return (
    <>
      <img src={profilePhoto} alt="" className="pic" />
      <div>
        <h5>
          {preferredName} {middleName.charAt(0)} {surname}
        </h5>
        <p>{username}</p>
        <p>Birthday: {dob}</p>
      </div>
    </>
  );
}

export default singleStudent;
