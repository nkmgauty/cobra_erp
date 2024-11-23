// import React, { useState } from "react";

// const DynamicProgressCard = ({ title, description }) => {
//   const [progress, setProgress] = useState(0);

//   // Function to handle progress changes
//   const handleProgressChange = (e) => {
//     const value = Math.min(100, Math.max(0, Number(e.target.value))); // Clamp value between 0 and 100
//     setProgress(value);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Card Header */}
//       <div className="bg-blue-500 p-4">
//         <h2 className="text-lg font-semibold text-white">{title}</h2>
//         <p className="text-sm text-blue-100">{description}</p>
//       </div>

//       {/* Card Body */}
//       <div className="p-6">
//         {/* Progress Bar */}
//         <div className="relative pt-1 mb-4">
//           <div className="overflow-hidden h-4 rounded bg-gray-200">
//             <div
//               className="h-full bg-blue-500 rounded"
//               style={{ width: ${progress}% }}
//             ></div>
//           </div>
//           <p className="text-sm text-gray-600 mt-2">{progress}% Completed</p>
//         </div>

//         {/* Interactive Slider */}
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={progress}
//           onChange={handleProgressChange}
//           className="w-full accent-blue-500"
//         />
//       </div>

//       {/* Footer */}
//       <div className="bg-gray-100 p-4 text-center">
//         <button
//           onClick={() => setProgress(0)}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Reset Progress
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DynamicProgressCard;