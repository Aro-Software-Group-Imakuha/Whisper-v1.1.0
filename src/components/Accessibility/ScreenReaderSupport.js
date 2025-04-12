import React, { useEffect } from 'react';
import { enableScreenReaderSupport } from '../../utils/accessibility';

const ScreenReaderSupport = () => {
    useEffect(() => {
        enableScreenReaderSupport();
    }, []);

    return (
        <div className="screen-reader-support">
            <h2>Screen Reader Support</h2>
            <p>This platform supports screen readers for better accessibility.</p>
        </div>
    );
};

export default ScreenReaderSupport;
