'use client';
import { Student } from '../types';

interface Props {
  data: Student;
  onChange: (section: 'student', field: keyof Student, value: any) => void;
}

export default function StudentForm({ data, onChange }: Props) {
  return (
    <section className="border rounded-xl bg-gray-50">
      <h2 className="text-xl font-semibold mb-2 rounded-t-xl bg-blue-300 px-4 py-4">Student Details</h2>

      <div className="flex flex-col gap-3 p-6">
        {/* Student Name */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Student Name
          </label>
          <input
            title="Enter full student name"
            placeholder="Enter full student name"
            value={data.studentName}
            onChange={(e) => onChange('student', 'studentName', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* DOB */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Date of Birth
          </label>
          <input
            type="date"
            title="Select date of birth"
            value={data.dateOfBirth}
            onChange={(e) => onChange('student', 'dateOfBirth', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            title="Enter valid email"
            placeholder="e.g. john@example.com"
            value={data.email}
            onChange={(e) => onChange('student', 'email', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Phone Number
          </label>
          <input
            title="Enter phone number"
            placeholder="9876543210"
            value={data.phoneNumber}
            onChange={(e) => onChange('student', 'phoneNumber', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">Gender</label>
          <select
            title="Select gender"
            value={data.gender}
            onChange={(e) => onChange('student', 'gender', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">Address</label>
          <input
            title="Enter complete address"
            placeholder="House no, Street, Area"
            value={data.address}
            onChange={(e) => onChange('student', 'address', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* City */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">City</label>
          <input
            title="Enter city"
            placeholder="e.g. Madurai"
            value={data.city}
            onChange={(e) => onChange('student', 'city', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* State */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            State / Province
          </label>
          <input
            title="Enter state or province"
            placeholder="e.g. Tamil Nadu"
            value={data.state}
            onChange={(e) => onChange('student', 'state', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Postal Code */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">
            Postal Code
          </label>
          <input
            title="Enter postal code"
            placeholder="e.g. 625001"
            value={data.postalCode}
            onChange={(e) => onChange('student', 'postalCode', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Country */}
        <div className="flex items-center gap-3">
          <label className="w-1/4 font-semibold text-gray-800">Country</label>
          <input
            title="Enter country name"
            placeholder="e.g. India"
            value={data.country}
            onChange={(e) => onChange('student', 'country', e.target.value)}
            className="w-3/4 border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
