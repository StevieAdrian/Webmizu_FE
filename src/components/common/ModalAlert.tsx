'use client';

import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { modalAlertStyle as sx } from '@/styles/common/modal-alert';

type ModalAlertProps = {
  variant: 'success' | 'failed' | 'info';
  open: boolean;
  message: string | React.ReactNode;
  title?: React.ReactNode;
  btnOkText?: string;
  btnCancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

const variantImageMap: Record<string, string> = {
  success: '/assets/alert/ilustrasi-cody-success.png',
  failed: '/assets/alert/ilustrasi-cody-failed.png',
  info: '/assets/alert/ilustrasi-cody-alert.png',
};

const variantColorMap: Record<string, 'primary' | 'error' | 'warning'> = {
  success: 'primary',
  failed: 'error',
  info: 'warning',
};

export default function ModalAlert({
  variant,
  open,
  message,
  title,
  btnOkText = 'OK',
  btnCancelText = 'Cancel',
  onOk,
  onCancel,
  onClose,
}: ModalAlertProps) {
  return (
    <Modal open={open} onClose={(_, reason) => { if (reason !== 'backdropClick') onClose?.(); }} sx={sx.modalAlert}>
      <Stack sx={sx.modalAlertContainer}>
        <Box
          component="img"
          src={variantImageMap[variant]}
          alt={variant}
          sx={sx.modalAlertLogo}
        />
        <Box sx={sx.modalAlertContent}>
          {title && (
            <Typography sx={sx.modalAlertTitle}>{title}</Typography>
          )}
          <Typography sx={sx.modalAlertDesc}>{message}</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          {onCancel && (
            <Button variant="contained" color="secondary" onClick={onCancel} sx={sx.modalAlertButton}>
              {btnCancelText}
            </Button>
          )}
          <Button variant="contained" color={variantColorMap[variant]} onClick={onOk} sx={sx.modalAlertButton}>
            {btnOkText}
          </Button>
        </Box>
      </Stack>
    </Modal>
  );
}
