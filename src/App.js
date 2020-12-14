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

  onChangeSearchWord = searchWord => {
    console.log(searchWord);

    fetch(
      `https://pixabay.com/api/?q=${searchWord}&page=1&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(responce => responce.json())
      .then(data => {
        console.log(data.hits);
        this.setState({
          imagesArray: data.hits,
        });
      });
  };

  render() {
    const { imagesArray } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeSearchWord} />
        <ImageGallery imagesArray={imagesArray} />
      </div>
    );
  }
}

export default App;
