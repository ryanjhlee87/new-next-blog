import Image from 'next/image';
import React from 'react';

type Props = {
  career: string[] | null;
  skills: string[] | null;
};

export default function Hero({ career, skills }: Props) {
  const TITLE_CLASS = 'text-2xl font-bold';

  return (
    <section className="flex flex-col p-4 w-full text-center shadow-lg rounded-lg">
      <Image
        className="rounded-full mx-auto"
        src="/images/portrait.jpg"
        alt="portrait"
        width={300}
        height={300}
      />

      <h2 className={TITLE_CLASS}>Jennifer Miller</h2>
      <p className="my-2">Who codes dream, a dream coder</p>
      <button className="bg-gray-700 w-32 p-2 rounded-lg mx-auto text-white hover:bg-gray-900">
        Contact Me
      </button>
    </section>
  );
}
