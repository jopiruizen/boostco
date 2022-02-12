import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import PagesRoutes from './routes';
import Notes from '../pages/notes';

function App() {
  const NotesEl = Notes as React.ElementType;
  return (
      <BrowserRouter>
        <Routes>
            <Route path={PagesRoutes.HOME} element={<NotesEl />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
