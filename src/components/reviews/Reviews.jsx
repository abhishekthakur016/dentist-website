import ReviewCard from "./ReviewCard";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rohit Sharma",
    rating: 5,
    comment:
      "Excellent treatment! Doctor explained everything clearly and the process was completely painless.",
    image: "/images/testimonials/user1.jpg",
  },
  {
    name: "Priya Verma",
    rating: 4,
    comment:
      "Very clean clinic and polite staff. Appointment was on time. Highly recommended.",
    image: "/images/testimonials/user2.jpg",
  },
  {
    name: "Amit Singh",
    rating: 5,
    comment:
      "Best dental clinic experience so far. Modern equipment and friendly environment.",
    image: "/images/testimonials/user3.jpg",
  },
 
  
];

const averageRating =
  reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Patient Reviews
          </h2>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-3xl font-bold">
              {averageRating.toFixed(1)}
            </span>

            <div className="flex text-yellow-400 text-xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(averageRating)
                      ? "opacity-100"
                      : "opacity-30"
                  }
                />
              ))}
            </div>

            <span className="text-gray-600">
              ({reviews.length} reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
