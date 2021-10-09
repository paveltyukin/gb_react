function Message(props) {
  return (
    <>
      <div>
        <span style={{ backgroundColor: 'gray' }}>{ props.author }</span>
        <br/>
        <span style={{ backgroundColor: 'red' }}>{ props.message }</span>
      </div>
      <br/>
    </>
  );
}

export default Message;
