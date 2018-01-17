import React, {Component} from 'react';
import { View, Text, Dimensions, SafeAreaView } from 'react-native';

import { AppStyles } from '../theme';

import SavedMovie from '../components/savedMovie';

const {height, width} = Dimensions.get('window');

class SavedScreen extends Component {

    render() {
        const { favourites } = this.props.screenProps;
        const { navigate } = this.props.navigation;
        return (
            <View style={AppStyles.container}>
                <SavedMovie movies={favourites} navigate={navigate} saveFavourite={(movie) => this.props.screenProps.saveFavourite(movie)} removeFavourite={(movie) => this.props.screenProps.removeFavourite(movie)} width={width} height={height} />
            </View>
        );
    }

}

export default SavedScreen;