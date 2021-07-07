import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  console.log(currentDate);
  
  const tasks: Task[] = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 4),
      name: "Task 1",
      id: "Task 0",
      dependencies: ["Task 1"],
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2020, 2, 5),
      end: new Date(2020, 2, 7),
      name: "Task 2",
      id: "Task 1",
      dependencies: ["Task 2"],
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: "Task 3",
      id: "Task 2",
      
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
