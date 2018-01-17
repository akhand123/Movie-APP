import { AsyncStorage } from 'react-native';

const storage = 'movie/saved';

class MovieStore {

  load = async () => {
    const movies = await AsyncStorage.getItem(storage);
    return JSON.parse(movies) || {movies: []};
  };

  save = async (movie) => {
    const res = await this.load().then((favourites) => {
        const movies = favourites.movies.concat([movie]);
        AsyncStorage.setItem(storage, JSON.stringify({ movies }));
        return movies;
      });
    return res;
  };

  remove = async (movie) => {
    const res = await this.load().then((favourites) => {
        let movies = favourites.movies.filter(m => m.id !== movie.id);//favourites.movies;
        //const index = movies.indexOf(movie);
        //movies.splice(index, 1);
        AsyncStorage.setItem(storage, JSON.stringify({ movies }));
        return movies;
    });
    return res;
    //await AsyncStorage.removeItem('movie/saved');
  };

}

export default new MovieStore();