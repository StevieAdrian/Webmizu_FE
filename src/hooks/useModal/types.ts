export type UseModalProviderContext = {
  showModal: (props: ShowModalProps) => void;
};

export type UseModalProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export type ShowModalProps = {
  message: string | React.ReactNode;
  title?: React.ReactNode;
  options?: {
    btnCancelText?: string;
    btnOkText?: string;
    variant: 'success' | 'failed' | 'info';
    onCancel?: () => void;
    onOk?: () => void;
    onClose?: () => void;
  };
};
