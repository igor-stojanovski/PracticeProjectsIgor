import { Project } from "../App";
import Tasks from "./Tasks";

type Props = {
  onDeleteProject: () => void;
  project: Project;
  onAddTask: (task: string) => void;
  onDeleteTask: (taskToDelete: string) => void;
  tasks: string[];
};

export default function SelectedProject({
  project: { desc, dueDate, title },
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}: Props) {
  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{desc}</p>
      </header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
}
