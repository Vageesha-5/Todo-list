import React, { useState } from 'react';
import { useTask } from './Todocontext';

const Tasks = () => {
  const {tasks, setTasks} = useTask();
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleDelete = (index) => {
    const newValue = tasks.filter((_, i) => i !== index);
    setTasks(newValue); 
    console.log(`Deleted task at index ${index}`);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  const handleSave = (index) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? editValue : task));
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditValue('');
    console.log(`Edited task at index ${index}`);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input 
                  type="text" 
                  value={editValue} 
                  onChange={(e) => setEditValue(e.target.value)} 
                />
                <button onClick={() => handleSave(index)}>💾</button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <button onClick={() => handleEdit(index)}>🖊️</button>
                <button onClick={() => handleDelete(index)}>✔️</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
