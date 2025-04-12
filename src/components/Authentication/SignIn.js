import React, { useState } from 'react';
import { validateUser } from '../../utils/security';

const SignIn = () => {
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        if (validateUser(displayName, password)) {
            alert('Sign in successful!');
        } else {
            setError('Invalid display name or password');
        }
    };

    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
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
                {error && <p className="error">{error}</p>}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
