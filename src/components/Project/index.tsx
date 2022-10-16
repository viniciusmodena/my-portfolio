import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  ProjectImage,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";

import { useProjects } from "../../context/projectsProvider";

export const Project = (): JSX.Element => {
  const { repositories, fillReposList } = useProjects();

  useEffect(() => {
    fillReposList();
  }, []);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            {/* Project Name */}
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.display_name}
            </ProjectTitle>
            {/* Project Image */}
            <ProjectImage
              src={repository.image_url}
              alt={repository.display_name}
              title={repository.display_name}
            />
            {/* Project Language */}
            <ProjectStack>
              <Text type="body2" color="grey2">
                Linguagem:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>
            {/* Project Description */}
            {/* <Text type="body1" color="grey2">
              {repository.description}
            </Text> */}
            <ProjectLinks>
              {/* GitHub Link */}
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Codigo Fonte
                {/* Deploy Link*/}
              </ProjectLink>
              {repository.deploy && (
                <ProjectLink target="_blank" href={`${repository.deploy}`}>
                  <FaShare /> Ver Demonstração
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
