'use client';

import { useQuery } from '@tanstack/react-query';
import { taskService } from '@/services/task';
import { technicianService } from '@/services/technician';
import { contractService } from '@/services/contract';
import { customerProductService } from '@/services/customer-product';
import { productCatalogService } from '@/services/product-catalog';
import type { ITask } from '@/interfaces/task';
import type { ITechnicianItem } from '@/interfaces/technician';
import type { IContract } from '@/interfaces/contract';
import type { ICustomerProduct } from '@/interfaces/customer-product';
import type { IProductCatalog } from '@/interfaces/product-catalog';
import styles from './ServicesReminders.module.scss';

function getRelativeTimeLabel(taskDate: string): { label: string; variant: 'blue' | 'orange' | 'green' } {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const date = new Date(taskDate);
  date.setHours(0, 0, 0, 0);
  const diffDays = Math.round((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays > 0) return { label: `in ${diffDays} day${diffDays === 1 ? '' : 's'}`, variant: 'blue' };
  if (diffDays < 0) return { label: `${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago`, variant: 'green' };
  return { label: 'Today', variant: 'blue' };
}

function getStatusVariant(status: string | null, taskDate: string): 'blue' | 'orange' | 'green' {
  if (status === 'completed') return 'green';
  if (status === 'contract_expiring') return 'orange';
  const { variant } = getRelativeTimeLabel(taskDate);
  return variant;
}

const variantConfig = {
  blue: {
    reminder: styles.reminderBlue,
    icon: styles.iconBlue,
    timeLabel: styles.timeLabelBlue,
    iconName: 'calendar_month',
  },
  orange: {
    reminder: styles.reminderOrange,
    icon: styles.iconOrange,
    timeLabel: styles.timeLabelOrange,
    iconName: 'warning',
  },
  green: {
    reminder: styles.reminderGreen,
    icon: styles.iconGreen,
    timeLabel: styles.timeLabelGreen,
    iconName: 'check_circle',
  },
};

function getContractTimeLabel(endDate: string): string {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);
  const diffDays = Math.round((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays > 0) return `${diffDays} day${diffDays === 1 ? '' : 's'}`;
  if (diffDays < 0) return `Expired ${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago`;
  return 'Expires today';
}

function ContractCard({
  contract,
  customerProductsMap,
  productCatalogMap,
}: {
  contract: IContract;
  customerProductsMap: Map<string, ICustomerProduct>;
  productCatalogMap: Map<string, IProductCatalog>;
}) {
  const config = variantConfig['orange'];
  const timeLabel = getContractTimeLabel(contract.end_date);

  const customerProduct = customerProductsMap.get(contract.customer_product_id);
  const productName = customerProduct
    ? (productCatalogMap.get(customerProduct.product_catalog_id)?.name ?? 'Unknown Product')
    : 'Unknown Product';

  const isExpired = new Date(contract.end_date) < new Date();
  const contractTitle = isExpired
    ? `${productName} - Contract Expired`
    : `${productName} - Contract Expiring Soon`;

  const formattedEndDate = new Date(contract.end_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={`${styles.reminder} ${config.reminder}`}>
      <div className={`${styles.iconWrap} ${config.icon}`}>
        <span className={`material-symbols-outlined ${styles.reminderIcon}`}>{config.iconName}</span>
      </div>
      <div className={styles.reminderContent}>
        <div className={styles.reminderTop}>
          <h3 className={styles.reminderTitle}>{contractTitle}</h3>
          <span className={`${styles.timeLabel} ${config.timeLabel}`}>{timeLabel}</span>
        </div>
        <p className={styles.reminderDesc}>
          {isExpired
            ? `Your service contract expired on ${formattedEndDate}`
            : `Your service contract will expire on ${formattedEndDate}`}
        </p>
        <a href="#" className={`${styles.reminderLink} ${styles.linkOrange}`}>Renew Contract →</a>
      </div>
    </div>
  );
}

function TaskCard({ task, techniciansMap }: { task: ITask; techniciansMap: Map<string, ITechnicianItem> }) {
  const config = variantConfig['blue'];
  const { label: timeLabel } = getRelativeTimeLabel(task.task_date);
  const technician = task.technician_id ? techniciansMap.get(task.technician_id) : null;

  const formattedDate = new Date(task.task_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={`${styles.reminder} ${config.reminder}`}>
      <div className={`${styles.iconWrap} ${config.icon}`}>
        <span className={`material-symbols-outlined ${styles.reminderIcon}`}>{config.iconName}</span>
      </div>
      <div className={styles.reminderContent}>
        <div className={styles.reminderTop}>
          <h3 className={styles.reminderTitle}>{task.title}</h3>
          <span className={`${styles.timeLabel} ${config.timeLabel}`}>{timeLabel}</span>
        </div>
        <p className={styles.reminderDesc}>
          {task.description ?? `Next maintenance scheduled for ${formattedDate}`}
        </p>
        {technician && (
          <div className={styles.details}>
            <span className={styles.detail}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>person</span>
              Technician: {technician.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServicesReminders() {
  const { data: tasks = [], isLoading: tasksLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => taskService.getTasks(),
  });

  const { data: technicians = [] } = useQuery({
    queryKey: ['technicians'],
    queryFn: () => technicianService.getTechnicians(),
  });

  const { data: contracts = [], isLoading: contractsLoading } = useQuery({
    queryKey: ['contracts'],
    queryFn: () => contractService.getContracts(),
  });

  const { data: customerProducts = [] } = useQuery({
    queryKey: ['customer-products'],
    queryFn: () => customerProductService.getCustomerProducts(),
  });

  const { data: productCatalogs = [] } = useQuery({
    queryKey: ['product-catalogs'],
    queryFn: () => productCatalogService.getProductCatalogs(),
  });

  const techniciansMap = new Map(technicians.map((t) => [t.id, t]));
  const customerProductsMap = new Map(customerProducts.map((cp) => [cp.id, cp]));
  const productCatalogMap = new Map(productCatalogs.map((p) => [p.id, p]));

  const isLoading = tasksLoading || contractsLoading;
  const isEmpty = tasks.length === 0 && contracts.length === 0;

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Upcoming Services &amp; Reminders</h2>
        <a href="#" className={styles.viewAll}>View All</a>
      </div>

      <div className={styles.list}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && isEmpty && (
          <p className={styles.reminderDesc}>No upcoming services or reminders.</p>
        )}
        {tasks.map((task) => (
          <TaskCard key={`task-${task.id}`} task={task} techniciansMap={techniciansMap} />
        ))}
        {contracts.map((contract) => (
          <ContractCard
            key={`contract-${contract.id}`}
            contract={contract}
            customerProductsMap={customerProductsMap}
            productCatalogMap={productCatalogMap}
          />
        ))}
      </div>
    </div>
  );
}
