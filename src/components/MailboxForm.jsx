import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    boxSize: '',
    boxholder: '',
  };

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        props.addMailbox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
      };
    
    return (
        <>
      <form onSubmit={(handleSubmit)}>
      <label htmlFor="boxSize">Box Size: </label>
        <select
          id="boxSize"
          name='boxSize'
          value={formData.boxSize} 
          onChange={handleChange}
        >
          <option value="small" selected>Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>  
        </select>
        <label htmlFor="boxholder">Boxholder: </label>
        <input
          id="boxholder"
          name='boxholder'
          value={formData.boxholder}
          onChange={handleChange}
        />
        <button type="submit">Submit your box</button>
      </form>
    </>
    )
  };
  

  export default MailboxForm;

