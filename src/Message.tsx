type MessageProps = {
  from: {name: string},
  time: string,
  message?: string 
}

const Message = ({from, time, message}: MessageProps) => {

  return (
    <>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{message}</div>
    </>
  );
}

export default Message;