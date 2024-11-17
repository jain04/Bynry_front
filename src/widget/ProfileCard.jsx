import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={profile.photo}
        alt={`${profile.name}'s profile`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
        <p className="text-gray-600 mt-2">{profile.description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
