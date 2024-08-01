import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))

    return (
        <>
            <h2>Mailbox {singleMailbox._id}</h2>
            <dl>
                <dt>Boxholder:</dt>
                <dd>{singleMailbox.boxholder}</dd>
                <dt>Size:</dt>
                <dd>{singleMailbox.size}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails