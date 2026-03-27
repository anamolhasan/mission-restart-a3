import { useEffect, useState } from "react";
import { useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setApp(found);
      });
  }, [id]);

  if (!app) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  const maxRating = Math.max(...app.ratings.map((r) => r.count));

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Container */}
      <div className="max-w-6xl mx-auto p-6">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* IMAGE */}
          <div className="bg-white p-4 rounded-lg shadow w-fit">
            <img
              src={app.image}
              alt={app.title}
              className="w-56 h-56 object-cover"
            />
          </div>

          {/* INFO */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">{app.title}</h1>

            <p className="text-blue-500 mb-4">
              Developed by {app.companyName}
            </p>

            {/* STATS */}
            <div className="flex gap-10 mb-6">

              {/* Downloads */}
              <div>
                <p className="text-green-600 text-xl">⬇</p>
                <p className="text-sm text-gray-500">Downloads</p>
                <h2 className="font-bold text-xl">
                  {(app.downloads / 1000000).toFixed(1)}M
                </h2>
              </div>

              {/* Rating */}
              <div>
                <p className="text-orange-500 text-xl">⭐</p>
                <p className="text-sm text-gray-500">Average Ratings</p>
                <h2 className="font-bold text-xl">
                  {app.ratingAvg}
                </h2>
              </div>

              {/* Reviews */}
              <div>
                <p className="text-purple-500 text-xl">👍</p>
                <p className="text-sm text-gray-500">Total Reviews</p>
                <h2 className="font-bold text-xl">
                  {(app.reviews / 1000).toFixed(1)}K
                </h2>
              </div>
            </div>

            {/* BUTTON */}
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Install Now ({app.size} MB)
            </button>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-10" />

        {/* RATINGS */}
        <div>
          <h2 className="text-lg font-semibold mb-5">Ratings</h2>

          <div className="space-y-3">
            {app.ratings.map((r, index) => {
              const width = (r.count / maxRating) * 100;

              return (
                <div key={index} className="flex items-center gap-4">
                  
                  <p className="w-16 text-sm">{r.name}</p>

                  <div className="w-full bg-gray-200 h-3 rounded">
                    <div
                      className="bg-orange-500 h-3 rounded"
                      style={{ width: `${width}%` }}
                    ></div>
                  </div>

                  <p className="text-sm w-12">{r.count}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-10" />

        {/* DESCRIPTION */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Description</h2>

          <p className="text-gray-600 leading-relaxed">
            {app.description}
          </p>
        </div>

      </div>

      

    </div>
  );
};

export default AppDetails;