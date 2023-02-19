import { NextFont } from '@next/font';
import React, { useCallback, useRef } from 'react';
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
        height: props.barHeight,
      }}
      onClick={props.onHandleBarClick}
    >
      <div
        className={`absolute rounded-full bg-emerald-1 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${animations['animate-toc-index-pointer']}`}
        style={{
          width: props.pointerSize ?? '25px',
          height: props.pointerSize ?? '25px',
          top: props.pointerTop ?? '0px',
          visibility: props.pointerTop ? 'visible' : 'hidden',
        }}
        onClick={props.onHandlePointerClick}
      ></div>
    </div>
  );
}

export default function SectionToCContainer(props: {
  activeId: number;
  uniqueKey: string;
  contents: JSX.Element[];
  font: NextFont;
  tocDisplaySide: 'left' | 'right';
  onHandleClickContent: (nextActiveId: number, nowActiveId: number) => void;
  wrapperClass?: string;
  contentGap?: number;
  contentContainerClass?: string;
  contentContainerActiveClass?: string;
  barWidth?: string;
  barHeight?: string;
  pointerSize?: string;
}) {
  const indexContentSample = useRef<HTMLLIElement>(null);

  const getIndexPointerTop = useCallback(() => {
    if (!indexContentSample.current) {
      return '0px';
    }

    const indexContentHeight = indexContentSample.current
      ? indexContentSample.current.clientHeight
      : 0;

    const gap = props?.contentGap ?? 0;
    const pointerTop_px =
      indexContentHeight * props.activeId +
      indexContentHeight / 2 +
      gap * props.activeId;

    return pointerTop_px + 'px';
  }, [props.activeId, props.contentGap, indexContentSample]);

  const getBarHeight = useCallback(() => {
    if (!indexContentSample.current) {
      return undefined;
    }

    const h_gaps = (props.contents.length - 1) * (props.contentGap ?? 0);
    const h_contents =
      props.contents.length * indexContentSample.current.clientHeight;

    return h_gaps + h_contents + 'px';
  }, [props.contents, props.contentGap, indexContentSample]);

  return (
    <div
      className={`flex gap-4 ${props.wrapperClass ?? ''}`}
      style={{
        flexDirection: props.tocDisplaySide === 'left' ? 'row' : 'row-reverse',
      }}
    >
      <ul
        className={`w-full h-full grid text-white ${props.font.className}`}
        style={{
          gap: props.contentGap ?? '0',
        }}
      >
        {props.contents.map((v, i) => {
          return (
            <li
              key={`${props.uniqueKey}_content_container_#${i}`}
              ref={i === 0 ? indexContentSample : undefined}
              className={`
              relative flex items-center cursor-pointer
              ${props.contentContainerClass ?? ''}
              ${animations['animate-active-toc-about-section']}
              ${props.activeId === i ? 'text-emerald-1' : ''} 
              ${
                props.activeId === i && props.contentContainerActiveClass
                  ? props.contentContainerActiveClass
                  : ''
              }
              `}
              onClick={(e) => {
                props.onHandleClickContent(i, props.activeId);
              }}
            >
              {v}
            </li>
          );
        })}
      </ul>
      <IndexBar
        pointerTop={getIndexPointerTop()}
        barWidth={props.barWidth}
        barHeight={getBarHeight()}
        pointerSize={props.pointerSize}
      />
    </div>
  );
}
