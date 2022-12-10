import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async homePageRestaurant() {
    const response = await fetch(API_ENDPOINT.home);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.home);
    const responseJson = await response.json();

    console.log(responseJson[id]);
    return responseJson[id];
  }
}

export default TheMovieDbSource;
