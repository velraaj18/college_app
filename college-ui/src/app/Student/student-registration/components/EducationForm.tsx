'use client';
import { Education } from '../types';

interface Props {
  data: Education;
  onChange: (section: 'education', field: keyof Education, value: any) => void;
}

export default function EducationForm({ data, onChange }: Props) {
  return (
    <section className="border rounded-xl  bg-gray-50">
      {/* Header */}
      <h2
        className="text-xl font-semibold text-gray-800 bg-blue-300 py-4 rounded-t-xl px-4 mb-4" >
            Education Details
      </h2>

      <div className="flex flex-col gap-3 p-6">
        {/* School Name */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            School Name
          </label>
          <input
            title="Enter school name"
            placeholder="e.g. SBOA Matriculation"
            value={data.schoolName}
            onChange={(e) => onChange('education', 'schoolName', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Medium */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Medium of Instruction
          </label>
          <input
            title="Enter medium of instruction"
            placeholder="e.g. English"
            value={data.mediumOfInstruction}
            onChange={(e) =>
              onChange('education', 'mediumOfInstruction', e.target.value)
            }
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Major Group */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Major Group
          </label>
          <input
            title="Enter major subject group"
            placeholder="e.g. Computer Science"
            value={data.majorGroup}
            onChange={(e) => onChange('education', 'majorGroup', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Year of Passing */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Year of Passing
          </label>
          <input
            title="Enter year of passing"
            placeholder="e.g. 2023"
            value={data.yearOfPassing}
            onChange={(e) =>
              onChange('education', 'yearOfPassing', e.target.value)
            }
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Percentage */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Percentage
          </label>
          <input
            title="Enter total percentage"
            placeholder="e.g. 85.5"
            value={data.percentage}
            onChange={(e) => onChange('education', 'percentage', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
