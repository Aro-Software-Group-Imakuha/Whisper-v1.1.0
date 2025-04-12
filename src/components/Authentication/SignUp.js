import React, { useState } from 'react';
import { storeUserData } from '../../utils/security';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        storeUserData(displayName, password);
        alert('Registration successful!');
    };

    return (
        <div className="sign-up">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor="display-name">Display Name:</label>
                <input
                    type="text"
                    id="display-name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
