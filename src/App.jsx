
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
const [tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem('tasks')
    const parsedTasks = savedTasks ? JSON.parse(savedTasks) : []

    return Array.isArray(parsedTasks) ? parsedTasks : []
  } catch {
    return []
  }
})

  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editingTitle, setEditingTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  function handleAddTask(event) {
    event.preventDefault()

    if (newTask.trim() === '') return

    const task = {
      id: crypto.randomUUID(),
      title: newTask.trim()
    }

    setTasks([...tasks, task])
    setNewTask('')
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleEditTask(task) {
    setEditingId(task.id)
    setEditingTitle(task.title)
  }

  function handleUpdateTask(id) {
    if (editingTitle.trim() === '') return

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: editingTitle.trim() }
          : task
      )
    )

    setEditingId(null)
    setEditingTitle('')
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <p>Görev Yönetim Uygulaması</p>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Yeni görev giriniz..."
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>

      <h2>Görevler ({tasks.length})</h2>

      {tasks.length === 0 ? (
        <p>Henüz görev eklenmedi.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {editingId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(event) =>
                      setEditingTitle(event.target.value)
                    }
                  />
                  <button
                    onClick={() => handleUpdateTask(task.id)}
                  >
                    Kaydet
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setEditingId(null)}
                  >
                    İptal
                  </button>
                </>
              ) : (
                <>
                  <span>{task.title}</span>
                  <button
                    onClick={() => handleEditTask(task)}
                  >
                    Düzenle
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Sil
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
