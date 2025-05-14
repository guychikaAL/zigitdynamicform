import React from 'react';
import { ModalProps } from '../types/formTypes';

import '../styles/Modal.scss';


export default function Modal({ onClose, children }: ModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}