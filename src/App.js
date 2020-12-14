import { Component } from 'react';
import './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

// ключь API
const keyApi = '18681025-f668a3aca189dfba87ba57015';

class App extends Component {
  state = {
    imagesArray: [],
    currentPage: 1,
    searchImage: '',
  };

  componentDidUpdate(prevState) {
    // необходимо при пролистывании(нажатия на кнопку"догрузить"). Сохранение слова-поиска асинхронно, а функция
    // фетча синхронна, потому выполняется первее.
    // вызов функции fetchImages будет только тогда когда в searchImage будет новое значение
    if (prevState.searchImage !== this.state.searchImage) {
      this.fetchImages();
    }
  }

  onChangeSearchWord = searchWord => {
    // когда получаем слово для поиска картинки, сохраняем в стейт это слово для последующего
    // перелистывания(нажатия на кнопку"догрузить")
    // сбрасываем в исходное состояние currentPage и imagesArray, в случае нового ввода нового слова поиска
    this.setState({ searchImage: searchWord, currentPage: 1, imagesArray: [] });
  };

  fetchImages = () => {
    const { currentPage, searchImage } = this.state;
    fetch(
      `https://pixabay.com/api/?q=${searchImage}&page=${currentPage}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(responce => responce.json())
      .then(data => {
        this.setState(prevState => ({
          imagesArray: [...prevState.imagesArray, ...data.hits],
          // увеличить отображаемую страницуна +1
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  render() {
    const { imagesArray } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeSearchWord} />
        <ImageGallery imagesArray={imagesArray} />

        {imagesArray.length > 0 && <Button onClickHandle={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
