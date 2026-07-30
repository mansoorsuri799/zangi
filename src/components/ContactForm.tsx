'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormSubmitted(true);
    reset();
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const field =
    'w-full px-3 py-2 border border-line rounded bg-white text-ink text-sm focus:outline-none focus:border-brand';

  return (
    <div className="border border-line rounded-lg p-6">
      <h2 className="text-xl font-bold mb-5 text-ink text-center">Send a message</h2>
      {formSubmitted && (
        <p className="mb-4 text-sm text-brand text-center">
          Thanks — we typically reply within 24–48 hours.
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-mute mb-1">Name</label>
          <input id="name" className={field} {...register('name', { required: 'Required' })} />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-mute mb-1">Email</label>
          <input
            id="email"
            type="email"
            className={field}
            {...register('email', { required: 'Required' })}
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm text-mute mb-1">Subject</label>
          <input id="subject" className={field} {...register('subject', { required: 'Required' })} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-mute mb-1">Message</label>
          <textarea
            id="message"
            rows={5}
            className={field}
            {...register('message', { required: 'Required', minLength: 10 })}
          />
        </div>
        <div className="text-center pt-2">
          <button type="submit" className="cta-btn">Send message</button>
        </div>
      </form>
    </div>
  );
}
