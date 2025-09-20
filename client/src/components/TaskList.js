// client/src/components/TaskList.js
import axios from "axios";
import { useEffect, useState } from "react";
export default function TaskList({ projectId }){
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    axios.get(`/tasks/${projectId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then(r => setTasks(r.data));
  }, [projectId]);
  return <ul>{tasks.map(t => <li key={t.id}>{t.title} ({t.priority})</li>)}</ul>;
}