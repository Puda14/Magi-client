import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';
import { submitApi } from '../api/submitAPI';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await submitApi.createMember({ name, email });
            if (response.status === 200) {
                toast.success('Form submitted successfully! Check your mail.');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to submit the form.');
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1 className='h1-form'>Magi Club</h1>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="button">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Form;