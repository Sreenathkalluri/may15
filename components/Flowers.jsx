import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Import images
import img1 from './1img1.jpg';
import img2 from './1img2.jpg';
import img3 from './1img3.jpg';
import img4 from './1img4.jpg';
import img5 from './1img5.jpg';
import img6 from './1img6.jpg';
import img7 from './1img7.jpg';
import img8 from './1img8.jpg';
import img9 from './1img9.jpg';
import img10 from './1img10.jpg';

// Define array of image paths
const imagePaths = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const FlowerCard = ({ plant, index, handleFilter }) => {
  // Dynamically construct image path
  const imagePath = imagePaths[index % imagePaths.length];

  return (
    <div className="col-md-4 mb-3">
      <div className="plant-card" onClick={() => handleFilter(plant['Plant Type'])}>
        <div className="plant-image-container">
          <img src={imagePath} className="plant-image" alt={plant['Plant Name']} />
        </div>
        <div className="plant-content">
          <h5 className="plant-name">{plant['Plant Name']}</h5>
          <p className="plant-type">Type: {plant['Plant Type']}</p>
          <p className="plant-growing-conditions">Growing Conditions: {plant['Plant Growing Conditions']}</p>
          <p className="plant-essentials">Essentials: {plant['Plant Essentials']}</p>
        </div>
      </div>
    </div>
  );
};

const Flowers = () => {
  const [queryParameters] = useSearchParams();
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showOnlyFlowering, setShowOnlyFlowering] = useState(false);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch(`http://localhost:8080/flowers?flower_category=${queryParameters.get('flower_category')}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPlants(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    };
    fetchPlants();
  }, [queryParameters]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = plants.filter(plant =>
      plant['Plant Type'] && plant['Plant Type'].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
    console.log(filteredData);
  };

  const handleFilter = (plantType) => {
    setShowOnlyFlowering(plantType === 'Flowering Plants');
  };

  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-md-4">
          <h2 className="text-dark mb-4">Search Plant</h2>
          <input type="text" className="form-control" placeholder="Enter plant category" onChange={handleSearch} />
        </div>
      </div>
      <div className="row mt-3">
        {filteredData.map((plant, index) => (
          (!showOnlyFlowering || plant['Plant Type'] === 'Flowering Plants') && (
            <FlowerCard key={index} plant={plant} index={index} handleFilter={handleFilter} />
          )
        ))}
      </div>
    </div>
  );
}

export default Flowers;
