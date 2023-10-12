import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Fade } from 'react-awesome-reveal';

import { defaultFormData, defaultFormErrors } from "../../utils/variables";

type Props = {
  onFormSent: (value: boolean) => void;
};

export const Form: React.FC<Props> = ({ onFormSent }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [hasFormError, setHasFormError] = useState(defaultFormErrors);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const { name, email, message } = formData;
    
    if (!name.trim()) {
      console.log(hasFormError, formData)
      setHasFormError(prev => ({ ...prev, name: true }));

      return;
    }

    if (!email.trim()) {
      setHasFormError(prev => ({ ...prev, email: true }));

      return;
    }

    if (!message.trim()) {
      setHasFormError(prev => ({ ...prev, message: true }));

      return;
    }

    // send data

    setFormData(defaultFormData);
    setHasFormError(defaultFormErrors);
    onFormSent(true);
  }

  const handleFormDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const hasError = hasFormError.name && (!formData.name || !formData.email || !formData.message);

  return (
    <form id="form" className='contacts__form form' onSubmit={handleFormSubmit}>
      <Fade direction='left' triggerOnce>
        <label className='form__name-field'>
          <input 
            className='form__name-input'
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormDataChange}
          />
        </label>

        <label className='form__email-field'>
          <input 
            className='form__email-input'
            type="email"
            name="email"
            placeholder='E-mail'
            value={formData.email}
            onChange={handleFormDataChange}
          />
        </label>

        <label className='form__message-field'>
          <textarea 
            className='form__message-input'
            name="message"
            placeholder='Message'
            value={formData.message}
            onChange={handleFormDataChange}
          />
        </label>
          {hasError && (
            <div className="form__error">
              Please fill out all the field
            </div>
          )}

        <div className="form__button-field">
          <button className="form__button-title" type='submit'>
              <span className='form__button-text'>
                <FormattedMessage id="contacts.send" defaultMessage="Send" />
              </span>
              <svg 
                className='form__button-arrow' 
                width="13px" 
                height="10px" 
                viewBox="0 0 13 10"
              >
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
        </div>
      </Fade>
    </form>
  );
};
