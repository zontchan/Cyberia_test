import {useEffect, useState} from "react";
import React from "react";
import Filters from "./Filters";
import ProjectsList from "./ProjectsList";
import Feedback from "./Feedback";
import styles from './Projects.module.css';


let projectsList = [];

export default function Projects() {
    const [projects, projectsChange] = useState([]);

    useEffect(() => {
        fetch('https://backend.cyberia.studio/api/v1/projects')
            .then(response => response.json())
            .then((value) => {
                projectsChange(value.items)
                projectsList = value.items;
            });
    }, []);


    const [activeFilter, setActiveFilter] = useState();
    const filters = ['Frontend', 'Backend','Frontend/Backend'];
    const onSelectFilter = (filter) => {
        setActiveFilter(filter);
        const result = projectsList.filter((project) => {
            if(project.categories.length > 1 && filter === 'Frontend/Backend') return true;
            if(project.categories.length === 1){
                if(project.categories[0].name === 'Backend' && filter === 'Backend') return true
                else if(project.categories[0].name === 'Frontend' && filter === 'Frontend') return true
            }
        });
        projectsChange(result);
    }

    return (
        <div className={styles.projects}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Проекты</h1>
                <Filters
                    filters={filters}
                    selected= {activeFilter}
                    onSelectFilter={onSelectFilter}/>
                <ProjectsList projects={projects}/>
            </div>
            <Feedback/>
        </div>
    );
}