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
    images: [`${process.env.PUBLIC_URL}/travel/hawaii1.jpeg`, `${process.env.PUBLIC_URL}/travel/hawaii2.jpeg`, `${process.env.PUBLIC_URL}/travel/hawaii3.jpeg`,`${process.env.PUBLIC_URL}/travel/hawaii4.jpeg`,`${process.env.PUBLIC_URL}/travel/hawaii5.jpeg`, `${process.env.PUBLIC_URL}/travel/hawaii6.jpeg`, `${process.env.PUBLIC_URL}/travel/hawaii7.jpeg`,`${process.env.PUBLIC_URL}/travel/hawaii8.jpeg`]
  },
  {
    name: "Mexico City, Mexico",
    position: [19.4326, -99.1332],
    images: [`${process.env.PUBLIC_URL}/travel/MexicoCity1.jpeg`, `${process.env.PUBLIC_URL}/travel/MexicoCity2.jpeg`, `${process.env.PUBLIC_URL}/travel/MexicoCity3.jpeg`],
  },
  {
    name: "Cancun, Mexico",
    position: [21.1619, -86.1505],
    images: [`${process.env.PUBLIC_URL}/travel/cancun1.jpeg`, `${process.env.PUBLIC_URL}/travel/cancun2.jpeg`, `${process.env.PUBLIC_URL}/travel/cancun3.jpeg`,`${process.env.PUBLIC_URL}/travel/cancun3.jpeg`],
  },
  {
    name:"Los Angles, America",
    position:[34.0522,-118.2437],
    images:[`${process.env.PUBLIC_URL}/travel/losangles1.jpeg`,`${process.env.PUBLIC_URL}/travel/losangles2.jpeg`,`${process.env.PUBLIC_URL}/travel/losangles3.jpeg`,`${process.env.PUBLIC_URL}/travel/losangles4.jpeg`,`${process.env.PUBLIC_URL}/travel/losangles5.jpeg`]
  },
  {
    name:"Joshua Tree,America",
    position:[33.8734,-115.9010],
    images:[`${process.env.PUBLIC_URL}/travel/joshua1.JPG`]
  },
  {
    name:"San Diego",
    position:[32.7157,-117.1611],
    images:[`${process.env.PUBLIC_URL}/travel/sandiego1.JPG`,`${process.env.PUBLIC_URL}/travel/sandiego2.JPG`,`${process.env.PUBLIC_URL}/travel/sandiego3.JPG`,`${process.env.PUBLIC_URL}/travel/sandiego4.JPG`]
  },
  {
    name:"Las Vegas,America",
    position:[36.1699,-115.1398],
    images:[]
  },
  {
    name:"Seoul,Korea",
    position:[37.5665,126.9780],
    images:[]
  },
  {
    name:"Yunnan,China",
    position:[26.8570,100.2278],
    images:[`${process.env.PUBLIC_URL}/travel/yunnan1.jpg`,`${process.env.PUBLIC_URL}/travel/yunnan2.jpg`,`${process.env.PUBLIC_URL}/travel/yunnan3.jpg`,`${process.env.PUBLIC_URL}/travel/yunnan4.jpg`,`${process.env.PUBLIC_URL}/travel/yunnan5.jpg`]
  },
  {
    name:"Xingwen,China",
    position:[28.3055,105.2369],
    images:[`${process.env.PUBLIC_URL}/travel/xingwen1.jpg`,`${process.env.PUBLIC_URL}/travel/xingwen2.jpg`,`${process.env.PUBLIC_URL}/travel/xingwen3.jpg`]
  },
  {
    name:"Turkey",
    position:[40,40],
    images:[`${process.env.PUBLIC_URL}/travel/turkey1.jpg`,`${process.env.PUBLIC_URL}/travel/turkey2.jpg`,`${process.env.PUBLIC_URL}/travel/turkey3.jpg`,`${process.env.PUBLIC_URL}/travel/turkey4.jpg`,`${process.env.PUBLIC_URL}/travel/turkey5.jpg`]
  },
  {
    name:"Nanjing,China",
    position:[32.0603,118.7969],
    images:[`${process.env.PUBLIC_URL}/travel/nanjing.jpg`,`${process.env.PUBLIC_URL}/travel/nanjing2.jpg`]
  },
  {
    name:"Guazhou,China",
    position:[23.1291,113.2644],
    images:[]
  },
  {
    name:"Shanghai,China",
    position:[31.2304,121.4737],
    images:[`${process.env.PUBLIC_URL}/travel/shanghai1.jpg`,`${process.env.PUBLIC_URL}/travel/shanghai2.jpg`]
  },
  {
    name:"Chengdu,China",
    position:[30.5728,104.0668],
    images:[`${process.env.PUBLIC_URL}/travel/chengdu1.jpg`,`${process.env.PUBLIC_URL}/travel/chengdu2.jpg`,`${process.env.PUBLIC_URL}/travel/chengdu3.jpg`]
  },
  {
    name:"Wuhan,China",
    position:[30.5928,114.3055],
    images:[`${process.env.PUBLIC_URL}/travel/wuhan1.jpg`,`${process.env.PUBLIC_URL}/travel/wuhan2.jpg`]
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
          <div className="relative bg-white w-11/12 max-w-4xl rounded-lg p-6 shadow-lg">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedLocation(null)}
            >
              X
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">
              {selectedLocation.name}
            </h2>
            <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
              <img
                src={selectedLocation.images[currentIndex]}
                alt={`${selectedLocation.name} - ${currentIndex + 1}`}
                className="w-auto h-full object-cover rounded-lg"
              />
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3"
              >
                {"<"}
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3"
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
