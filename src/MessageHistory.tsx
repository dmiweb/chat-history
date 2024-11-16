import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";


export type DataProps<T> = {
  list: T[];
}

export type MessagesProps = {
  id: string,
  from: { name: string },
  type: string,
  time: string,
  text?: string
};

const MessageHistory = ({ list = [] }: DataProps<MessagesProps>) => {

  return (
    !list.length ? null :
      <ul className="chat-messages-container">
        {list.map((message) => {
          const {from, time, text} = message;

          return (
            <li key={message.id} className="clearfix">
              {message.type === 'message' ? <Message from={from} time={time} message={text}/> : null}
              {message.type === 'response' ? <Response from={from} time={time} message={text} /> : null}
              {message.type === 'typing' ? <Typing from={from} time={time} message={text} /> : null}
            </li>
          )
        })}
      </ul>
  );
}

export default MessageHistory;