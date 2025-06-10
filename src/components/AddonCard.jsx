import { useState } from "react";

const AddonCard = ({ label, description, price }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      className={`flex items-center gap-[1rem] w-[18.4375rem] rounded-[0.5rem] border 
      ${
        checked
          ? "border-purpleOutline bg-purpleOutline/10"
          : "border-formOutline"
      }
      hover:border-purpleOutline p-2 cursor-pointer mb-2 md:w-[28.125rem] relative`}
    >
      {/* Hidden native checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="w-5 h-5 opacity-0 absolute left-4"
      />
      {/* Custom checkbox */}
      <span
        className={`w-5 h-5 flex items-center justify-center rounded-md border-2 
        ${
          checked
            ? "bg-purpleOutline border-purpleOutline"
            : "border-formOutline"
        }
        transition-colors absolute left-4`}
      >
        {checked && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 8.5L7 11.5L12 5.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <div className="ml-12">
        <p className="text-darkBlue text-[0.875rem] font-medium pt-[0.81rem] pb-[0.19rem] md:text-[1rem]">
          {label}
        </p>
        <p className="text-grey font-normal text-[0.75rem] pb-[0.62rem] md:text-[0.9375rem]">
          {description}
        </p>
      </div>
      <p className="text-purpleOutline text-right text-[0.75rem] font-normal ml-auto pr-[1rem] md:text-[0.9375rem]">
        {price}
      </p>
    </label>
  );
};

export default AddonCard;
