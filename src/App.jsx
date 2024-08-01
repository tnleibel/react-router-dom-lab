import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newBoxData])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
        <Route path="*" element={<h2>Nothing Here!</h2>} />
      </Routes>
    </>
  )
};

export default App;
