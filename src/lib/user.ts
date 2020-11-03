import type { CourseId } from "./course";

export declare const userIdNominal: unique symbol;
export type UserId = string & { [userIdNominal]: never };

export interface User {
  id: UserId;
  mail: string;
}

export interface Teacher extends User {
  courses: CourseId[];
}
