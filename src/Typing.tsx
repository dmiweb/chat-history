type MessageProps = {
  from: {name: string},
  time: string,
  message?: string 
}

const Typing = ({from, time, message}: MessageProps) => {

  return (
    <>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div>
        <i className="fa fa-circle online"></i>
        <i className="fa fa-circle online" style={{ opacity: "0.8" }}></i>
        <i className="fa fa-circle online" style={{ opacity: "0.6" }}></i>
        {message}
      </div>
    </>
  );
}

export default Typing;