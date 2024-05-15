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

const PlantCard = ({ plant, index, handleClick }) => {
  const imagePath = imagePaths[index % imagePaths.length];

  return (
    <div className="col-md-4 mb-3">
      <div className="plant-card" onClick={() => handleClick(plant['Plant Type'])}>
        <div className="plant-image-container">
          <img src={imagePath} className="plant-image" alt={plant['Plant Name']} />
        </div>
        <div className="plant-content">
          <h5 className="plant-name">{plant['Plant Name']}</h5>
          <p className="plant-type">Type: {plant['Plant Type']}</p>
          <p className="plant-description">Description: {plant['Plant Description']}</p>
          <h6 className="care-requirements">Care Requirements:</h6>
          <ul className="care-list">
            <li><strong>Light:</strong> {plant['Care Requirements']['Light']}</li>
            <li><strong>Watering:</strong> {plant['Care Requirements']['Watering']}</li>
            <li><strong>Soil:</strong> {plant['Care Requirements']['Soil']}</li>
            <li><strong>Temperature:</strong> {plant['Care Requirements']['Temperature']}</li>
            <li><strong>Humidity:</strong> {plant['Care Requirements']['Humidity']}</li>
            <li><strong>Fertilization:</strong> {plant['Care Requirements']['Fertilization']}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Plants = () => {
  const [queryParameters] = useSearchParams();
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showOnlyFoliage, setShowOnlyFoliage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/Foliage?category=${queryParameters.get('category')}`);
        console.log(response);
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
    fetchData();
  }, [queryParameters]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = plants.filter(plant =>
      plant['Plant Type'] && plant['Plant Type'].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleFilter = (plantType) => {
    setShowOnlyFoliage(plantType === 'Foliage Plants');
  };

  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-md-4">
          <h2 className="text-dark mb-4">Search Plants</h2>
          <input type="text" className="form-control" placeholder="Enter plant category" onChange={handleSearch} />
        </div>
      </div>
      <div className="row mt-3">
        {filteredData.map((plant, index) => (
          (!showOnlyFoliage || plant['Plant Type'] === 'Foliage Plants') && (
            <PlantCard key={index} plant={plant} index={index} handleClick={handleFilter} />
          )
        ))}
      </div>
    </div>
  );
}

export default Plants;
