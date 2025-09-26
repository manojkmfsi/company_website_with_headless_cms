import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p
        data-testid="loader"
        className="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300"
      >
        Loading...
      </p>
    </div>
  );
};

export default Loader;
