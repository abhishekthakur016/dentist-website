const testimonials = [
  { name: "Amit", msg: "Best dental clinic experience ever!" },
  { name: "Neha", msg: "Very professional and friendly staff." },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-center text-3xl font-bold text-primary mb-10">
        Patient Testimonials
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <p className="italic">"{t.msg}"</p>
            <h4 className="mt-4 font-semibold text-accent">– {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
