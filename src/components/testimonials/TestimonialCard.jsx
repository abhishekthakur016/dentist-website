import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({
  name,
  role = "Patient",
  message,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-8 relative hover:shadow-lg transition">
      
      {/* Quote Icon */}
      <FaQuoteLeft className="absolute top-6 right-6 text-primary/20 text-4xl" />

      {/* Message */}
      <p className="text-gray-600 leading-relaxed italic">
        “{message}”
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-6">
        <img
          src={image || "/images/testimonials/user1.jpg"}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-primary">
            {name}
          </h4>
          <p className="text-sm text-gray-500">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  message: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default TestimonialCard;
