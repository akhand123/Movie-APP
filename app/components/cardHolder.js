import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Dimensions
} from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import {POSTER} from '../constants/api';

import {AppStyles, AppColors} from '../theme';

const { height } = Dimensions.get('window');

class CardHolder extends Component {

  render() {
    let {movie, width, row} = this.props;
    const descLength = 200;
    const trimmedDesc = movie.overview.length > descLength ? movie.overview.substring(0, descLength - 3) + "..." : movie.overview;
    const extraMargin = height >= 812 ? 20 : 0;
    let marginTop = row === 0 ? {marginTop:45+extraMargin} : {};
    return (
      <View style={[AppStyles.cardItem, marginTop]}>
        <TouchableOpacity activeOpacity={0.9} onPress={this.props.onSelect}>
          <View style={AppStyles.cardImageHolder}>
            <Image
              style={AppStyles.cardImage}
              source={{
              uri: POSTER + movie.poster_path
            }}/>
          </View>
          <View style={[AppStyles.cardInfoHolder, {width: width/1.7}]}>
            <View style={AppStyles.cardTextHolder}>
              <Text style={AppStyles.cardTitle}>{movie.title}</Text>
              <Text style={AppStyles.cardDate}>({movie.release_date.substring(0, 4)})</Text>
              <Text style={AppStyles.cardDesc}>{trimmedDesc}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            this.props.setFavourite(movie.favourite ? true : false);
            }} style={AppStyles.cardIconHolder}>
          <Ionicons 
            name={movie.favourite ? 'ios-heart' : 'ios-heart-empty'} 
            size={32}
            color={AppColors.brand.heart}
          />
        </TouchableOpacity>
        <View style={AppStyles.cardRating}>
          <Text style={AppStyles.iconText}>{movie.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    );
  }
};

export default CardHolder;