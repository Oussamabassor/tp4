import React, { useState } from 'react';
import './App.css';

function UserProfile() {
    // Initialize state for user information and theme color
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [themeColor, setThemeColor] = useState('#4CAF50'); // Default color

    return (
        <div className="user-profile" style={{ backgroundColor: themeColor }}>
            <h2>User Profile</h2>
            
            <div className="profile-info">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Theme Color:</strong> <span style={{ color: themeColor }}>{themeColor}</span></p>
            </div>
            
            <form className="profile-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Theme Color:</label>
                    <input
                        type="color"
                        value={themeColor}
                        onChange={(e) => setThemeColor(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default UserProfile;
