"use client";

import { useState } from "react";
import { Search, X, MapPin } from "lucide-react";
import type { Station } from "@/types/metro";

interface StationSelectorProps {
  label: string;
  stations: Station[];
  selectedStation: Station | null;
  onSelect: (station: Station | null) => void;
}

const StationSelector = ({
  label,
  stations,
  selectedStation,
  onSelect,
}: StationSelectorProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredStations = stations.filter((station) => {
    const searchTerm = search.trim().toLowerCase();

    return (
      station.fa.includes(searchTerm) ||
      station.name.toLowerCase().includes(searchTerm)
    );
  });

  const handleSelect = (station: Station) => {
    onSelect(station);
    setSearch("");
    setIsOpen(false);
  };

  const handleClear = () => {
    onSelect(null);
    setSearch("");
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-3 focus-within:border-blue-500">
        <MapPin size={18} className="shrink-0 text-gray-400" />

        <input
          type="text"
          value={isOpen ? search : selectedStation?.fa ?? ""}
          onChange={(event) => setSearch(event.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="جستجوی ایستگاه..."
          className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
        />

        {selectedStation && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="پاک کردن ایستگاه انتخاب‌شده"
            className="text-gray-400 transition hover:text-red-500"
          >
            <X size={18} />
          </button>
        )}

        <Search size={18} className="shrink-0 text-gray-400" />
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="بستن فهرست ایستگاه‌ها"
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setIsOpen(false)}
          />

          <ul className="absolute top-full z-20 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            {filteredStations.length > 0 ? (
              filteredStations.map((station) => (
                <li key={station.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(station)}
                    className="flex w-full items-center justify-between px-4 py-3 text-right text-sm transition hover:bg-blue-50"
                  >
                    <span className="font-medium text-gray-800">
                      {station.fa}
                    </span>

                    <span className="text-xs text-gray-400">
                      {station.name}
                    </span>
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-6 text-center text-sm text-gray-500">
                ایستگاهی پیدا نشد.
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default StationSelector;