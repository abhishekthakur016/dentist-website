const ServiceCard = ({ title, img }) => {
  return (
    <div className="border rounded-lg p-6 text-center hover:shadow-lg transition">
      <img src={img} alt={title} className="h-16 mx-auto mb-4" />
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
};

export default ServiceCard;
