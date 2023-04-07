import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { SectionHeading } from "../styles/layout/SectionHeadings"
import { ProjectImageContainer, ProjectStyledSection, ProjectText, SingleProject, Tags } from "../styles/sections/ProjectsSection"
import { ProjectData } from "../../data/ProjectData"

export const Projects = () => {
    return <>
    <ProjectStyledSection id="mywork">
        <SectionHeading>
            <h1>My Work</h1>
        </SectionHeading>
        <div>
            {ProjectData && ProjectData.map((project, index) =>(
                <SingleProject key={index}>
                    <ProjectImageContainer>
                        <img src={project.image} alt={project.title} />
                    </ProjectImageContainer>
                    <ProjectText>
                        <h1>{project.title}</h1>
                        <Tags>
                            {project.tags && project.tags.map((tag, index) => <span key={index}>{tag}</span>)}
                        </Tags>
                        <p>{project.description}</p>
                        <div>
                            <a href={project.deployedLink} target="_blank" rel="noreferrer"><FaExternalLinkAlt /><span>Deployed Site</span></a>
                            <a href={project.gitHubLink} target="_blank" rel="noreferrer"><FaGithub /><span>View Repo</span></a>
                            
                        </div>
                    </ProjectText>
                </SingleProject>
            ))}
        </div>
    </ProjectStyledSection>
    </>
}

