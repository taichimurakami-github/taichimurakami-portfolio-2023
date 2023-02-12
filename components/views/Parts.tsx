export function ArrowDownAsset(props: {
  colPartWidth: string;
  rowPartWidth: string;
  barWidth: string;
}) {
  return (
    <div
      className="relative bg-white"
      style={{
        width: props.barWidth,
        height: props.colPartWidth,
      }}
    >
      <div
        className="absolute bottom-[10px] left-0 bg-white -rotate-45"
        style={{
          width: props.rowPartWidth,
          height: props.barWidth,
        }}
      ></div>
    </div>
  );
}
