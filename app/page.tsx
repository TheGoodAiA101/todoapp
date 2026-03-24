
"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Page() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTask, setNewTask] = useState("");

  async function load() {
    const { data } = await supabase.from("Tasks").select("*").order("id");
    setTasks(data || []);
  }

  async function add() {
    if (!newTask) return;
    await supabase.from("Tasks").insert({ title: newTask });
    setNewTask("");
    load();
  }

  async function remove(id: number) {
    await supabase.from("Tasks").delete().eq("id", id);
    load();
  }

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h1>Todo List</h1>

      <input value={newTask} onChange={e=>setNewTask(e.target.value)} />
      <button onClick={add}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} 
            <button onClick={() => remove(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
