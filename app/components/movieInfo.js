import React, {Component} from 'react';
import {
    View, 
    Text, 
    FlatList, 
    WebView, 
    Image
} from 'react-native';

import {PROFILE} from '../constants/api';

import {AppStyles, AppColors} from '../theme';

// COMPONENTS
import ActorImage from './actorImage';

class MovieInfo extends Component {

  render() {
    const {movie, height, width} = this.props;
    return (
        <View style={AppStyles.detailInfoHolder}>
            <View style={{marginLeft: 10, width: width-20}}>
                <Text style={AppStyles.movieSubText}>{movie.release_date}, {movie.runtime} min, ({movie.status})</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 10}}>
                {movie.production_companies.map((company, i) => {
                    let comma = ' & ';
                    if(i+1 === movie.production_companies.length) comma = '';
                    return <Text key={company.id} style={[AppStyles.movieText, {padding: 0}]}>{company.name + comma}</Text>;
                })}
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {movie.genres.map((genre, i) => {
                    return <Text key={genre.id} style={AppStyles.genreText}>{genre.name}</Text>;
                })}
                </View>
                <Text style={AppStyles.movieH2}>STORYLINE</Text>
                <Text style={[AppStyles.movieText, AppStyles.movieDescription]}>{movie.overview}</Text>
                <Text style={AppStyles.movieH2}>TRAILERS</Text>
                <FlatList
                    data={movie.videos.results}
                    renderItem={({ item }) => (
                        <WebView
                            style={{flex:1, height: 200, width: width-20, margin: 5}}
                            javaScriptEnabled={true}
                            scrollEnabled={false}
                            source={{uri: `https://www.youtube.com/embed/${item.key}?rel=0&autoplay=0&showinfo=0&controls=0`}}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                />
            </View>
            <ActorImage cast={movie.credits.cast} width={width} />
        </View>
    );
  }
};

export default MovieInfo;