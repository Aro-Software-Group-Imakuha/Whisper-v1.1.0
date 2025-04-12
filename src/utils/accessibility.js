/**
 * Accessibility utilities for Whisper platform
 */

/**
 * Enable screen reader support
 */
function enableScreenReaderSupport() {
    document.body.setAttribute('aria-live', 'polite');
}

/**
 * Enable keyboard navigation support
 */
function enableKeyboardNavigationSupport() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

/**
 * Adjust contrast
 * @param {string} mode - 'light' or 'dark'
 */
function adjustContrast(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

export {
    enableScreenReaderSupport,
    enableKeyboardNavigationSupport,
    adjustContrast
};
