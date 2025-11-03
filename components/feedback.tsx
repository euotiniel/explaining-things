'use client';
import { MessageSquareMore } from 'lucide-react';

import { Drawer } from 'vaul';

export default function Feedback() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="">
        <div className="flex items-center gap-2 px-2.5 bg-[#EDEDED]/40 p-1 border-[#333333]/10 border border-dashed cursor-pointer hover:bg-[#EDEDED]/20 transition">
          {" "}
          <span className="text-neutral-600 text-sm">Escreva o que achou sobre o artigo </span>
          <MessageSquareMore className="text-neutral-500 h-4 w-4" />{" "}
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-0 fixed z-10 outline-none w-[310px] h-[310px] flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
        >
          <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-2 text-zinc-900">It supports all directions.</Drawer.Title>
              <Drawer.Description className="text-zinc-600 mb-2">
                This one specifically is not touching the edge of the screen, but that&apos;s not required for a side
                drawer.
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}