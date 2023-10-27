import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface LeaveInterface {
  id?: string;
  employee_id: string;
  start_date: any;
  end_date: any;
  leave_type: string;
  reason?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface LeaveGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  leave_type?: string;
  reason?: string;
  status?: string;
}
