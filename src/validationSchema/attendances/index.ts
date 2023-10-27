import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  clock_in_time: yup.date().nullable(),
  clock_out_time: yup.date().nullable(),
  total_hours: yup.number().integer().nullable(),
  employee_id: yup.string().nullable().required(),
});
