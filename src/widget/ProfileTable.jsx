import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, MapPin } from 'lucide-react';
import MapDialog from './MapDialog';


const ProfileTable = ({ profiles, handleEditProfile, handleDeleteProfile }) => {
  const [showMap, setShowMap] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleShowMap = (profile) => {
    setSelectedProfile(profile);
    setShowMap(true);
  };

  if (profiles.length === 0) {
    return <div className="text-center text-gray-500 py-6">No profiles available</div>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow mt-6">
      <table className="w-full min-w-[900px] divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profile</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {profiles.map((profile) => (
            <tr key={profile.id} className="hover:bg-gray-50 transition-colors">
              {/* Profile Info */}
              <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={profile.imageUrl}
                  alt={profile.name}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">{profile.name}</span>
                  <span className="text-xs text-gray-500">{profile.role}</span>
                </div>
              </td>

              {/* Description */}
              <td className="px-6 py-4 whitespace-normal break-words max-w-[200px]">
                <span className="text-sm text-gray-900">{profile.description}</span>
              </td>

              {/* Location */}
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">{profile.address}</span>
              </td>

              {/* Actions */}
              <td className="px-6 py-4 whitespace-nowrap">
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
                    onClick={() => handleEditProfile(profile)}
                    className="flex items-center gap-1"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteProfile(profile.id)}
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

      {/* Map Dialog */}
      {showMap && (
        <MapDialog
          showMap={showMap}
          setShowMap={setShowMap}
          selectedProfile={selectedProfile}
        />
      )}
    </div>
  );
};

export default ProfileTable;
