import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { db } from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Monetization = () => {
    const user = useSelector(selectUser);
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleDonate = async () => {
        if (amount && message) {
            await db.collection('donations').add({
                user: user.uid,
                amount: parseFloat(amount),
                message: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            setSuccess(true);
            setAmount('');
            setMessage('');
        }
    };

    return (
        <div className="monetization">
            <h2>Support the Creator</h2>
            {success && <p>Thank you for your support!</p>}
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter a message"
            ></textarea>
            <button onClick={handleDonate}>Donate</button>
        </div>
    );
};

export default Monetization;
