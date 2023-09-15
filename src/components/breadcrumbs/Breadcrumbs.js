import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.breadcrumbs}>
                <li className={styles.item}><a href="#">Главная</a></li>
                <li className={`${styles.item} ${styles.active}`}>Проекты</li>
            </ul>
        </div>
    );
}