export interface UserInterface {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  gender?: string;
  sameDate?: Date;
  jobType?: string;
  lookingForJob?: boolean;
}
