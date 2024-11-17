import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { User } from 'lucide-react';
import MOCK_PROFILES from '@/constants/constants';


const ProfileListViewPage = () => {
  const [profiles, setProfiles] = useState([]);

  // Fetch profiles from MOCK_PROFILES on component mount
  useEffect(() => {
    setProfiles(MOCK_PROFILES);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center">
        Our Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {profiles.map((profile) => (
          <Card 
            key={profile.id} 
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto bg-gray-100 rounded-full p-4 w-20 sm:w-24 h-20 sm:h-24 flex items-center justify-center">
                {profile.imageUrl ? (
                  <img src={profile.imageUrl} alt={profile.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
                ) : (
                  <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600" />
                )}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-1">{profile.name}</h2>
                <p className="text-sm sm:text-base text-gray-600">{profile.role}</p>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-sm sm:text-base text-gray-700 text-center">
                {profile.description}
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">{profile.address}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfileListViewPage;
