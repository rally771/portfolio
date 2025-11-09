import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    const FormData = ({ onSubmit, formData, onChange }) => {
        return <>
            <form onSubmit={onSubmit} className="mt-8 max-w-lg">
            <div className="mb-4">
                <label className="block text-gray-700 font-poppins font-semibold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                    required
                />
                <label className="block text-gray-700 font-poppins font-semibold mb-2" htmlFor="name">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                    required
                    />
                <label className="block text-gray-700 font-poppins font-semibold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                    rows="5"
                    required
                ></textarea>
                <input type="submit" value="Send Message" className="mt-4 bg-yellow text-white font-poppins font-semibold px-4 py-2 rounded-md hover:bg-yellow-600 cursor-pointer" />
            </div>
            </form>
        </>
    }

    return (
        <section className='contact'>
        <div className="max-w-7xl mx-auto mt-20 items-center">
            <h3 className='text-yellow font-poppins font-bold text-5xl'>Contact Us</h3>
            <FormData onSubmit={handleSubmit} formData={formData} onChange={handleChange} />
        </div>
        </section>
    );
};

export default Contact;