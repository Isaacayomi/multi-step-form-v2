function PlansCard({ children }) {
  return (
    <div className="flex items-center gap-[0.88rem] border border-formOutline rounded-[0.5rem] bg-white pt-[0.88rem] pb-[1.12rem] pl-[1rem] mb-[0.75rem] hover:border-purpleOutline md:w-[8.625rem] md:flex md:flex-col md:items-start">
      {children}
    </div>
  );
}

export default PlansCard;
