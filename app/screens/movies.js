import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions,
    SafeAreaView
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

// API
import {fetchMoviePopular} from '../api/tmdb';

// COMPONENTS
import CardHolder from '../components/cardHolder';

import {AppStyles, AppColors} from '../theme';

const {height, width} = Dimensions.get('window');

class MoviesScreen extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({headerRight: (
            <TouchableOpacity
                onPress={() => {
                navigation.navigate('Search')
            }}
                style={{
                marginRight: 10
            }}>
                <Ionicons name={'ios-search'} size={26} color={AppColors.topbar.icon}/>
            </TouchableOpacity>
        )});

    constructor() {
        super();
        this.state = {
            moviesLoaded: false,
            pagePending: true,
            next: 0
        };

        this.onEndReached = this
            .onEndReached
            .bind(this);
    }

    componentDidMount() {
        // LOAD MOVIES
        this.getMovies();
    }

    getMovies(page) {
        fetchMoviePopular(page).then((movies) => {
            this.processsResults(movies);
        });
    }

    processsResults(data) {
        this
            .props
            .screenProps
            .loadMovies(data);
        this.setState({
            moviesLoaded: true,
            pagePending: false,
            next: parseInt(data.page) + 1
        });
    }

    getDataSource(movies) {
        return this
            .state
            .dataSource
            .cloneWithRows(movies);
    }

    renderFooter() {
        if (!this.state.next && !this.state.pagePending) {
            return (
                <View>
                    <Text>Bottom</Text>
                </View>
            );
        }

        return <ActivityIndicator/>;
    }

    onEndReached() {
        if (this.state.next && !this.state.pagePending) {
            this.getMovies(this.state.next);
        }
    }

    setFavourite = (isFavourite, movie) => {
        if (isFavourite) {
            this
                .props
                .screenProps
                .removeFavourite(movie);
        } else {
            this
                .props
                .screenProps
                .saveFavourite(movie);
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        let {movies} = this.props.screenProps;
        if (!this.state.moviesLoaded) {
            return (
                <View style={AppStyles.container}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return (
            <View style={AppStyles.container}>
                <FlatList
                    style={AppStyles.listView}
                    data={this.props.screenProps.movies}
                    renderItem={({item, index}) => (<CardHolder
                    movie={item}
                    width={width}
                    row={index}
                    setFavourite={(isFavourite) => {
                    this.setFavourite(isFavourite, item);
                }}
                    onSelect={() => {
                    navigate('Detail', {
                        movie: item,
                        favourite: movies.find(fm => fm.id === item.id),
                        setFavourite: (isFavourite) => this.setFavourite(isFavourite, item)
                    });
                }}/>)}
                    onEndReached={this.onEndReached}
                    keyExtractor={item => item
                    .id
                    .toString()}/>
            </View>
        );
    }

}

export default MoviesScreen;