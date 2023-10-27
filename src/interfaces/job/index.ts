import { EmployeeInterface } from 'interfaces/employee';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  salary?: number;
  location?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  employee?: EmployeeInterface[];
  organization?: OrganizationInterface;
  _count?: {
    employee?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  organization_id?: string;
}
