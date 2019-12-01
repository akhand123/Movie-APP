import React from "react";
import { StackNavigator } from "react-navigation";
import Movies from '../Containers/Movies';
import MovieDetailsScreen from '../Containers/MovieDetailsScreen';
import Search from '../Containers/Search';

const PrimaryNav = StackNavigator(
	{
		Movies: { screen: Movies },
		MovieDetails: { screen: MovieDetailsScreen },
		Search: { screen: Search },
	},
	{
		initialRouteName: "Movies",
		headerMode: 'none',
	}
);

export default PrimaryNav;
