import Message from './components/Message';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSendBotMessage, setIsSendBotMessage] = useState(false);

  const addMessage = (e) => {
    e.preventDefault();
    setMessageList([...messageList, {author: inputAuthor, message: inputMessage, id: Date.now()}]);
    setInputAuthor('');
    setInputMessage('');
    setIsTyping(false);
    setIsSendBotMessage(false);
  }

  const sendBotMessage = useCallback((author) => {
    setMessageList([...messageList, {
      author: 'BOT', message: 'Hello, ' + author, id: Date.now()
    }]);
  }, [messageList])

  useEffect(() => {
    if (isTyping) {
      return;
    }

    if (messageList.length > 0 && !isSendBotMessage) {
      setIsSendBotMessage(true);
      const author = messageList[messageList.length-1].author;
      setTimeout(() => {
        sendBotMessage(author);
      }, 1000);
    }

  }, [messageList, isTyping, isSendBotMessage, sendBotMessage]);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {messageList.map(({ id, message, author }) => (
            <Message key={id} message={message} author={author} />
        ))}
      </div>
      <div>
        <input placeholder="author" value={inputAuthor} onChange={e => {
          setIsTyping(true);
          setInputAuthor(e.target.value)
        }} />
        <input placeholder="message" value={inputMessage} onChange={e => {
          setIsTyping(true);
          setInputMessage(e.target.value)
        }} />
        <button onClick={addMessage}>sdsd</button>
      </div>
    </>
  );
}

export default App;
