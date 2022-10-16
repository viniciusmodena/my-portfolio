// Styles
import { Box, Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";
import { SiDjango, SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import TagCloud from "@/components/TagCloud";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  // const data = stackData.map((stack) => stack.title);

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Box style={{ width: "36rem" }}>
              <Flex>
                <UserImage
                  src={`https://github.com/${userData.githubUser}.png`}
                  alt={userData.nameUser}
                  title={userData.nameUser}
                  width={"120px"}
                  height={"120px"}
                />
                <Text type="heading2" color="grey4">
                  Hey, eu sou {userData.nameUser}.
                </Text>
              </Flex>
              <Text as="h1" type="heading1" color="grey5">
                Sou um{" "}
                <Text as="span" type="heading1" color="brand2">
                  Desenvolvedor Web FullStack
                </Text>{" "}
                , e adoro criar e desenvolver projetos.
              </Text>
              <Text type="body1" color="grey2">
                Aproveite para dar uma olhado em alguns dos meus projetos.
              </Text>
              <HeaderButtonsArea>
                <Button as="a" type="primary" href="#projects">
                  Projetos
                </Button>
                <Button
                  as="a"
                  type="outline"
                  target="_blank"
                  href={portfolioUrl}
                >
                  Ver codigo do meu portfolio
                </Button>
                <Button
                  color="grey4"
                  as="a"
                  css={{ "&:hover": { color: "$grey1" } }}
                  type="circle"
                  target="_blank"
                  href={gihubUrl}
                >
                  <FaGithub />
                </Button>
              </HeaderButtonsArea>
            </Box>
            <TagCloud />

            {/* <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards> */}
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading2" color="grey3">
                Meus Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Segue alguns dos projetos que desenvolve ou participei do
                desenvolvimento
                {/* <Text as="span" color="brand5">
                  side projects
                </Text> */}
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
