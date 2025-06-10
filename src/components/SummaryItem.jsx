function SummaryItem({ details, price }) {
  return (
    <p className="flex items-center justify-between py-[0.75rem]">
      <span className=" text-grey text-[0.875rem] l">{details}</span>
      <span className="text-darkBlue text-[0.875rem]  text-right">{price}</span>
    </p>
  );
}

export default SummaryItem;
