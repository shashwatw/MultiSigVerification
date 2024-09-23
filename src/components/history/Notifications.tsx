import React from "react";

const Notifications: React.FC = () => {
  const notifications = [
    { id: 1, message: "Notification #1 - New Transaction Created" },
    { id: 2, message: "Notification #2 - Part Verification Failed" },
  ];

  return (
    <section className="flex overflow-hidden flex-col self-start p-6 mt-8 text-base text-gray-800 bg-gray-100 rounded shadow-sm max-md:px-5">
      <h2 className="self-start text-xl font-bold leading-snug">
        Notifications
      </h2>
      <ul className="mt-4 ml-5 max-md:ml-2.5">
        {notifications.map((notification) => (
          <li key={notification.id} className="mr-5 ml-5 max-md:mx-2.5">
            {notification.message}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
