import React, { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

const UsersList = React.lazy(() => import('./UsersList'));
const Debug = React.lazy(() => import('./Debug'));

function App() {
  const [selected, setSelected] = React.useState('users');
  return (
    <div className="App">
      <div>
        <button onClick={() => setSelected('users')}>UsersList</button>
        <button onClick={() => setSelected('debug')}>Debug</button>
      </div>
      <hr />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          {selected === 'users' && <UsersList />}
          {selected === 'debug' && <Debug />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
