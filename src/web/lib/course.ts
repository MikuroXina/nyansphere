export declare const courseIdNominal: unique symbol;
export type CourseId = string & { [courseIdNominal]: never };

export interface Course {
  id: CourseId;
  title: string;
  desc: string;
}
