const PlansCard = ({ src, alt, heading, price }) => {
  return (
    <div className="flex items-center gap-[0.88rem] border border-formOutline rounded-[0.5rem] bg-white pt-[0.88rem] pb-[1.12rem] pl-[1rem] mb-[0.75rem] hover:border-purpleOutline md:w-[8.625rem] md:flex md:flex-col md:items-start cursor-pointer">
      <img src={src} alt={alt} className="md:pb-[2.44rem]" />
      <div>
        <h3 className="mb-[0.44rem] text-darkBlue font-medium text-[1rem]">
          {heading}
        </h3>
        <p className="text-grey text-[0.875rem] font-normal md:pb-[1rem]">
          {price}
        </p>
      </div>{" "}
    </div>
  );
};

export default PlansCard;
