import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
      <>
      <h2>Mail Box List</h2>
      {props.mailboxes.length === 0 ? (
        <p>Mail Box is empty</p>
      ) : (
        <ul>
          {props.mailboxes.map((mailbox, index) => (
            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>
                <p>Mail Box {index + 1}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
    )
  };
  
  export default MailboxList;