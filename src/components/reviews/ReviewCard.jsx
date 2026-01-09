import PropTypes from "prop-types";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({
  name,
  rating = 5,
  comment,
  image,
}) => {
  return (
    <div
      className="
        group relative h-full
        rounded-2xl bg-white
        p-6
        shadow-md
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        border border-transparent
        hover:border-accent/40
      "
    >
      {/* Gradient Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary to-accent" />

      {/* User Info */}
      <div className="flex items-center gap-4 mb-5">
        {/* Avatar */}
        <div className="relative">
          <img
            src={image || "/images/testimonials/user1.jpg"}
            alt={name}
            className="
              h-14 w-14 rounded-full object-cover
              ring-2 ring-primary/20
              group-hover:ring-accent/40
              transition
            "
          />
        </div>

        {/* Name + Rating */}
        <div>
          <h4 className="font-semibold text-primary leading-tight">
            {name}
          </h4>

          <div className="flex items-center gap-0.5 mt-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) =>
              i < rating ? (
                <FaStar key={i} className="text-sm" />
              ) : (
                <FaRegStar key={i} className="text-sm opacity-40" />
              )
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />

      {/* Comment */}
      <p className="text-gray-600 text-sm leading-relaxed">
        “{comment}”
      </p>

      {/* Hover Glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100
          transition duration-300
          bg-gradient-to-br from-primary/5 to-accent/5
        "
      />
    </div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  comment: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default ReviewCard;
