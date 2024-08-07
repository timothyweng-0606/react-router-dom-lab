import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetail from './components/MailboxDetail';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes = {mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox = {addMailbox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetail mailboxes = {mailboxes} />} />
      </Routes>
    </Router>
  )
};

export default App;
