import { useEffect, useState } from "react";
import AppCard from "../../components/apps/AppCard";
// import AppCard from "./AppCard";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);



  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 text-sm">
          Explore All Apps on the Market developed by us.
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">
          ({filteredApps.length}) Apps Found
        </p>

        <input
          type="text"
          placeholder="search Apps"
          className="border px-3 py-1 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="">
        
        {/* Apps Grid */}
        <div className="grid grid-cols-4 gap-6 ">
          {filteredApps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
            />
          ))}
        </div>

       
     
      </div>
    </div>
  );
};

export default Apps;