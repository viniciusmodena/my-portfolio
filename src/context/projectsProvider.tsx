import { projectsData } from "@/utils/projectsStack";
import axios, { AxiosResponse } from "axios";
import { createContext, useState, useContext, ReactNode } from "react";

interface ProjectProviderProps {
  children: ReactNode;
}

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
  deploy: string;
}

interface RepositoryDataType {
  owner: string;
  name: string;
  deploy: string;
}

interface ProjectProviderData {
  repositories: ReposType[];
  setRepositories: (repositories: ReposType[]) => void;
  fillReposList: () => void;
}

const ProjectsContext = createContext<ProjectProviderData>(
  {} as ProjectProviderData
);

const useProjects = () => useContext(ProjectsContext);

const ProjectsProvider = ({ children }: ProjectProviderProps) => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  const fillReposList = async () => {
    const repoList: any[] = [];

    let i = 0;

    while (i < projectsData.length) {
      try {
        await axios
          .get(
            `https://api.github.com/repos/${projectsData[i].owner}/${projectsData[i].name}`
          )
          .then((response: AxiosResponse) => {
            const new_repo = {
              ...response.data,
              deploy: projectsData[i].deploy,
            };
            repoList.push(new_repo);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }

      i++;
    }
    setRepositories(repoList);
  };

  return (
    <ProjectsContext.Provider
      value={{
        repositories,
        setRepositories,
        fillReposList,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider, useProjects };
