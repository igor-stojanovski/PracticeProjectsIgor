import NewTask from "./NewTask";

type Props = {
  onAddTask: (task: string) => void;
  onDeleteTask: (taskToDelete: string) => void;
  tasks: string[];
};

export default function Tasks({ onAddTask, onDeleteTask, tasks }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task} className="flex w-64 gap-4 justify-between">
                <p>{task}</p>
                <button
                  onClick={() => onDeleteTask(task)}
                  className="hover:text-red-600"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
