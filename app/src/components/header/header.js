import styles from "./header.module.css";
import { Menu } from '../menu';
import React from 'react';

export function Header() {
  return <div className={styles.header}>
    <Menu />
  </div>;
}
