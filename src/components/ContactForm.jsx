import { useState } from 'react';

const MY_EMAIL = 'your-email@example.com'; // apni email likhein

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="container contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <form onSubmit={onSubmit} className="form">
        <label>
          Name
          <input name="name" value={form.name} onChange={onChange} required maxLength={80} />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={onChange} required maxLength={120} />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" value={form.message} onChange={onChange} required maxLength={1000} />
        </label>
        <button className="btn" type="submit">Send</button>
        {sent && <p role="status">Aap ka email app khul gaya hoga, wahan Send dabayen.</p>}
      </form>
    </section>
  );
}