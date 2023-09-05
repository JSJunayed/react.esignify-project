import React from 'react';
import { Container } from '../../globalStyles';
import {
    ProjectSection,
    ProjectTextWrapper,
    ProjectTitle,
    ProjectText
} from './ProjectsStyles';


const  Projects = () => {
    return ( <ProjectSection id='projects'>
        <Container>
            <ProjectTextWrapper>
                <ProjectTitle>Our Projects</ProjectTitle>
                <ProjectText>Down there you will find out some of are done Projects</ProjectText>
            </ProjectTextWrapper>
        </Container>
    </ProjectSection>
    

    )
}

export default Projects;