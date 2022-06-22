import { MouseEvent } from 'react';

export interface IPATHS {
  main: string;
  notFound: string;
}

export interface ILayout {
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  useModalOpen: () => void;
  isToastOpen: boolean;
  handleIsToastOpen: (data: boolean) => void;
}

export interface IHeader {
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  useModalOpen: () => void;
  isToastOpen: boolean;
  handleIsToastOpen: (data: boolean) => void;
}

export interface IMain {
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  useModalOpen: () => void;
  isToastOpen: boolean;
  handleIsToastOpen: (data: boolean) => void;
}

export interface IModal {
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  useModalOpen: () => void;
  handleIsToastOpen: (data: boolean) => void;
}

export interface IToast {
  isToastOpen: boolean;
  handleIsToastOpen: (data: boolean) => void;
}

export interface IPrimaryButton {
  description: string;
  className: string;
  arrow: string;
  type?: 'submit';
  onClick?: (() => void) | ((event: MouseEvent<HTMLButtonElement>) => void);
  disabled?: boolean;
}

export interface IImage {
  src: string;
  srcSmall: string;
  alt: string;
  className: string;
  Image?: {
    prototype: HTMLImageElement;
    new (): HTMLImageElement;
  };
}
