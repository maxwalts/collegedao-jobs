export interface UserType {
  id?: number;
  email?: string,
  password?: string,
  linkedin?: string,
  github?: string,
  website?: string,
  firstName?: string,
  lastName?: string,
  currentSchool?: string,
  resume?: string, // link to resume
  graduationYear?: number,
}

export interface JobType {
  id?: number;
  company?: string,
  logo?: string,
  title?: string,
  category?: string, // software, hardware, design, marketing, etc
  type?: string, // full-time, part-time, internship
  city?: string,
  description?: string,
  createdAt?: string,
}

export interface ApplicationType {
  id?: number;
  jobId?: number,
  userId?: number,
  createdAt?: string,
  status?: string, // submitted, sent, accepted, rejected
}
