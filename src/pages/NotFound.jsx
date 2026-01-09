
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4 max-w-md">

        <h1 className="text-7xl font-extrabold text-primary">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8">
          <Link to="/">
            <Button>
              Back to Home
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NotFound;
