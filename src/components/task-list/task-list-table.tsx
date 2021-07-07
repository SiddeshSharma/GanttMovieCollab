import React from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";

export const TaskListTableDefault: React.FC<{
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  themeBackGroundColor: string;
  themeTextColor: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
}> = ({
  rowHeight,
  rowWidth,
  tasks,
  fontFamily,
  fontSize,
  locale,
  themeBackGroundColor,
  themeTextColor,
}) => {
  const dateTimeOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.map(t => {
        return (
          <div
            className={styles.taskListTableRow}
            style={{ height: rowHeight, backgroundColor: themeBackGroundColor }}
            key={`${t.id}row`}
          >
            <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
                color: themeTextColor,
              }}
              title={t.name}
            >
              &nbsp;{t.name}
            </div>
            <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
                color: themeTextColor,
              }}
            >
              &nbsp;{t.start.toLocaleDateString(locale, dateTimeOptions)}
            </div>
            <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
                color: themeTextColor,
              }}
            >
              &nbsp;
              {t.end.toLocaleDateString(locale, dateTimeOptions)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
