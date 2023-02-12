import { NextFont } from '@next/font';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import animations from '@/styles/animations.module.scss';

function IndexBar(props: {
  pointerTop: string | null;
  barWidth?: string;
  barHeight?: string;
  pointerSize?: string;
  onHandleBarClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onHandlePointerClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}) {
  return (
    <div
      className="relative bg-white"
      style={{
        width: props.barWidth ?? '5px',
        height: props.barHeight ?? '150px',
      }}
      onClick={props.onHandleBarClick}
    >
      <div
        className={`absolute rounded-full bg-emerald-1 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${animations['animate-toc-index-pointer']}`}
        style={{
          width: props.pointerSize ?? '20px',
          height: props.pointerSize ?? '20px',
          top: props.pointerTop ?? '0px',
          visibility: props.pointerTop ? 'visible' : 'hidden',
        }}
        onClick={props.onHandlePointerClick}
      ></div>
    </div>
  );
}

export default function AboutSectionToC(props: {
  contents: JSX.Element[];
  font: NextFont;
  wrapperClass?: string;
  indexContentClass?: string;
}) {
  const [activeId, setActiveId] = useState<null | number>(null);
  const indexContentSample = useRef<HTMLLIElement>(null);

  const getIndexPointerTop = () => {
    if (indexContentSample.current && activeId !== null) {
      // const indexContentTop = indexContentSample.current.clientTop;
      const indexContentHeight = indexContentSample.current
        ? indexContentSample.current.clientHeight
        : 0;

      const pointerTop_px =
        indexContentHeight * activeId + indexContentHeight / 2;
      return pointerTop_px + 'px';
    }

    return '0px';
  };

  useEffect(() => {
    if (indexContentSample.current) {
      setActiveId(0);
    }
  }, []);

  return (
    <div className={`flex gap-4 ${props.wrapperClass ?? ''}`}>
      <IndexBar pointerTop={getIndexPointerTop()} />
      <ul className={`text-white ${props.font.className}`}>
        {props.contents.map((v, i) => {
          return (
            <li
              key={`about_section_toc_${i}`}
              ref={i === 0 ? indexContentSample : undefined}
              className={`
              flex items-center cursor-pointer
              ${activeId === i ? 'text-emerald-1' : ''} 
              ${animations['animate-active-toc-about-section']}
              ${props.indexContentClass ?? ''}
              `}
              onClick={(e) => {
                setActiveId(i);
              }}
            >
              {v}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
