import Card from './Card';

const items = [
  { icon: '⚡', title: 'Fast', text: 'Lean code and optimized assets.' },
  { icon: '♿', title: 'Accessible', text: 'Keyboard and screen-reader friendly.' },
  { icon: '🧩', title: 'Systematic', text: 'Colors and spacing come from design tokens.' },
];

export default function CardGrid() {
  return (
    <section id="features" className="container features" aria-labelledby="features-title">
      <h2 id="features-title">Features</h2>
      <div className="grid">
        {items.map((item) => (
          <Card key={item.title} icon={item.icon} title={item.title}>
            {item.text}
          </Card>
        ))}
      </div>
    </section>
  );
}