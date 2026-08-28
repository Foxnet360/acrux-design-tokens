import React from 'react';

export interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  acceptButtonText?: string;
  projectName?: string;
  children?: React.ReactNode;
  className?: string;
}

declare const PrivacyModal: React.FC<PrivacyModalProps>;
export default PrivacyModal;
