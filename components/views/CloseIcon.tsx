import extensions from '@/styles/extension.module.scss';

const CloseIcon = (props: {
  content?: JSX.Element;
  onHandleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => (
  <div
    className={`bg-dark-gray-2 text-white flex justify-between ${extensions['works-modal-close-wrapper']} z-10`}
  >
    <div>{props.content}</div>
    <div
      className={`bg-white cursor-pointer ${extensions['works-modal-close-container']}`}
      onClick={props.onHandleClick}
    >
      <span></span>
      <span></span>
    </div>
  </div>
);

export default CloseIcon;
