import styles from './ProjectCard.module.css';
export default function ProjectCard({project}) {


    return (
        <li className={styles.card} style={{backgroundImage: `url(${project.image})`}}>
            <div className={styles.gradient}></div>
            <div className={styles.content}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className="description">{project.description}</p>
            </div>
        </li>
    );
}