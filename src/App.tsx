import React from 'react';
import { useSchema } from './hooks/useSchema';
import DynamicForm from './components/DynamicForm';

function App() {
  const { schema, error } = useSchema();

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      {schema && <DynamicForm schema={schema[0]} />}
    </div>
  );
}

export default App;
