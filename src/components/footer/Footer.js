import styles from './Footer.module.css';
import logo from '../../img/logo.png';

export default function Footer() {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                  <div className={styles.logo}>
                      <a href="#"><img src={logo} alt="" className={styles.logoImg}/></a>
                      <p className={styles.info}>Web and machine learning developing company</p>
                  </div>
                    <nav className={styles.nav}>
                        <ul className={styles.contactsList}>
                            <li className={styles.contactItem}><a href="">+7 499 679 45 79</a></li>
                            <li className={styles.contactItem}><a href="">hello@cyberia.ru</a></li>
                            <li className={styles.contactItem}>Аносова 3Б, оф. 1</li>
                        </ul>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}><a href="#">Главная</a></li>
                            <li className={styles.navItem}><a href="#">Услуги</a></li>
                            <li className={styles.navItem}><a href="#">Проекты</a></li>
                            <li className={styles.navItem}><a href="#">Блог</a></li>
                            <li className={styles.navItem}><a href="#">О нас</a></li>
                            <li className={styles.navItem}><a href="#">Команда</a></li>
                        </ul>
                    </nav>
                    <div className={styles.legalInfo}><p className={styles.legalInfoText}>2022, digital-агентство Cyberia<br/>
                        Положение о защите персональных данных
                        Политика в отношении обработки
                        и защиты персональных данных
                        <br/>Оферта оказания услуг</p></div>
                </div>
            </div>
        </footer>
    );
}