import TheMovieDbSource from "../../data/themoviedb-source";
import { createRestItemTemplate } from "../templates/template-creator";

const home = {
  async render() {
    return `
    <div class="content">
    <div id="movies" class="movies">
    </div>
  </div>
  `;
  },

  async afterRender() {
    const resta = await TheMovieDbSource.homePageRestaurant();
    const restContainer = document.querySelector("#movies");
    for (const property in resta) {
      resta[property].id = property;
      restContainer.innerHTML += createRestItemTemplate(resta[property]);
    }
  },
};

export default home;
