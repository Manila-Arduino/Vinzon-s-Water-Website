interface HomeSectionProps {
  title: string;
  children: React.ReactNode;
}

const HomeSection: React.FC<HomeSectionProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xl font-semibold">{title}</p>
      {children}
    </div>
  );
};

export default HomeSection;
