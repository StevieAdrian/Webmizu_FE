'use client';

import { useState } from 'react';
import styles from './SupportChat.module.scss';

export default function SupportChat() {
  const [message, setMessage] = useState('');

  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Support Chat</h2>
        <span className={styles.onlineBadge}>
          <span className={styles.onlineDot} />
          Online
        </span>
      </div>

      <div className={styles.card}>
        <div className={styles.messages}>
          {/* Received */}
          <div className={styles.messageRow}>
            <div className={styles.avatar}>
              <span className={`material-symbols-outlined ${styles.avatarIcon}`}>support_agent</span>
            </div>
            <div className={styles.messageContent}>
              <div className={`${styles.bubble} ${styles.bubbleReceived}`}>
                Hello! How can I help you today?
              </div>
              <span className={styles.messageTime}>10:30 AM</span>
            </div>
          </div>

          {/* Sent */}
          <div className={`${styles.messageRow} ${styles.messageSent}`}>
            <div className={styles.messageContent}>
              <div className={`${styles.bubble} ${styles.bubbleSent}`}>
                I need to reschedule my service appointment...
              </div>
              <span className={styles.messageTime}>10:32 AM</span>
            </div>
          </div>

          {/* Received */}
          <div className={styles.messageRow}>
            <div className={styles.avatar}>
              <span className={`material-symbols-outlined ${styles.avatarIcon}`}>support_agent</span>
            </div>
            <div className={styles.messageContent}>
              <div className={`${styles.bubble} ${styles.bubbleReceived}`}>
                Sure! Which appointment would you like to reschedule?
              </div>
              <span className={styles.messageTime}>10:33 AM</span>
            </div>
          </div>
        </div>

        <div className={styles.inputArea}>
          <input
            className={styles.input}
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={styles.sendBtn} type="button">
            <span className={`material-symbols-outlined ${styles.sendIcon}`}>send</span>
          </button>
        </div>
      </div>
    </section>
  );
}
