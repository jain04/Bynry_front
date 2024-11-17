import React, { useState } from "react";
// import axios from "axios";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


const ProfileDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("photo", formData.photo);

    // try {
    //   const response = await axios.post("/api/profiles", data, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    //   alert("Profile submitted successfully!");
    // } catch (error) {
    //   console.error("Error submitting profile:", error);
    //   alert("Failed to submit profile. Please try again.");
    // }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">

            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name

            </label>
            <Input type="text" id="name" placeholder="Name" className="mt-3"/>

          </div>

          <div className="grid w-full gap-2 mb-4">
            <Textarea id="description" placeholder="Describe your self." />
          </div>
          <div className="mb-4">

            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Location

            </label>
            <Input type="text" id="location" placeholder="Location" className="mt-3"/>

          </div>

          

          
          <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor="picture" className="mt-2">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <Button className="w-full">Submit</Button>
        </form>
      </div>
    </div>
  );
}  
    
  


export default ProfileDetailsForm;
