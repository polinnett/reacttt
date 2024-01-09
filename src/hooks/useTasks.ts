import { useState } from "react";
import { IMyForm } from "../Interfaces/IMyForm";

export const useTasks = () => {
    const [tasks, setTasks] = useState<IMyForm[]>([]);
    return ({tasks, setTasks})
}