export interface ITask {
  id: string;
  task_date: string;
  customer_id: string | null;
  customer_product_id: string | null;
  expected_id: string | null;
  technician_id: string | null;
  title: string;
  description: string | null;
  status: string | null;
  created_at: string | null;
  job_id: string | null;
  task_type: string | null;
}
