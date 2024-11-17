import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const MapDialog = ({ showMap, setShowMap, selectedProfile }) => {
  return (
    <Dialog open={showMap} onOpenChange={setShowMap}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{selectedProfile?.name} - Location</DialogTitle>
          <DialogDescription>{selectedProfile?.address}</DialogDescription>
        </DialogHeader>
        {/* Placeholder for Map - Replace with Google Maps/Mapbox integration */}
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Map placeholder - Integrate with Google Maps or Mapbox</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapDialog;
