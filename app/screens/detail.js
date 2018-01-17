import React, {Component} from 'react';
import { 
    View, 
    TouchableOpacity, 
    ScrollView, 
    Text, 
    ActivityIndicator,
    Image,
    Dimensions,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

// COMPONENTS
import LinearImage from '../components/linearImage';
import MovieInfo from '../components/movieInfo';
import Triangle from '../components/triangle';

// API
import { fetchMovieDetail } from '../api/tmdb';
import {BACKDROP, POSTER} from '../constants/api';

import { AppColors, AppStyles } from '../theme';

const {height, width} = Dimensions.get('window');

class DetailScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTransparent: true,
        title: null,
        headerTintColor: AppColors.brand.primary,
        headerBackTitleStyle: {
            display: 'none'
        },
        headerRight:(
            <TouchableOpacity 
                onPress={() => {navigation.state.params.setFavourite(screenProps.favourites.find(fm => fm.id === navigation.state.params.movie.id));} }
                style={{marginRight: 10}}
            >
                <Ionicons 
                    name={`ios-heart${screenProps.favourites.find(fm => fm.id === navigation.state.params.movie.id) ? '' : '-empty'}`} 
                    size={32} 
                    color={AppColors.brand.heart} 
                />
            </TouchableOpacity>
        ),
    });

    constructor() {
        super();
        this.state = {
            movie: {},
            infoLoaded: false
        }
    }

    componentWillMount() {
        this.getMovieDetail(this.props.navigation.state.params.movie.id);
    }

    getMovieDetail(id) {
        fetchMovieDetail(id).then((movie) => {
            this.setState({
                movie: movie,
                infoLoaded: true
            })
        });
    }

    renderMovieInfo() {
        const { movie } = this.state;
        if(this.state.infoLoaded) {
            return (
                <MovieInfo movie={movie} height={height} width={width} />
            )
        } else {
            return <ActivityIndicator />;
        }
    }

    render() {
        const { movie } = this.props.navigation.state.params;
        return (
            <View style={AppStyles.detail}>
                <ScrollView style={{backgroundColor: 'transparent'}}>
                    <LinearImage image={BACKDROP + movie.backdrop_path} />
                    <View style={{zIndex: 10, paddingTop: 200}}>
                        <Triangle
                            width={width}
                            extraStyle={{
                                position: 'absolute', 
                                top: 150,
                                borderBottomWidth: width,
                                borderLeftWidth: width/4, 
                                borderRightWidth: 0, 
                                width: width
                            }}
                        />
                        <View style={AppStyles.detailImageHolder}>
                            <Image
                                style={AppStyles.detailImage}
                                source={{
                                uri: POSTER + movie.poster_path
                            }}/>
                        </View>
                        <View style={{paddingTop: 250}}>
                            <Text style={AppStyles.movieTitle}>{movie.title.toUpperCase()}</Text>
                            {this.renderMovieInfo()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

export default DetailScreen;