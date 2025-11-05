'use client';

interface Props {
  data: number[];
  setFormData: any;
}

export default function CoursesForm({ data, setFormData }: Props) {
  const courses = [
    { id: 1, name: 'B.Sc Computer Science' },
    { id: 2, name: 'B.Com' },
    { id: 3, name: 'BBA' },
    { id: 4, name: 'B.A English' },
  ];

  const handleCourseSelect = (id: number) => {
    setFormData((prev: any) => ({
      ...prev,
      selectedCourses: prev.selectedCourses.includes(id)
        ? prev.selectedCourses.filter((c: number) => c !== id)
        : [...prev.selectedCourses, id],
    }));
  };

  return (
    <section className="border rounded-xl bg-gray-50">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 bg-blue-300 py-4 px-4 rounded-t-xl mb-4 ">
        Course Selection
      </h2>

      <div className="flex flex-col gap-3 p-6">
        {courses.map((course) => (
          <div key={course.id} className="flex items-center gap-3">
            <label className="w-1/4 font-semibold text-gray-800">
              {course.name}
            </label>
            <input
              type="checkbox"
              title={`Select ${course.name}`}
              checked={data.includes(course.id)}
              onChange={() => handleCourseSelect(course.id)}
              className="h-4 w-4 accent-blue-600"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
