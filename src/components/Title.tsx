const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-gray-500 mt-2 text-3xl">{subtitle}</p>
    </div>
  );
};

export default Title;
