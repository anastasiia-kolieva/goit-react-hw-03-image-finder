import { Component } from 'react';
import './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

// ключь API
const keyApi = '18681025-f668a3aca189dfba87ba57015';

class App extends Component {
  state = {
    imagesArray: [],
  };

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=flower&page=1&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(responce => responce.json())
      .then(data => {
        console.log(data.hits);
        this.setState({
          imagesArray: data.hits,
        });
      });
  }

  render() {
    const { imagesArray } = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery imagesArray={imagesArray} />
      </div>
    );
  }
}

export default App;
