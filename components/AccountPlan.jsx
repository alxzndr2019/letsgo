const AccountPlan = () => {
  const features = [
    "Pay per event based on its size",
    "Pay from your ticket sales for no upfront costs",
    "Send 250 marketing emails a day",
    "Access all-in-one event ticketing and marketing tools",
    // Add more features as needed
  ];

  return (
    <div className="bg-[#F7F7F7] rounded-lg p-4 sm:p-6 text-black h-auto shadow-lg">
      <div>
        <div className="flex justify-between">
          <h1>Current Plan</h1>
          <p className="decoration-dotted underline">Manage Plan</p>
        </div>
        <p className="text-lg sm:text-[20px] font-extrabold">Flex</p>
        <ul className="list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index} className="my-4 sm:my-[30px]">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountPlan;
