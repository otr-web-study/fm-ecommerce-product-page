'use client';
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { CloseIcon } from './icons/CloseIcon';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onDismiss]);

  return (
    <div
      ref={overlay}
      className="fixed bottom-0 left-0 right-0 top-0 z-20 grid place-items-center bg-black/75"
      onClick={onClick}
    >
      <div ref={wrapper} className="relative">
        <button className="absolute -top-10 right-0" onClick={onDismiss}>
          <CloseIcon className="transition-color h-8 w-8 text-white duration-250 hover:text-orange" />
          <span className="sr-only">close</span>
        </button>
        {children}
      </div>
    </div>
  );
}
