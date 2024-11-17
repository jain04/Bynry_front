import React, { useState, useEffect } from "react";
import Sidebar from "@/widget/SideBar";
import TopNavigation from "@/widget/TopNavigation";
import SearchAndFilter from "@/widget/SearchAndFilter";
import AddProfileDialog from "@/widget/AddProfileDialog";
import ProfileTable from "@/widget/ProfileTable";
import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
} from "@/services/profileService";

const AdminDashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("name");
  const [profiles, setProfiles] = useState([]);
  const [showAddProfile, setShowAddProfile] = useState(false);

  const [newProfile, setNewProfile] = useState({
    name: "",
    role: "",
    description: "",
    address: "",
    coordinates: { lat: "", lng: "" },
    imageUrl: null,
  });

  // Fetch profiles from the backend
  const fetchProfiles = async () => {
    try {
      const response = await getProfiles();
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleCoordinateChange = (e, type) => {
    const { value } = e.target;
    setNewProfile((prev) => ({
      ...prev,
      coordinates: { ...prev.coordinates, [type]: value },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProfile((prev) => ({ ...prev, imageUrl }));
    }
  };

  const handleAddProfile = async () => {
    try {
      await createProfile(newProfile);
      fetchProfiles();
      setNewProfile({
        name: "",
        role: "",
        description: "",
        address: "",
        coordinates: { lat: "", lng: "" },
        imageUrl: null,
      });
      setShowAddProfile(false);
    } catch (error) {
      console.error("Error adding profile:", error);
    }
  };

  const handleEditProfile = async (id, updatedProfile) => {
    try {
      await updateProfile(id, updatedProfile);
      fetchProfiles();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleDeleteProfile = async (id) => {
    try {
      await deleteProfile(id);
      fetchProfiles();
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        user={{ name: "Admin User", email: "admin@example.com" }}
      />
      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"}`}>
        <TopNavigation />

        <main className="p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Profiles Dashboard</h2>
            <p className="text-gray-600 mt-2">Manage profiles and locations</p>
          </div>

          <SearchAndFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterCriteria={filterCriteria}
            setFilterCriteria={setFilterCriteria}
            onAddProfile={() => setShowAddProfile(true)}
          />

          <AddProfileDialog
            open={showAddProfile}
            setOpen={setShowAddProfile}
            newProfile={newProfile}
            handleInputChange={handleInputChange}
            handleFileChange={handleFileChange}
            handleCoordinateChange={handleCoordinateChange}
            handleAddProfile={handleAddProfile}
          />

          <ProfileTable
            profiles={filteredProfiles}
            handleShowMap={() => console.log("Show map")}
            handleEditProfile={handleEditProfile}
            handleDeleteProfile={handleDeleteProfile}
          />
        </main>
      </div>
    </div>
  );
};

export default AdminDashBoard;
