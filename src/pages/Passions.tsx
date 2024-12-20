import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple } from "leaflet";

// Fix Leaflet's default marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Travel locations data
const travelLocations: {
  name: string;
  position: LatLngTuple;
  images: string[];
}[] = [
  {
    name: "Hawaii, America",
    position: [19.8969,155.5828],
    images: ["/travel/hawaii1.jpeg", "/travel/hawaii2.jpeg", "/travel/hawaii3.jpeg","/travel/hawaii4.jpeg","/travel/hawaii5.jpeg", "/travel/hawaii6.jpeg", "/travel/hawaii7.jpeg","/travel/hawaii8.jpeg"]
  },
  {
    name: "Mexico City, Mexico",
    position: [19.4326, -99.1332],
    images: ["/travel/MexicoCity1.jpeg", "/travel/MexicoCity2.jpeg", "/travel/MexicoCity3.jpeg"],
  },
  {
    name: "Cancun, Mexico",
    position: [21.1619, -86.1505],
    images: ["/travel/cancun1.jpeg", "/travel/cancun2.jpeg", "/travel/cancun3.jpeg","/travel/cancun3.jpeg"],
  },
  {
    name:"Los Angles, America",
    position:[34.0522,-118.2437],
    images:["/travel/losangles1.jpeg","/travel/losangles2.jpeg","/travel/losangles3.jpeg","/travel/losangles4.jpeg","/travel/losangles5.jpeg"]
  },
  {
    name:"Joshua Tree,America",
    position:[33.8734,-115.9010],
    images:["/travel/joshua1.JPG"]
  },
  {
    name:"San Diego",
    position:[32.7157,-117.1611],
    images:["/travel/sandiego1.JPG","/travel/sandiego2.JPG","/travel/sandiego3.JPG","/travel/sandiego4.JPG"]
  },
  {
    name:"Las Vegas,America",
    position:[36.1699,-115.1398],
    images:[""]
  },
  {
    name:"Seoul,Korea",
    position:[37.5665,126.9780],
    images:[""]
  },
  {
    name:"Yunnan,China",
    position:[26.8570,100.2278],
    images:["/travel/yunnan1.jpg","/travel/yunnan2.jpg","/travel/yunnan3.jpg","/travel/yunnan4.jpg","/travel/yunnan5.jpg"]
  },
  {
    name:"Xingwen,China",
    position:[28.3055,105.2369],
    images:["/travel/xingwen1.jpg","/travel/xingwen2.jpg","/travel/xingwen3.jpg"]
  },
  {
    name:"Turkey",
    position:[40,40],
    images:["/travel/turkey1.jpg","/travel/turkey2.jpg","/travel/turkey3.jpg","/travel/turkey4.jpg","/travel/turkey5.jpg"]
  },
  {
    name:"Nanjing,China",
    position:[32.0603,118.7969],
    images:["/travel/nanjing.jpg","/travel/nanjing2.jpg"]
  },
  {
    name:"Guazhou,China",
    position:[23.1291,113.2644],
    images:[]
  },
  {
    name:"Shanghai,China",
    position:[31.2304,121.4737],
    images:["/travel/shanghai1.jpg","/travel/shanghai2.jpg"]
  },
  {
    name:"Chengdu,China",
    position:[30.5728,104.0668],
    images:["/travel/chengdu1.jpg","/travel/chengdu2.jpg","/travel/chengdu3.jpg"]
  },
  {
    name:"Wuhan,China",
    position:[30.5928,114.3055],
    images:["/travel/wuhan1.jpg","/travel/wuhan2.jpg"]
  }
];

const Passions: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<null | {
    name: string;
    images: string[];
  }>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (selectedLocation) {
      setCurrentIndex((prevIndex) =>
        prevIndex === selectedLocation.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = () => {
    if (selectedLocation) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? selectedLocation.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="relative w-screen h-[calc(100vh-120px)] bg-gray-100">
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-blue-700 z-10">
        My Travels
      </h2>

      {/* Full-Screen Map */}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="w-full h-full relative z-0"
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {travelLocations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            eventHandlers={{
              click: () => setSelectedLocation(location),
            }}
          >
            {/* Tooltip for displaying location name */}
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
              <span className="text-black font-bold">{location.name}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Modal for Location Images */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
          <div className="relative bg-white w-11/12 max-w-3xl rounded-lg p-6 shadow-lg">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedLocation(null)}
            >
              X
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">
              {selectedLocation.name}
            </h2>
            <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
              <img
                src={selectedLocation.images[currentIndex]}
                alt={`${selectedLocation.name} - ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
              >
                {"<"}
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Passions;
