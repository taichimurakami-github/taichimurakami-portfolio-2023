import extensions from '@/styles/extension.module.scss';

const CloseIcon = (props: {
  content?: JSX.Element;
  onHandleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => (
  <div
    className={`flex justify-between ${extensions['works-modal-close-wrapper']} mb-[10px] z-10`}
  >
    <div>{props.content}</div>
    <div
      className={`cursor-pointer ${extensions['works-modal-close-container']}`}
      onClick={props.onHandleClick}
    >
      <span></span>
      <span></span>
    </div>
  </div>
);

export default CloseIcon;
