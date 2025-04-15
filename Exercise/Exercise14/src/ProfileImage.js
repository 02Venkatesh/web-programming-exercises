import React from "react";
const ProfileImage = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="Profile"
      width="150"
      height={150}
      style={{ borderRadius: "50%", objectFit: "cover" }}
    />
  );
};
export default ProfileImage;
