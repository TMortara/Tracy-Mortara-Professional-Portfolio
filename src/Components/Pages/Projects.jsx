import { FaExternalLinkAlt, FaGithub, FaReadme } from "react-icons/fa";
import { SectionHeading } from "../styles/layout/SectionHeadings";
import {
  OtherProjectItems,
  OtherProjectTags,
  OtherProjectsSection,
  ProjectImageContainer,
  ProjectStyledSection,
  ProjectText,
  SingleOtherProject,
  SingleOtherProjectText,
  SingleProject,
  Tags,
} from "../styles/sections/ProjectsSection";
import { ProjectData } from "../../data/ProjectData";
import { OtherProjectData } from "../../data/OtherProjectData";

export const Projects = () => {
  return (
    <>
      <ProjectStyledSection id="myprojects">
        <SectionHeading>
          <h1>My Projects</h1>
        </SectionHeading>
        <div>
          {ProjectData &&
            ProjectData.map((project, index) => (
              <SingleProject key={index}>
                <ProjectImageContainer>
                  <img src={project.image} alt={project.title} />
                </ProjectImageContainer>
                <ProjectText>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.description}</p>
                  <div>
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                      <span>Deployed Site</span>
                    </a>
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                      <span>View Repo</span>
                    </a>
                  </div>
                </ProjectText>
              </SingleProject>
            ))}
        </div>

        <OtherProjectsSection>
          <SectionHeading>
            <h2>Other Projects</h2>
          </SectionHeading>
          <OtherProjectItems>
            {OtherProjectData &&
              OtherProjectData.map((project, index) => (
                <SingleOtherProject key={index}>
                  <SingleOtherProjectText>
                    <h1>{project.title}</h1>
                    <OtherProjectTags>
                      {project.tags &&
                        project.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                    </OtherProjectTags>
                    <p>{project.description}</p>
                    <div>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                        <span>View Repo</span>
                      </a>
                      <a href={project.readme} target="_blank" rel="noreferrer">
                        <FaReadme />
                        <span>View README</span>
                      </a>
                    </div>
                  </SingleOtherProjectText>
                </SingleOtherProject>
              ))}
          </OtherProjectItems>
        </OtherProjectsSection>
      </ProjectStyledSection>
    </>
  );
};
