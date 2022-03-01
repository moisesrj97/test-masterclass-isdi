import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import List from './components/List/List';
import { useSelector } from 'react-redux';

function App() {
  const userId = useSelector((state) => state.userInfo.id);
  return (
    <div>
      <Auth />
      {userId !== '' && (
        <>
          <Form />
          <List />
        </>
      )}
    </div>
  );
}

export default App;
