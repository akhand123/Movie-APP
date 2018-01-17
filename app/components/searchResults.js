import React, {Component} from 'react';
import {
    View, 
    Text, 
    FlatList, 
    Image
} from 'react-native';

import {POSTER} from '../constants/api';

import {AppStyles, AppColors} from '../theme';

import CardHolder from './cardHolder';

class SearchResults extends Component {

  render() {
    const {movies, height, width, navigate} = this.props;
    return (
        <FlatList
            style={[AppStyles.listView, {marginTop: 0}]}
            data={movies}
            renderItem={({ item, index }) => (
                <CardHolder 
                    movie={item} 
                    width={width}
                    row={index}
                    setFavourite={(isFavourite) => {
                        // TODO remove favourite on click
                    }}
                    onSelect={() => {
                        navigate('Detail', {
                            movie: item, 
                            favourite: movies.find(fm => fm.id === item.id),
                            setFavourite: (isFavourite) => this.setFavourite(isFavourite, item)
                        });
                    }}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
  }
};

export default SearchResults;