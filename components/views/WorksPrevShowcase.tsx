import React, { PropsWithChildren } from 'react';
import { WORKS_SECTION_CONFIG } from '@/app.config';

export default function WorksPrevShowcase(props: PropsWithChildren) {
  return (
    <div className="relative flex-xyc flex-col gap-[100px] w-full h-screen text-6xl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden">
        <div className="gap-2 flex-xyc flex-col rotate-45 w-full h-full">
          {WORKS_SECTION_CONFIG.map((v, i) =>
            i % 2 === 0 ? (
              <img
                className="w-[40%] min-w-[500px] object-contain translate-x-[100px]"
                src={v.thumbnailSrc}
                key={`next_my_work_bg_${i}`}
                loading="lazy"
              />
            ) : (
              <img
                className="w-[40%] min-w-[500px] object-contain -translate-x-[100px]"
                src={v.thumbnailSrc}
                key={`next_my_work_bg_${i}`}
                loading="lazy"
              />
            )
          )}
        </div>
      </div>
      {props.children}
    </div>
  );
}
