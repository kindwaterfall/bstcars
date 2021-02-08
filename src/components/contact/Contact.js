import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        title: '',
        message: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleFormData = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <>
            <div className="contact">
                <h2 className="contact-title">Допоможемо підібрати <span className="gold">Ваше нове авто</span></h2>
                <span className="contact-text">заповніть форму і ми вам передзвонимо</span>
                <form className="contact-form">
                    <div>
                        <label>
                            <input type="text" name="name" required placeholder="Ваше ім'я (обов'язково)" value={formData.name} onChange={handleChange}  />
                        </label>
                        <label>
                            <input type="text" name="email" required placeholder="EMAIL (обов'язково)" value={formData.email} onChange={handleChange} />
                        </label>
                        <label>
                            <input type="text" name="phone" required placeholder="Ваш номер телефону (обов'язково)" value={formData.phone} onChange={handleChange} />
                        </label>
                        <label>
                            <input type="text" name="title" placeholder="Заголовок запиту" value={formData.title} onChange={handleChange} />
                        </label>
                    </div>
                    <label>
                        <textarea type="text" name="message" placeholder="Текст повідомлення" value={formData.message} onChange={handleChange} />
                    </label>
                    <button className="contact-submit gold-button" onClick={(event) => handleFormData(event)}>Надіслати повідомлення</button>
                </form>
            </div>
        </>
    )
}

export default Contact;