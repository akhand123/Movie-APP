import React, {Component} from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

import {AppColors} from '../theme';

const {height, width} = Dimensions.get('window');

class LinearImage extends Component {

    render() {
        return (
        <View style={{
            flex: 1, 
            position: 'absolute',
            top: 0,
            height: height-50,
            width: '100%',
            zIndex: 1
        }}>
            <Image source={{uri: this.props.image}} style={{
                position: 'absolute',
                top: 0,
                height: height-50,
                width: '100%',
                zIndex: 1
            }} 
            />
            <LinearGradient
            colors={[AppColors.linearColor, 'transparent']}
            start={[1, 0]}
            end={[1, 0.8]}
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: height-50,
                width: '100%',
                zIndex: 2,
                transform: [{ rotate: '180deg'}]
            }}
            />
        </View>
        );
    }
}

export default LinearImage;