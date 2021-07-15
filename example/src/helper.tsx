import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  console.log(currentDate);
  
  const tasks: Task[] = [
    {
      start: new Date(2021, 7, 1),
      end: new Date(2021, 7, 4),
      name: "Task 1",
      dependencies: ["Task 1", "Task 2"],
      id: "Task 0",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2021, 7, 4),
      end: new Date(2021, 7, 7),
      name: "Task 2",
      id: "Task 1",
       dependencies: ["Task 2"],
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
    {
      start: new Date(2021, 7, 8),
      end: new Date(2021, 7, 10),
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
