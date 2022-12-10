import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createRestDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-initiator';
import FavoriteDish from '../../data/favorite-movie-idb';

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>    
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resta = await TheMovieDbSource.detailRestaurant(url.id);
    const restContainer = document.querySelector('#movie');
    restContainer.innerHTML = createRestDetailTemplate(resta);

    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteDish: FavoriteDish,
      dish: {
        id: url.id,
        nama: resta.nama,
        alamat: resta?.alamat,
        rating: resta.rating,
        foto: resta.foto,
      },
    });
  },
};

export default Detail;
