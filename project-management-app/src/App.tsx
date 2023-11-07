import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

type ProjectState = {
  selectedProjectId: undefined | null | number;
  projects: Project[];
};

export type Project = {
  title: string;
  desc: string;
  dueDate: string;
  id: undefined | null | number;
};

function App() {
  const [projectsState, setProjectsState] = useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData: Project) {
    setProjectsState((prevProjectsState) => {
      const newProject = {
        ...projectData,
      };

      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id: undefined | null | number) {
    setProjectsState((prevProjects) => {
      return {
        ...prevProjects,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevProjectsState) => {
      const filteredProjects = prevProjectsState.projects.filter(
        (project) => project.id !== prevProjectsState.selectedProjectId
      );
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: [...filteredProjects],
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = (
      <SelectedProject
        project={selectedProject!}
        onDeleteProject={handleDeleteProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        selectedProjectId={projectsState.selectedProjectId}
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
