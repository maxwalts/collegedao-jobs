export interface UserType {
  id?: number;
  email?: string,
  password?: string,
}

export interface JobType {
  id?: number;
  company?: string,
  logo?: string,
  title?: string,
  category?: string,
  city?: string,
  description?: string,
  createdAt?: string,
}

export interface ApplicationType {
  id?: number;
  job?: Job,
  user?: User,
  createdAt?: string,
}

