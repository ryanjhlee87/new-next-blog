import React from 'react';

export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';
  return (
    <p
      className={`w-full max-w-2xl text-center rounded-xl py-4 ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      }`}
    >
      {`${icon} ${message}`}
    </p>
  );
}
