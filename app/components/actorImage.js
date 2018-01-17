import React, {Component} from 'react';
import {
    View, 
    Text, 
    FlatList, 
    Image
} from 'react-native';
import { LinearGradient } from 'expo';

import {PROFILE} from '../constants/api';

import {AppStyles, AppColors} from '../theme';

class ActorImage extends Component {

  render() {
    const {cast, width} = this.props;
    return (
        <View>
            <View style={[AppStyles.actorHolder, {width: width-20}]}>
                <Text style={AppStyles.movieH2}>CAST</Text>
                <FlatList
                    data={cast}
                    renderItem={({ item }) => (
                        <View style={{height: 160, width: 120, margin: 5}}>
                            {item.profile_path ?
                            <Image source={{uri: PROFILE+item.profile_path}} style={AppStyles.actorImage} />
                            :
                            <Image source={require('../../assets/images/no_img.jpg')} style={AppStyles.actorImage} />
                            }
                            <LinearGradient
                                colors={[AppColors.linearColorOpacity, 'transparent']}
                                start={[1, 0]}
                                end={[1, 0.5]}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    height: '100%',
                                    width: '100%',
                                    zIndex: 2,
                                    transform: [{ rotate: '180deg'}]
                                }}
                            />
                            <View style={AppStyles.actorNames}>
                                <Text style={AppStyles.actorName}>{item.name}</Text>
                                <Text style={AppStyles.actorChar}>{item.character}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                />
            </View>
        </View>
    );
  }
};

export default ActorImage;