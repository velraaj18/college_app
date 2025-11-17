"use client";
import { useState } from "react";
import { IStudentAdmission, defaultAdmission } from "./types";
import StudentForm from "./components/StudentForm";
import FamilyForm from "./components/FamilyForm";
import EducationForm from "./components/EducationForm";
import CoursesForm from "./components/CoursesForm";
import ProtectedRoute from "@/app/services/ProtectedRoute";
import Navbar from "@/app/_components/Navbar";

const AdmissionPage = () => {
  const [formData, setFormData] = useState<IStudentAdmission>(defaultAdmission);

  const handleChange = <T extends keyof IStudentAdmission>(
    section: T,
    field: keyof IStudentAdmission[T],
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5213/api/admission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log(formData);

    if (res.ok) alert("Admission submitted successfully!");
    else alert("Error submitting admission form.");
  };

  return (
    <ProtectedRoute>
      <Navbar/>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10 space-y-8"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          🎓 Student Admission Form
        </h1>

        <StudentForm data={formData.student} onChange={handleChange} />
        <FamilyForm data={formData.family} onChange={handleChange} />
        <EducationForm data={formData.education} onChange={handleChange} />
        <CoursesForm
          data={formData.selectedCourses}
          setFormData={setFormData}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Admission
        </button>
      </form>
    </ProtectedRoute>
  );
};

export default AdmissionPage;
