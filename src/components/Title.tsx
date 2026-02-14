import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div class="text-center mb-8">
      <h2 class="text-5xl font-bold">{title}</h2>
      <p class="text-gray-500 mt-2 text-3xl">{subtitle}</p>
    </div>
  );
};

export default Title;
