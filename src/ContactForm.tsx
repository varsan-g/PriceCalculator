import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface ContactFormProps {
    onSubmit: (contactDetails: { name: string; email: string; phone: string; }) => void;
    onReset: () => void;
    onBack: () => void;
    total: number;
    selection: { type: string; design: string; size: string; language: string; branding: string; webdesign: string; content: string; };
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onReset, onBack, total, selection }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({ name, email, phone });
        setSubmitted(true);
        triggerConfetti();

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Phone', phone);
        formData.append('Price', total.toString());
        formData.append('Type', selection.type);
        formData.append('Design', selection.design);
        formData.append('Size', selection.size);
        formData.append('Language', selection.language);
        formData.append('Branding', selection.branding);
        formData.append('Webdesign', selection.webdesign);
        formData.append('Content', selection.content);
        formData.append('Comments', comments);

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwgZnHcqayPrXLgkC41FqixYeTv8wJrodSe9bknobSYuxHH8z8WKNyWJ-ee25lqMh_lCA/exec', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                console.error('Failed to post data: ', await response.text());
            }
        } catch (error) {
            console.error('Error posting data: ', error);
        }
    };

    const triggerConfetti = () => {
        confetti({
            particleCount: 200,
            spread: 160,
            startVelocity: 70,
            origin: { y: 0.6 }
        });
    };

    if (submitted) {
        return (
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Dit prisestimat</h1>
                <p className="text-xl font-light opacity-70 mb-8">Prisen er beregnet ud fra dine valg eksl. moms:</p>
                <div className="bg-green-900 py-7 px-4 md:px-24 inline-block rounded-2xl mb-8 border-4 border-green-600">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">{`DKK ${total}.-`}</p>
                </div>
                <p className="text-lg font-light opacity-70 mb-8">
                    Du vil indenfor kort tid blive kontaktet angående dit tilbud, <br />
                    hvor du vil have mulighed for at tage næste skridt.
                </p>
                <button
                    className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-16 rounded-xl focus:outline-none focus:shadow-outline"
                    onClick={onReset}
                >
                    Start forfra
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-white text-m font-bold mb-4 text-left" htmlFor="name">
                            Navn <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                            id="name"
                            type="text"
                            placeholder="Jens Jensen"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-white text-m font-bold mb-4 text-left" htmlFor="email">
                            E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                            id="email"
                            type="email"
                            placeholder="mail@dinmail.dk"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-white text-m font-bold mb-4 text-left" htmlFor="phone">
                            Telefonnummer
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                            id="phone"
                            type="tel"
                            placeholder="+45 30 14 42 40"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-white text-m font-bold mb-4 text-left" htmlFor="comments">
                            Er der andet du gerne vil fortælle os omkring projektet?
                        </label>
                        <textarea
                            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                            id="comments"
                            placeholder="Andre detaljer omkring projektet..."
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            style={{ height: '125px' }}
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4 mt-4 px-3">
                    <button
                        className="hover-gradient font-bold py-2 px-4 rounded-xl flex items-center justify-center"
                        onClick={onBack}
                        type="button"
                        style={{ height: '56px' }}
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/bvcynjpl.json"
                            trigger="hover"
                            colors="primary:#ffffff,secondary:#ffffff"
                            stroke="bold"
                            style={{ width: '40px', height: '35px' }}
                        ></lord-icon>
                    </button>
                    <button
                        className="bg-blue-700 hover:bg-blue-600 text-white font-bold px-12 rounded-xl focus:outline-none focus:shadow-outline"
                        type="submit"
                        style={{ height: '56px' }}
                    >
                        BEREGN PRISEN
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
