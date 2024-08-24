import { FaBlogger, FaPlane, FaHiking, FaSwimmingPool } from 'react-icons/fa';

const Interest = () => {
  const activities = [
    { name: 'Blogging', icon: <FaBlogger size={50} /> },
    { name: 'Travelling', icon: <FaPlane size={50} /> },
    { name: 'Mountain Hiking', icon: <FaHiking size={50} /> },
    { name: 'Swimming', icon: <FaSwimmingPool size={50} /> },
  ];

  return (
    <div className="relative flex flex-col items-center p-6 bg-gray-900 text-white">
      {/* Side label */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 text-lg font-semibold tracking-wider">
        LOVE TO DO
      </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg"
          >
            <div className="text-green-500 mb-4">{activity.icon}</div>
            <div className="text-lg font-bold">{activity.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
