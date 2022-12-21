import React, { useState } from 'react'
import { Content, Header } from './components';
import { ProjectsProvider, SelectedProjectProvider } from './context';

const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
        data-testid="application"
        className={darkMode ? 'darkmode' : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Content/>
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
