export function ArrowAsset(props: {
  colPartWidth: string;
  rowPartWidth: string;
  rotate_deg: number;
  barWidth: string;
}) {
  return (
    <div
      className="relative bg-white"
      style={{
        width: props.colPartWidth,
        height: props.barWidth,
        rotate: props.rotate_deg + 'deg',
      }}
    >
      <div
        className="absolute bottom-[10px] right-0 bg-white rotate-45"
        style={{
          width: props.rowPartWidth,
          height: props.barWidth,
        }}
      ></div>
    </div>
  );
}
