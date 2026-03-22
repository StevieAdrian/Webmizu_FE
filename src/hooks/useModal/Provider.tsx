'use client';

import { useState, useCallback } from 'react';
import { ModalContext } from './context';
import ModalAlert from '@/components/common/ModalAlert';
import type { UseModalProviderProps, ShowModalProps } from './types';

export default function UseModalProvider({ children }: UseModalProviderProps) {
  const [open, setOpen] = useState(false);
  const [modalProps, setModalProps] = useState<ShowModalProps | null>(null);

  const showModal = useCallback((props: ShowModalProps) => {
    setModalProps(props);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    modalProps?.options?.onClose?.();
    setModalProps(null);
  }, [modalProps]);

  const handleOk = useCallback(() => {
    setOpen(false);
    modalProps?.options?.onOk?.();
    setModalProps(null);
  }, [modalProps]);

  const handleCancel = useCallback(() => {
    setOpen(false);
    modalProps?.options?.onCancel?.();
    setModalProps(null);
  }, [modalProps]);

  return (
    <ModalContext.Provider value={{ showModal }}>
      {children}
      {modalProps && (
        <ModalAlert
          open={open}
          variant={modalProps.options?.variant || 'info'}
          message={modalProps.message}
          title={modalProps.title}
          btnOkText={modalProps.options?.btnOkText}
          btnCancelText={modalProps.options?.btnCancelText}
          onOk={handleOk}
          onCancel={modalProps.options?.onCancel ? handleCancel : undefined}
          onClose={handleClose}
        />
      )}
    </ModalContext.Provider>
  );
}
