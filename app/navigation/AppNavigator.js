
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// SCREENS
import MoviesScreen from '../screens/movies';
import SavedScreen from '../screens/saved';
import DetailScreen from '../screens/detail';
import SearchScreen from '../screens/search';

// THEME
import { AppColors, AppStyles } from '../theme';

const MovieStack = createStackNavigator({
  Movies: {
    screen: MoviesScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName.toUpperCase()}`,
      headerStyle: AppStyles.headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'dosis-bold',
        color: AppColors.topbar.title
      }
    }),
  },
  Detail: DetailScreen,
  Search: SearchScreen,
});

const SavedStack = createStackNavigator({
  Saved: {
    screen: SavedScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routeName.toUpperCase()}`,
      headerStyle: AppStyles.headerStyle,
      headerTintColor: AppColors.topbar.title,
      headerTitleStyle: {
        fontFamily: 'dosis-bold'
      }
    }),
  },
  Detail: DetailScreen,
});

const RootStackNavigator = createBottomTabNavigator(
  {
    Movies: MovieStack,
    Saved: SavedStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Movies':
            iconName = 'movie-roll';//`ios-film${focused ? '' : '-outline'}`;
            color = AppColors.brand.primary;
            break;
          case 'Saved':
            iconName = 'heart-circle-outline';//`ios-heart${focused ? '' : '-outline'}`;
            color = AppColors.brand.secondary;
            break;
        }
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={34}
            color={focused ? AppColors.tabbar.iconSelected : AppColors.tabbar.iconDefault}//{color}//
          />
        );
      },
    }),
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: AppColors.tabbar.background, 
        borderTopColor: AppColors.tabbar.border,
        shadowColor: 'black',
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5
      },
      activeTintColor: AppColors.tabbar.iconSelected,
      inactiveTintColor: AppColors.tabbar.iconDefault,
      //showLabel: false,
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);

const AppNavigator = (props) => {
    return <RootStackNavigator screenProps={{
      movies: props.movies,
      favourites: props.favourites,
      loadMovies: (movies) => props.loadMovies(movies),
      saveFavourite: (movie) => props.saveFavourite(movie),
      removeFavourite: (movie) => props.removeFavourite(movie),
      }} />;
}

export default AppNavigator;