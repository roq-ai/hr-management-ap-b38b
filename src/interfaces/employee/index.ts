import { AttendanceInterface } from 'interfaces/attendance';
import { LeaveInterface } from 'interfaces/leave';
import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  job_id: string;
  user_id: string;
  hire_date?: any;
  termination_date?: any;
  salary?: number;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  leave?: LeaveInterface[];
  job?: JobInterface;
  user?: UserInterface;
  _count?: {
    attendance?: number;
    leave?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_id?: string;
  user_id?: string;
}
