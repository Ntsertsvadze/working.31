import { useEffect } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './hook/redux';
import './scss/main.scss';
import { fetchUsers } from '../src/store/users/actions';
import { decrement, increment } from './store/users/user.slice';

function App() {
  const { error, isLoading, users, count } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Fetching users...", fetchUsers);
    dispatch(fetchUsers()); 
  }, [dispatch]);
 
  
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Hello there</h1>
      {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}

      {users.map(({ id, email }) => (
        <div key={id}>
          <h4>{email}</h4>
        </div>
      ))}

      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;

