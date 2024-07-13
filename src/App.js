import React, { useState } from 'react';
import './App.css';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = () => {
        const validUsername = 'user';
        const validPassword = 'password';

        if (username === validUsername && password === validPassword) {
            alert('Login successful!');
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2>Login</h2>
                {error && <div className="error">Invalid credentials, please try again.</div>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleLogin} className="login-button">Login</button>
            </div>
        </div>
    );
}

export default App;
