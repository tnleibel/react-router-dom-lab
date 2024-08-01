import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState= {
    boxholder: '',
    size: ''
}

const MailboxForm = (props) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    return (
        <>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Boxholder Name: </label>
                <input type="text" id="boxholder" name="boxholder" value={formData.boxholder} onChange={handleChange} />

                <label htmlFor="size">Size: </label>
                <select id="size" name="size" onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <button type="submit">Submit Mailbox</button>
            </form>
        </>
    )
}

export default MailboxForm