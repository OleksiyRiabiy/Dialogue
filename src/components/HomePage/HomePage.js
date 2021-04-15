import React, {useCallback, useState, useEffect} from "react";

import styles from './HomePage.module.css';
import HomePageSlider from "./HomePageSlider";

const HomePage = props => {
    const [imagesForSlider, setImagesForSlider] = useState([]);

    useEffect(() => {
        fetch('https://dialogue-pizza-sushi-default-rtdb.firebaseio.com/images_for_sliders.json')
            .then(response => response.json())
            .then(responseData => {
                const loadedImagesForSlider = [];
                for (const key in responseData) {
                    loadedImagesForSlider.push({
                        id: key,
                        name: responseData[key].name
                    });
                }
                setImagesForSlider(loadedImagesForSlider);
            });
    }, []);

    const addSliderImageHandler = useCallback(image => {
        fetch('https://dialogue-pizza-sushi-default-rtdb.firebaseio.com/images_for_sliders.json', {
          method: 'POST',
          body: JSON.stringify(image),
          headers: { 'Content-Type': 'application/json' }
        }).then(response => {
          return response.json();
        }).then(responseData => { 
          setImagesForSlider(prevImages => [
            ...prevImages, 
            {id: responseData.name , ...image }
          ]);
        }); 
      }, []);

    return (
        <div>
          <HomePageSlider />
        </div>
    )
};

export default HomePage;