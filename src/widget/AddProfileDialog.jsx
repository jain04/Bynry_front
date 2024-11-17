import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const AddProfileDialog = ({
  open,
  setOpen,
  newProfile,
  handleInputChange,
  handleFileChange,
  handleAddProfile,
  handleCoordinateChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Profile</DialogTitle>
          <DialogDescription>Fill in the details below to add a new profile.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {/* Name */}
          <Input
            name="name"
            value={newProfile.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full"
          />

          {/* Role */}
          <Input
            name="role"
            value={newProfile.role}
            onChange={handleInputChange}
            placeholder="Role"
            className="w-full"
          />

          {/* Description */}
          <Textarea
            name="description"
            value={newProfile.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full"
          />

          {/* Address */}
          <Input
            name="address"
            value={newProfile.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="w-full"
          />

          {/* Coordinates */}
          <div className="flex gap-4">
            <Input
              name="lat"
              type="number"
              value={newProfile.coordinates?.lat || ''}
              onChange={(e) => handleCoordinateChange(e, 'lat')}
              placeholder="Latitude"
              className="w-full"
            />
            <Input
              name="lng"
              type="number"
              value={newProfile.coordinates?.lng || ''}
              onChange={(e) => handleCoordinateChange(e, 'lng')}
              placeholder="Longitude"
              className="w-full"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
              Upload Profile Picture
            </label>
            <Input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full"
            />
            {newProfile.imageUrl && (
              <img
                src={newProfile.imageUrl}
                alt="Profile Preview"
                className="mt-4 h-24 w-24 object-cover rounded-full"
              />
            )}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleAddProfile}>Create Profile</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProfileDialog;
