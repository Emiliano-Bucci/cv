import { useEffect, useLayoutEffect as reactUseLayoutEffect } from "react";

export const useLayoutEffect =
  typeof window !== "undefined" ? reactUseLayoutEffect : useEffect;

export async function preloadImageWithCallback({
  imageUrl,
  callback,
}: {
  imageUrl: string;
  callback?(): void;
}) {
  function handleCallback() {
    callback && callback();
  }

  const _image = new Image();
  _image.src = imageUrl;

  if (_image.decode) {
    await _image.decode();

    handleCallback();
  } else {
    _image.onload = () => {
      handleCallback();
    };
  }
}
