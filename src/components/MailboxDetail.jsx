import { useParams } from 'react-router-dom';


const MailboxDetail = (props) => {
    
    const {mailboxId} = useParams()
    const findMail = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    return(
      <>
        {findMail ? (
          <>
          <h2>Mail Box Details</h2>
          <p>Boxholder: {findMail.boxholder}</p>
          <p>Box Size: {findMail.boxSize}</p>
          </>
          )
          : 
        (<p>Mailbox Not Found</p>)
        }
      </>
    )
  };
  
export default MailboxDetail;