import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from 'uuid';
import styles from './ProjectsList.module.css';
export default function ProjectsList({projects}) {
    return(
        <ul className={styles.projectsList}>
            {projects.map((project) => <ProjectCard project= {project} key={uuidv4()}/>)}
        </ul>
    );
}