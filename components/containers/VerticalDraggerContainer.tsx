import useDragger from '@/hooks/useDragger';
import React from 'react';

const range = (start: number, end: number) =>
  [...Array(end + 1).keys()].slice(start);

export default function VerticalDraggerContainer(props: {
  direction: 'vertical' | 'horizontal';
  activeSectionLength: number;
  activeSectionId: number;
  wrapperLength_px?: string;
  wrapperThickness_px?: string;
  draggerSize_px?: string;
}) {
  const { wrapperRef, draggerRef, draggerStyles, draggerProgressRate } =
    useDragger<HTMLDivElement, HTMLDivElement>(props.direction, '30px');

  const wrapperStyles =
    props.direction === 'horizontal'
      ? {
          width: props.wrapperLength_px ?? '100%',
          height: props.wrapperThickness_px ?? '15px',
        }
      : {
          height: props.wrapperLength_px ?? '100%',
          width: props.wrapperThickness_px ?? '15px',
        };

  return (
    <div
      className="relative bg-white cursor-pointer"
      style={wrapperStyles}
      ref={wrapperRef}
    >
      <div
        className="absolute w-full h-full flex"
        style={{
          flexDirection: props.direction === 'horizontal' ? 'row' : 'column',
        }}
      >
        {range(0, props.activeSectionLength - 1).map((i) => {
          const activeProgressRate_min = i / props.activeSectionLength;
          const activeProgressRate_max = (i + 1) / props.activeSectionLength;

          return (
            <div
              key={`draggerActiveArea_${i}`}
              className="bg-salmon-1"
              style={{
                width:
                  props.direction === 'horizontal'
                    ? 100 / props.activeSectionLength + '%'
                    : '100%',
                height:
                  props.direction === 'vertical'
                    ? 100 / props.activeSectionLength + '%'
                    : '100%',
                opacity:
                  activeProgressRate_min < draggerProgressRate &&
                  draggerProgressRate < activeProgressRate_max
                    ? 1
                    : 0,
              }}
            ></div>
          );
        })}
      </div>

      <div
        className={`absolute rounded-full bg-emerald-1 -translate-x-1/2 -translate-y-1/2`}
        style={draggerStyles}
        ref={draggerRef}
      ></div>
    </div>
  );
}
