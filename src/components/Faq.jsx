const faqs = [
  { q: 'Ye website kis se bani hai?', a: 'React aur Vite se, bina kisi bhari library ke.' },
  { q: 'Kya ye mobile par chalti hai?', a: 'Haan, layout har screen size ke hisaab se badalta hai.' },
  { q: 'Kya main isay apne liye badal sakta hoon?', a: 'Bilkul. Colors, text aur sections apne hisaab se badal lein.' },
];

export default function Faq() {
  return (
    <section className="container faq" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
      {faqs.map((f) => (
        <details key={f.q} className="faq__item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}