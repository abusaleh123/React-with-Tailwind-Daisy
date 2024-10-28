import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const gymPlans = [
        {
          id: 1,
          name: "Basic Plan",
          price: 29.99,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Free water station",
            "Basic Wi-Fi access",
            "Open gym during regular hours",
            "Monthly progress tracking"
          ]
        },
        {
          id: 2,
          name: "Standard Plan",
          price: 49.99,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Free water station",
            "High-speed Wi-Fi access",
            "2 free fitness classes per month",
            "Discount on personal training sessions",
            "Extended gym hours access",
            "Access to nutrition planning app"
          ]
        },
        {
          id: 3,
          name: "Premium Plan",
          price: 79.99,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Free water station",
            "High-speed Wi-Fi access",
            "Unlimited fitness classes",
            "5 free personal training sessions",
            "Access to sauna and steam room",
            "Access to advanced fitness tracking app",
            "Monthly fitness assessment",
            "Free guest pass (one per month)"
          ]
        },
        {
          id: 4,
          name: "VIP Plan",
          price: 119.99,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Free water station",
            "High-speed Wi-Fi access",
            "Unlimited fitness classes",
            "Unlimited personal training sessions",
            "Access to sauna and steam room",
            "Complimentary gym merchandise",
            "Priority support and booking",
            "Private VIP locker",
            "24/7 gym access",
            "Access to exclusive VIP lounge",
            "Customized nutrition and workout plans",
            "Complimentary towel and laundry service"
          ]
        }
      ];
      

    return (
        <div className="py-5">
            <h2 className="text-5xl mt-3"> Best Prices in the town</h2>
         <div className="grid md:grid-cols-3 gap-6 mt-12">
         {
               gymPlans.map(option => <PriceOption key={option.id} option = {option }></PriceOption>) 
            }
         </div>
        </div>
    );
};

export default PriceOptions;