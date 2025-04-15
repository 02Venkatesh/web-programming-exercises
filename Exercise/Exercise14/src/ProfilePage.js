import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
const ProfilePage = () => {
  const user = {
    name: "Venkatesh",
    email: "bvenkatesh0207@gmail.com",
    bio: "University Student passionate about React.",
    imageUrl: "./Images/test.jpeg",
    posts: ["Learning React!", "Building a profile page", "React is awesome!"],
  };
  return (
    <div>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};
export default ProfilePage;
