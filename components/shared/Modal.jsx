"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Modal({ children, isOpen, onClick }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  // const [isOpen, setIsOpen] = useState(true);

  const onClose = (e) => {
    if (e.target === overlay.current || e.target === wrapper.current) {
      onClick();
    }
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClick();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClick]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
      onClick={onClose}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6"
      >
        <Image
          onClick={onClick}
          className="cursor-pointer absolute top-7 right-7 "
          src={"/assets/icons/xmark.svg"}
          width={20}
          height={20}
          alt=""
        />
        {children}
      </div>
    </div>
  );
}
