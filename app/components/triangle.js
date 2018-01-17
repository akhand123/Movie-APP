import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import {AppStyles, AppColors} from '../theme';

class Triangle extends Component {

  render() {
      const {extraStyle, width} = this.props;
    return (
        <View>
            <View style={[AppStyles.triangle, {...extraStyle}]} />
            <View style={{backgroundColor: AppColors.detailBackground, height: 150, position: 'absolute', top: (120+width), left: 0, width: '100%'}} />
        </View>
    );
  }
};

export default Triangle;