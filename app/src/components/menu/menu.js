import styles from "./menu.module.css";
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <div className={styles.menu}>
      <div>Меню</div>
      <ul>
        <li><Link exact to="/">Главная</Link></li>
        <li><Link exact to="/profile">Профиль</Link></li>
        <li><Link exact to="/chat">Чаты</Link></li>
      </ul>
    </div>
  );
}
