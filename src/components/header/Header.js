import logo from '../../img/logo.png';
import switcher from '../../img/theme-switcher.png';
import styles from './Header.module.css';
import burgerTablet from '../../img/Menu-burger_tablet.png';
import burgerMobile from '../../img/Menu-burger_mobile.png';


export default function Header() {

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.logo}><a href="#"><img src={logo} alt="" className={styles.logoImage}/></a></div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><a href="#" >О нас</a></li>
                        <li className={styles.navItem}><a href="#">Услуги</a></li>
                        <li className={styles.navItem}><a href="#">Проекты</a></li>
                        <li className={styles.navItem}><a href="#" >Блог</a></li>
                        <li className={styles.navItem}><a href="#">Контакты</a></li>
                    </ul>
                </nav>
                <div className={styles.themeSwitcher}><img src={switcher} alt="" className={styles.switcherIco}/></div>
                <div className={styles.burgerMenuTablet}><img src={burgerTablet} alt=""/></div>
                <div className={styles.burgerMenuMobile}><img src={burgerMobile} alt=""/></div>
            </header>
        </div>
    );
}