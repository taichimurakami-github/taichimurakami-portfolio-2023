import useDragger from '@/hooks/useDragger';
import range from '@/utils/range';
import { Silkscreen } from '@next/font/google';
import React from 'react';
import extension from '@/styles/extension.module.scss';

const silkscreen_regular = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function DraggerAreaContainer(props: {
  direction: 'vertical' | 'horizontal';
  contents: string[];
  activeSectionId: number;
  onHandleDrag?: (progressRate: number) => void;
  draggerProgress?: number;
  wrapperLength_px?: string;
  wrapperThickness_px?: string;
  draggerSize_px?: string;
}) {
  const {
    wrapperRef,
    draggerRef,
    draggerStyles,
    draggerProgressRate,
    isDragging,
  } = useDragger<HTMLDivElement, HTMLDivElement>(
    props.direction,
    '30px',
    props.onHandleDrag
  );
  const horizontal = props.direction === 'horizontal';
  const useExternalDraggerProgress =
    props.draggerProgress !== undefined && !isDragging;
  const _draggerProgressRate = useExternalDraggerProgress
    ? (props.draggerProgress as number)
    : draggerProgressRate;

  const _draggerStyles = {
    width: draggerStyles.width,
    height: draggerStyles.height,
    left: horizontal ? _draggerProgressRate * 100 + '%' : draggerStyles.left,
    top: !horizontal ? _draggerProgressRate * 100 + '%' : draggerStyles.top,
  };

  const wrapperStyles = horizontal
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
        {range(0, props.contents.length - 1).map((i) => {
          const activeProgressRate_min = i / props.contents.length;
          const activeProgressRate_max = (i + 1) / props.contents.length;

          return (
            <div
              key={`draggerActiveArea_${i}`}
              className="bg-salmon-1"
              style={{
                width: horizontal ? 100 / props.contents.length + '%' : '100%',
                height: !horizontal
                  ? 100 / props.contents.length + '%'
                  : '100%',
                opacity:
                  activeProgressRate_min < _draggerProgressRate &&
                  _draggerProgressRate < activeProgressRate_max
                    ? 1
                    : 0,
                transition: 'all 0.5s ease',
              }}
            ></div>
          );
        })}
      </div>

      <div
        className={`
          absolute right-0 translate-x-[-120%] -translate-y-1/2 w-[150px]
          flex
          text-white text-3xl text-center
          ${silkscreen_regular.className}
        `}
        style={{
          top: _draggerStyles.top,
          left: _draggerStyles.left,
        }}
      >
        {range(0, props.contents.length - 1).map((i) => {
          const activeProgressRate_min = i / props.contents.length;
          const activeProgressRate_max = (i + 1) / props.contents.length;

          return (
            <p
              key=""
              className="relative p-2 select-none bg-emerald-1 rounded-md"
              style={{
                display:
                  activeProgressRate_min < _draggerProgressRate &&
                  _draggerProgressRate < activeProgressRate_max
                    ? 'block'
                    : 'none',
              }}
            >
              {props.contents[i]}
              <span className={extension['dragger-area-asset-triangle']}></span>
            </p>
          );
        })}
      </div>

      <div
        className={`absolute rounded-full bg-emerald-1 -translate-x-1/2 -translate-y-1/2`}
        style={_draggerStyles}
        ref={draggerRef}
      ></div>
    </div>
  );
}
