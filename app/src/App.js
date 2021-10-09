import Message from './components/Message';

const myMessageText = 'My message';

function App() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Message
          text={ myMessageText }
        />
      </div>
    </>
  );
}

export default App;
