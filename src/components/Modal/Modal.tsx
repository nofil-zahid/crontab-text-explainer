// Modal.tsx
import React, { useState } from 'react';
import { modalStyles } from './Modal.css'; // Import the styles

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (!isOpen) return null;

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.content}>
                <button
                    style={isHovered ? { ...modalStyles.closeButton, ...modalStyles.closeButtonHovered } : modalStyles.closeButton}
                    onClick={onClose}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
