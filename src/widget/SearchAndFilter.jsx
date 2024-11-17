import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const SearchAndFilter = ({ searchQuery, setSearchQuery, filterCriteria, setFilterCriteria, onAddProfile }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
    {/* Search Input */}
    <Input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search profiles..."
      className="w-full"
    />

    {/* Filter Dropdown */}
    <Select defaultValue={filterCriteria} onValueChange={setFilterCriteria}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Filter by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="name">Name</SelectItem>
        <SelectItem value="location">Location</SelectItem>
      </SelectContent>
    </Select>

    {/* Add Profile Button */}
    <Button
      onClick={onAddProfile}
      className="flex items-center gap-2 w-full sm:w-auto justify-center"
    >
      <Plus className="h-4 w-4" />
      Add Profile
    </Button>
  </div>
);

export default SearchAndFilter;
