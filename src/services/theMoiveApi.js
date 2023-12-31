import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '733e69ecbc0d951ee5920192b66b3d6f';

export async function getMovieTrends(currentPage) {
  try {

    const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}&page=${currentPage}`);

    return data.results;

  } catch (error) {
    return Notiflix.Notify.failure(
      `${error.message}, please contact the administrator`
    );
  }
}

export async function getMovieByQuery (query) {


  try {

    const {data} = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);

    return data;
  } catch (error) {

    return Notiflix.Notify.failure(
      `${error.message}, plese contact the administrator`
    )
  }
}

export async function getMovieById(id) {
  try {
    const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);

    return data;
  } catch (error) {
    return Notiflix.Notify.failure(
      `${error.message}, please contact the administrator`
    );
  }
}

export async function getCastById(id) {
  try {
    const { data } = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}`
    );

    return data;
  } catch (error) {
    return Notiflix.Notify.failure(
      `${error.message}, please contact the administrator`
    );
  }
}


export async function getReviewsById (id) {

    try {

        const {data} = await axios.get(
            `movie/${id}/reviews?api_key=${API_KEY}`
        )

        return data;
    } catch(error) {
        return Notiflix.Notify.failure(
            `${error.message}, please contact the administrator`
          );
    }
}
