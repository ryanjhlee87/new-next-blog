import React from 'react';
import ContactForm from '@/components/ContactForm';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send Email to Jeinnfer Miller',
};

export default function ContactPage() {
  const LINKS = [
    { icon: <AiFillGithub />, url: 'github.com' },
    { icon: <AiFillLinkedin />, url: 'linkedin.com' },
    { icon: <AiFillYoutube />, url: 'youtube.com' },
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>jennifermiller.dev@gmail.com</p>

      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="norefferer"
            className="text-5xl hover:text-sky-500"
          >
            {link.icon}
          </a>
        ))}
      </ul>

      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
