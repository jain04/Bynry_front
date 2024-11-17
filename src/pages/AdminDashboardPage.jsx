import React, { useState, useEffect } from 'react';
import { Menu, Users, MapPin, LogOut, ChevronLeft, ChevronRight, Search, Plus, Edit, Trash2, Loader, Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TopNavigation from '@/widget/TopNavigation';
import SideBar from '@/widget/SideBar';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const AdminDashBoardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('name');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [showAddProfile, setShowAddProfile] = useState(false);
  const [newProfile, setNewProfile] = useState({
    name: '',
    role: '',
    description: '',
    location: '',
    picture: null
  });

  const handleAddProfile = () => {
    // Here you would typically make an API call to save the profile
    console.log('New Profile Data:', newProfile);
    
    // Reset form and close dialog
    setNewProfile({
      name: '',
      role: '',
      description: '',
      location: '',
      picture: null
    });
    
    setShowAddProfile(false);
  };

  // Mock user data - replace with actual auth
  const user = {
    name: 'Admin User',
    email: 'admin@example.com',
    avatar: '/api/placeholder/32/32'
  };

  // Mock data - replace with actual API calls
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        // Simulate API call
        const mockProfiles = [
          {
            id: 1,
            name: 'John Doe',
            description: 'Software Engineer',
            address: '123 Tech Street, Silicon Valley',
            imageUrl: '/api/placeholder/150/150',
            coordinates: { lat: 37.7749, lng: -122.4194 }
          },
          {
            id: 2,
            name: 'Jane Smith',
            description: 'Product Manager',
            address: '456 Innovation Ave, New York',
            imageUrl: '/api/placeholder/150/150',
            coordinates: { lat: 40.7128, lng: -74.0060 }
          }
        ];
        
        setProfiles(mockProfiles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profiles:', error);
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfile(prev => ({
        ...prev,
        picture: file
      }));
    }
  };

  // Filter profiles based on search query
  const filteredProfiles = profiles.filter(profile => {
    const searchTerm = searchQuery.toLowerCase();
    switch (filterCriteria) {
      case 'name':
        return profile.name.toLowerCase().includes(searchTerm);
      case 'location':
        return profile.address.toLowerCase().includes(searchTerm);
      default:
        return true;
    }
  });

  const handleShowMap = (profile) => {
    setSelectedProfile(profile);
    setShowMap(true);
  };

  const CreateProfile = ()=>{
    useState(()=>{
      setCreateProfile(true);
    })
    
  }


  const renderDashboard = () => {
    if (loading) {
      return (
        <div className="flex h-screen items-center justify-center">
          <Loader className="h-8 w-8 animate-spin" />
          <span className="ml-2">Loading profiles...</span>
        </div>
      );
    }

    return (
      <div className="p-6">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Profiles Dashboard</h2>
          <p className="text-gray-600 mt-2">Manage profiles and locations</p>
        </div>

        {/* Search and Filter Section */}
      <div className="p-4 lg:p-6">
      {/* Search and Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <Input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="col-span-2 md:col-span-1 lg:col-span-2"
        />
        <Select
          defaultValue={filterCriteria}
          onValueChange={setFilterCriteria}
          className="w-full"
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="location">Location</SelectItem>
          </SelectContent>
        </Select>
        <Button className="col-span-1 lg:col-span-1 flex items-center gap-2" onClick={() => setShowAddProfile(true)} >
          <Plus className="h-4 w-4" /> Add Profile
        </Button>
      </div>
      </div>

      {/* Dialog for Add Profile */}
      <Dialog open={showAddProfile} onOpenChange={setShowAddProfile}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Profile</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new profile
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={newProfile.name}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Input
                id="role"
                name="role"
                value={newProfile.role}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Software Engineer"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={newProfile.description}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Brief description of the profile..."
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                value={newProfile.location}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="City, Country"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="picture" className="text-right">
                Picture
              </Label>
              <div className="col-span-3">
                <div className="flex items-center gap-4">
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Label
                    htmlFor="picture"
                    className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-50"
                  >
                    <Upload className="h-4 w-4" />
                    Choose File
                  </Label>
                  {newProfile.picture && (
                    <span className="text-sm text-gray-500">
                      {newProfile.picture.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setShowAddProfile(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleAddProfile}
              disabled={!newProfile.name || !newProfile.role}
            >
              Create Profile
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

        {/* Profiles Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Profile
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProfiles.map((profile) => (
                <tr key={profile.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={profile.imageUrl}
                          alt={profile.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {profile.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{profile.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{profile.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleShowMap(profile)}
                        className="flex items-center gap-1"
                      >
                        <MapPin className="h-4 w-4" />
                        Map
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <Edit className="h-4 w-4" />
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showMap && (
          <Dialog open={showMap} onOpenChange={setShowMap}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedProfile?.name} - Location</DialogTitle>
                <DialogDescription>{selectedProfile?.address}</DialogDescription>
              </DialogHeader>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map placeholder - Integrate with Google Maps or Mapbox</p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-lg">Profile Manager</span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarOpen ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
              
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-blue-600 w-full"
              >
                <Users className="h-5 w-5" />
                {sidebarOpen && <span>Profiles</span>}
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-blue-600 w-full"
              >
                <MapPin className="h-5 w-5" />
                {sidebarOpen && <span>Locations</span>}
              </button>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            )}
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-red-600">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        sidebarOpen ? 'ml-64' : 'ml-20'
      }`}>
        {/* Top Navigation */}
        <TopNavigation/>

        {/* Main Content Area */}
        <main className="p-6">
          {renderDashboard()}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="px-6 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Profile Manager. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminDashBoardPage;