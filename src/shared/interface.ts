export interface IPATHS {
  main: string;
  notFound: string;
}

export interface ILayout {
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  useModalOpen: () => void;
}

export interface IHeader {
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  useModalOpen: () => void;
}

export interface IModal {
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  useModalOpen: () => void;
}

export interface IPrimaryButton {
  description: string;
  className: string;
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