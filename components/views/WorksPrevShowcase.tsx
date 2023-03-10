import React, { PropsWithChildren } from 'react';

export default function WorksPrevShowcase(props: PropsWithChildren) {
  return (
    <div className="relative flex-xyc flex-col gap-[100px] w-full h-screen text-6xl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden">
        <div className="gap-2 flex-xyc flex-col rotate-45 w-full h-full">
          <img
            className="w-[40%] min-w-[500px] object-contain translate-x-[100px]"
            src="./works_attendance-thumbnail.jpg"
          />
          <img
            className="w-[40%] min-w-[500px] object-contain -translate-x-[100px]"
            src="./works_colorwars-thumbnail.jpg"
          />
          <img
            className="w-[40%] min-w-[500px] object-contain translate-x-[100px]"
            src="./works_portfolio-thumbnail.jpg"
          />
          <img
            className="w-[40%] min-w-[500px] object-contain -translate-x-[100px]"
            src="./works_attendance-thumbnail.jpg"
          />
          <img
            className="w-[40%] min-w-[500px] object-contain translate-x-[100px]"
            src="./works_attendance-thumbnail.jpg"
          />
        </div>
      </div>
      {props.children}
    </div>
  );
}
