export interface IPATHS {
  main: string;
  notFound: string;
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

export interface IModal {
  useModalOpen: () => void;
  isModalOpen: boolean;
  handleIsModalOpen: (data: boolean) => void;
  language: string;
}

export interface IButtonNavigation {
  onClick: () => void;
  className: string;
}
