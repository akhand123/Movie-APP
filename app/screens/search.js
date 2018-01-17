import React, {Component} from 'react';
import { 
  View, 
  Dimensions,
  ScrollView
} from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';

// API
import { searchMovie, searchSuggestions } from '../api/tmdb';
import {POSTER} from '../constants/api';

import { AppColors, AppStyles } from '../theme';

import SearchResults from '../components/searchResults';

const {height, width} = Dimensions.get('window');

class SearchScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerStyle: AppStyles.headerStyle,
        title: 'SEARCH',
        headerTintColor: AppColors.brand.primary,
        headerBackTitleStyle: {
            display: 'none'
        },
    });
    
    state = {
      query: '',
      search: [],
      page: 1,
      totalPages: 0,
      loading: false,
      suggestions: [],
      lastSearch: ''
    }

    getMovies = () => {
      this.setState({loading: true, suggestions: []});
      searchMovie(encodeURIComponent(this.state.query)).then(data => {
        this.setState({
          search: data.results,
          page: data.page,
          totalPages: data.total_pages,
          loading: false,
          query: '',
          lastSearch: this.state.query
        });
        this.search.clearText();
      });
    }

    getSearchAutoCompletion = async (text) => {
      if (text) {
        this.setState({query: text});
        searchSuggestions(text).then(data => {
          let results = [];
          data.results.forEach(obj => {
            if(obj === Object(obj)) {
              if (obj.media_type === 'movie') results.push(obj);
            } else {
              results.push({title: obj});
            }
          });
          this.setState({
            suggestions: results
          });
        });
      }
  }

  setSuggestion(suggestion) {
    this.setState({
      query: suggestion,
      suggestions: []
    });
    setTimeout(() => {
      this.getMovies();
    }, 100);
  }

  renderSuggestions() {
    if(this.state.suggestions.length) {
      return (
        <ScrollView>
          <List containerStyle={{marginTop: 0, borderTopWidth: 0, borderBottomColor: '#eee'}}>
            {
              this.state.suggestions.map((suggestion, i) => (
                <ListItem
                  key={i}
                  title={suggestion.title}
                  onPress={() => this.setSuggestion(suggestion.title)}
                  leftIcon={{name: suggestion.media_type ? 'movie-filter' : 'search'}}
                />
              ))
            }
          </List>
        </ScrollView>
      );
    } else {
      return null;
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const extraMargin = height >= 812 ? 20 : 0;
    return (
      <View style={[AppStyles.container]}>
          <SearchBar
            lightTheme
            containerStyle={{backgroundColor: '#fff', borderBottomWidth: 0, borderTopWidth: 0}}
            inputStyle={{backgroundColor: '#eee', height: 30}}
            loadingIcon={{color: AppColors.brand.secondary}}
            clearIcon={{color: this.state.query.length ? '#86939e' : 'transparent'}}
            //placeholderTextColor={AppColors.textSecondary}
            ref={search => this.search = search}
            onChangeText={(text) => this.getSearchAutoCompletion(text)}
            // onClearText={someMethod}
            placeholder='Search...'
            showLoadingIcon={this.state.loading}
            onSubmitEditing={() => this.getMovies()}
          />
          {this.renderSuggestions()}

          <SearchResults movies={this.state.search} width={width} height={height} navigate={navigate} />
      </View>
    );
  }
}

export default SearchScreen;