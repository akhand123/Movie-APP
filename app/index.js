import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';

import movieStore from './stores/movieStore';
import {AppColors} from './theme';

class App extends Component {
  state = {
    isLoadingComplete: false,
    favourites: [],
    movies: []
  };

  componentDidMount() {
    movieStore
      .load()
      .then(fav => {
        if (fav.movies.length) {
          this.setState({favourites: fav.movies});
        }
      });
  }

  saveFavourite = (movie) => {
    this.updateFavState(movie, true);
    movieStore
      .save(movie)
      .then((movies) => {
        this.setState({favourites: movies});
      });
  }

  removeFavourite = (movie) => {
    this.updateFavState(movie, false);
    movieStore
      .remove(movie)
      .then((movies) => {
        this.setState({favourites: movies});
      });
  }

  updateFavState(movie, isFavourite) {
    const movies = this.state.movies;
    const idx = movies.findIndex(m => m.id === movie.id);
    let newMovies = movies.slice();
    newMovies[idx] = {
      ...movies[idx],
      favourite: isFavourite
    };

    this.setState({movies: newMovies});
  }

  loadMovies = (movies) => {
    if (!movies.results.length) 
      return;
    let newMovies = this
      .state
      .movies
      .concat(movies.results);
    newMovies.map(movie => {
      let fav = this
        .state
        .favourites
        .find(fm => fm.id === movie.id);
      if (fav) {
        movie.favourite = true;
      } else {
        movie.favourite = false;
      }
    });
    this.setState({movies: newMovies});
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (<AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}/>);
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content"/>}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay}/>}
          <AppNavigator
            favourites={this.state.favourites}
            movies={this.state.movies}
            loadMovies={(movies) => this.loadMovies(movies)}
            saveFavourite={(movie) => this.saveFavourite(movie)}
            removeFavourite={(movie) => this.removeFavourite(movie)}/>
        </View>
      );
    }
  }

  _loadResourcesAsync = async() => {
    return Promise.all([
      Asset.loadAsync([require('../assets/images/no_img.jpg')]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free to remove
        // this if you are not using it in your app
        'dosis-regular': require('../assets/fonts/Dosis-Regular.ttf'),
        'dosis-medium': require('../assets/fonts/Dosis-Medium.ttf'),
        'dosis-bold': require('../assets/fonts/Dosis-Bold.ttf'),
        'dosis-extraBold': require('../assets/fonts/Dosis-ExtraBold.ttf')
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
});

export default App;
