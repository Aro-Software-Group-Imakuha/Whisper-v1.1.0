import React, { useEffect } from 'react';
import { enableKeyboardNavigationSupport } from '../../utils/accessibility';

const KeyboardSupport = () => {
    useEffect(() => {
        enableKeyboardNavigationSupport();
    }, []);

    return (
        <div className="keyboard-support">
            <h2>Keyboard Support</h2>
            <p>This platform supports keyboard navigation for better accessibility.</p>
        </div>
    );
};

export default KeyboardSupport;
