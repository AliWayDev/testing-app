export interface IOrganizations {
  id: string; // UUID stored as a string
  name: string;
  members: number;
  photo?: string; // URL string for the photo, optional field
  role: string;
  type_of_sport: string;
  type_of_discipline: string;
}
