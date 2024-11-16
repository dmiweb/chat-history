type MessageProps = {
  from: {name: string},
  time: string,
  message?: string 
}

const Response = ({from, time, message}: MessageProps) => {

  return (
    <>
      <div className="message-data align-right data-align-rigth">
        <span className="message-data-time">{time}</span>
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{message}</div>
    </>
  );
}

export default Response;
