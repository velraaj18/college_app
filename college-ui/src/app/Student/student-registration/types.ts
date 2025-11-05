export interface Student {
  studentName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Family {
  fatherName: string;
  fatherContact: string;
  fatherOccupation: string;
  fatherOccupationSector: string;
  motherName: string;
  motherContact: string;
  motherOccupation: string;
  motherOccupationSector: string;
  address: string;
  isFirstGraduate: boolean;
}

export interface Education {
  schoolName: string;
  mediumOfInstruction: string;
  majorGroup: number;
  yearOfPassing: string;
  percentage: string;
}

export interface IStudentAdmission {
  student: Student;
  family: Family;
  education: Education;
  selectedCourses: number[];
}

export const defaultStudent: Student = {
  studentName: '',
  dateOfBirth: '',
  email: '',
  phoneNumber: '',
  gender: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
};

export const defaultFamily: Family = {
  fatherName: '',
  fatherContact: '',
  fatherOccupation: '',
  fatherOccupationSector: '',
  motherName: '',
  motherContact: '',
  motherOccupation: '',
  motherOccupationSector: '',
  address: '',
  isFirstGraduate: false,
};

export const defaultEducation: Education = {
  schoolName: '',
  mediumOfInstruction: '',
  majorGroup: 0,
  yearOfPassing: '',
  percentage: '',
};

export const defaultAdmission: IStudentAdmission = {
  student: defaultStudent,
  family: defaultFamily,
  education: defaultEducation,
  selectedCourses: [],
};
