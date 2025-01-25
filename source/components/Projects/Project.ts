export interface Project {
  enabled: boolean;
  name: string;
  icon: string;
  url: string;
  synopsis: string;
  text: string;
  tech: string;
  year: number;
  occupation: string;
  collab: { name: string; profile: string }[];
}