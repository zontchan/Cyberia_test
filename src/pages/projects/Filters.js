
import { v4 as uuidv4 } from 'uuid';
import styles from './Filters.module.css';

export default function Filters(props) {
    const {filters, selected, onSelectFilter} = props;

    return (
        <ul className={styles.filtersList}>
            {filters.map((filter) => <li className={filter === selected ? `${styles.item} ${styles.selected}` : styles.item} key={uuidv4()} onClick = {(e) => onSelectFilter(e.currentTarget.innerText)}>{filter}</li>)}
        </ul>
    );
}