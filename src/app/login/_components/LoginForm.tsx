'use client';

import { useState } from 'react';
import { useLogin } from '@/hooks/useAuth';
import styles from './LoginForm.module.scss';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    loginMutation.mutate({ email, password });
  };

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <div className={styles.inputWrapper}>
            <div className={styles.inputIcon}>
              <span className="material-symbols-outlined">mail</span>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.fieldHeader}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <a href="#" className={styles.forgotLink}>
              Forgot password?
            </a>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.inputIcon}>
              <span className="material-symbols-outlined">lock</span>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.checkboxRow}>
          <input
            id="remember"
            name="remember"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className={styles.checkbox}
          />
          <label htmlFor="remember" className={styles.checkboxLabel}>
            Remember me
          </label>
        </div>

        <button type="submit" className={styles.button} disabled={loginMutation.isPending}>
          <span>{loginMutation.isPending ? 'Signing in...' : 'Sign In'}</span>
          <span className={`material-symbols-outlined ${styles.buttonIcon}`}>
            arrow_forward
          </span>
        </button>
      </form>

      <div className={styles.divider}>
        <p className={styles.supportText}>
          Don&apos;t have an account?
          <a href="#" className={styles.supportLink}>
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}