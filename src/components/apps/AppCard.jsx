const AppCard = ({ app, handleAddToCart }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition">
      
      {/* Image */}
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Title */}
      <h2 className="text-md font-semibold mt-3">{app.title}</h2>

      {/* Company */}
      <p className="text-sm text-gray-500">{app.companyName}</p>

      {/* Bottom Info */}
      <div className="flex justify-between items-center mt-3">

        {/* Downloads */}
        <span className="text-green-600 text-sm font-medium">
          ⬇ {Math.floor(app.downloads / 1000)}K
        </span>

        {/* Rating */}
        <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded text-xs font-semibold">
          ⭐ {app.ratingAvg}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => handleAddToCart(app)}
        className="w-full mt-3 bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AppCard