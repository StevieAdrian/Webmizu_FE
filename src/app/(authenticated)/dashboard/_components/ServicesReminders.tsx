'use client';

import { useQuery } from '@tanstack/react-query';
import { taskService } from '@/services/task';
import { technicianService } from '@/services/technician';
import type { ITask } from '@/interfaces/task';
import type { ITechnicianItem } from '@/interfaces/technician';
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

function TaskCard({ task, techniciansMap }: { task: ITask; techniciansMap: Map<string, ITechnicianItem> }) {
  const variant = getStatusVariant(task.status, task.task_date);
  const config = variantConfig[variant];
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
          {task.description ?? (variant === 'green'
            ? `Maintenance completed on ${formattedDate}`
            : `Next maintenance scheduled for ${formattedDate}`)}
        </p>
        {technician && (
          <div className={styles.details}>
            <span className={styles.detail}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>person</span>
              Technician: {technician.name}
            </span>
          </div>
        )}
        {variant === 'orange' && (
          <a href="#" className={`${styles.reminderLink} ${styles.linkOrange}`}>Renew Contract →</a>
        )}
        {variant === 'green' && (
          <a href="#" className={`${styles.reminderLink} ${styles.linkGreen}`}>View Report →</a>
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

  const techniciansMap = new Map(technicians.map((t) => [t.id, t]));

  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Upcoming Services &amp; Reminders</h2>
        <a href="#" className={styles.viewAll}>View All</a>
      </div>

      <div className={styles.list}>
        {tasksLoading && <p>Loading...</p>}
        {!tasksLoading && tasks.length === 0 && (
          <p className={styles.reminderDesc}>No upcoming services or reminders.</p>
        )}
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} techniciansMap={techniciansMap} />
        ))}
      </div>
    </div>
  );
}
