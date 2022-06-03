import { ChatEngine } from 'react-chat-engine';

//components
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

//css
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height='100vh'
      projectID='6d354254-3e2a-43af-93ed-790a79c567df'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
