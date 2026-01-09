import PropTypes from "prop-types";

const Loader = ({
  text = "Loading...",
  fullScreen = false,
  size = "md",
}) => {
  const sizes = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-4",
    lg: "h-14 w-14 border-4",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4
        ${fullScreen ? "fixed inset-0 bg-white/80 z-50" : ""}
      `}
    >
      {/* Spinner */}
      <div
        className={`${sizes[size]} rounded-full border-primary border-t-accent animate-spin`}
      />

      {/* Text */}
      {text && (
        <p className="text-sm text-gray-600 font-medium">
          {text}
        </p>
      )}
    </div>
  );
};

Loader.propTypes = {
  text: PropTypes.string,
  fullScreen: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Loader;
