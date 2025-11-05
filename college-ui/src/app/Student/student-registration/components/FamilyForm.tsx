'use client';
import { Family } from '../types';

interface Props {
  data: Family;
  onChange: (section: 'family', field: keyof Family, value: any) => void;
}

export default function FamilyForm({ data, onChange }: Props) {
  return (
    <section className="border rounded-xl bg-gray-50">
      {/* Header */}
      <h2 className="text-xl font-semibold px-4 text-gray-800 bg-blue-300 py-4 rounded-t-xl mb-2">
        Family Details
      </h2>

      <div className="flex flex-col gap-3 p-6">
        {/* Father Name */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Father Name
          </label>
          <input
            title="Enter father's full name"
            placeholder="e.g. Ramesh Kumar"
            value={data.fatherName}
            onChange={(e) => onChange('family', 'fatherName', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Father Contact */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Father Contact
          </label>
          <input
            title="Enter father's contact number"
            placeholder="e.g. 9876543210"
            value={data.fatherContact}
            onChange={(e) => onChange('family', 'fatherContact', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Father Occupation */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Father Occupation
          </label>
          <input
            title="Enter father's occupation"
            placeholder="e.g. Engineer"
            value={data.fatherOccupation}
            onChange={(e) => onChange('family', 'fatherOccupation', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Father Sector */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Father Sector
          </label>
          <input
            title="Enter father's occupation sector"
            placeholder="e.g. Private"
            value={data.fatherOccupationSector}
            onChange={(e) =>
              onChange('family', 'fatherOccupationSector', e.target.value)
            }
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Mother Name */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Mother Name
          </label>
          <input
            title="Enter mother's full name"
            placeholder="e.g. Lakshmi R"
            value={data.motherName}
            onChange={(e) => onChange('family', 'motherName', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Mother Contact */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Mother Contact
          </label>
          <input
            title="Enter mother's contact number"
            placeholder="e.g. 9876543200"
            value={data.motherContact}
            onChange={(e) => onChange('family', 'motherContact', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Mother Occupation */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Mother Occupation
          </label>
          <input
            title="Enter mother's occupation"
            placeholder="e.g. Teacher"
            value={data.motherOccupation}
            onChange={(e) => onChange('family', 'motherOccupation', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Mother Sector */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Mother Sector
          </label>
          <input
            title="Enter mother's occupation sector"
            placeholder="e.g. Government"
            value={data.motherOccupationSector}
            onChange={(e) =>
              onChange('family', 'motherOccupationSector', e.target.value)
            }
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Family Address
          </label>
          <input
            title="Enter full family address"
            placeholder="House no, Street, Area"
            value={data.address}
            onChange={(e) => onChange('family', 'address', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* First Graduate */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            First Graduate
          </label>
          <input
            type="checkbox"
            title="Check if student is the first graduate"
            checked={data.isFirstGraduate}
            onChange={(e) =>
              onChange('family', 'isFirstGraduate', e.target.checked)
            }
            className="h-4 w-4 accent-blue-600"
          />
        </div>
      </div>
    </section>
  );
}
