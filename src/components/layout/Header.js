import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { AddTask } from '../AddTask'

const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className='header' data-testid='header'>
      <nav>
        <div className="logo">
          {/* <img src="images/logo.png" alt="TodoList"/> */}
        </div>
        <div className="settings">
          <ul>
            <li 
            data-testid="quick-add-task-action" 
            className='settings__add'
            >
              <button
              aria-label='Quick add task'
              type="button"
              onClick={() => {
                setShowQuickAddTask(true)
                setShouldShowMain(true)
              }}
              onKeyDown={() => {
                setShowQuickAddTask(true)
                setShouldShowMain(true)
              }}
              >
                +
              </button>
            </li>
            <li 
            aria-label='Darkmode on/off'
            data-testid="dark-mode-action" 
            className='settings__dark-mode'
            >
              <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              onKeyDown={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice/>
              </button>
            </li>  
          </ul>
        </div>
      </nav>
      <AddTask 
      showAddTaskMain={false}
      shouldShowMain={shouldShowMain}
      showQuickAddTask={showQuickAddTask}
      setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  )
}

export default Header;