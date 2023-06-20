'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const DEFAULT_DATA = {
    from: '',
    subject: '',
    message: '',
  };
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(form)
      .then(() => {
        setBanner({ message: 'Email Sent Successfully', state: 'success' });
        setForm(DEFAULT_DATA);
      })
      .catch(() =>
        setBanner({ message: 'Failed Sending Email', state: 'error' })
      )
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl flex flex-col gap-2 m-4 p-4 bg-slate-600 rounded-xl text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          className="text-black"
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />

        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          className="text-black"
          type="text"
          id="subject"
          name="subject"
          required
          autoFocus
          value={form.subject}
          onChange={onChange}
        />

        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          className="text-black"
          rows={10}
          id="message"
          name="message"
          required
          autoFocus
          value={form.message}
          onChange={onChange}
        />

        <button className="bg-sky-500 text-white font-bold hover:bg-sky-400 py-2 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
}
