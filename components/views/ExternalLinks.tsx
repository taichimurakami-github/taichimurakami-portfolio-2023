export function TitleSectionLinkWithIcon(props: {
  url: string;
  iconSrc: string;
  linkText: string;
  altText: string;
  wrapperClass?: string;
  imgClass?: string;
  linkTextClass?: string;
}) {
  return (
    <div className="flex">
      <a
        className={`flex-xyc p-2 mx-auto gap-[1rem] underline decoration-white underline-offset-[10px] cursor-pointer ${
          props.wrapperClass ?? ''
        }`}
        href={props.url}
      >
        <img
          className={`${props.imgClass ?? ''}`}
          src={props.iconSrc}
          alt={props.altText}
        />
        <span className={`${props.linkTextClass ?? ''}`}>{props.linkText}</span>
      </a>
    </div>
  );
}
