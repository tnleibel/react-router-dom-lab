import { Link } from 'react-router-dom'

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailboxes</h2>
        <ul>
            {props.mailboxes.map((mailbox) => (
                <li key={mailbox.boxholder} className="mail-box">
                    <Link to={`/mailboxes/${mailbox._id}`}>
                        Mailbox {mailbox._id}
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default MailboxList