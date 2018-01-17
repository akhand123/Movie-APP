import Colors from './colors';

export default {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    //marginTop: 45,
  },
  // HEADER
  headerStyle: {
    backgroundColor: Colors.topbar.background,
    //borderBottomWidth: 0,
    borderBottomColor: Colors.topbar.border,
    height: 45,
    shadowColor: 'black',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  headerDetailStyle: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent', 
    borderBottomColor: 'transparent',
    height: 45
  },
  listView: {
    marginTop: -30,
    //paddingTop: 50,
    backgroundColor: Colors.background
  },
  // CARDS
  cardItem: {
    backgroundColor: Colors.cardBackground,
    padding: 0,
    height: 180,
    margin: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  cardImageHolder: {
    position: 'absolute',
    left: 10,
    top: -10,
    height: 180,
    width: 121
  },
  cardImage: {
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  linearGradiant : {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    zIndex: 2,
    borderRadius: 3,
    transform: [
      {
        rotate: '180deg'
      }
    ]
  },
  cardInfoHolder: {
    top: 0,
    left: 130,
    zIndex: 3,
    backgroundColor: 'transparent'
  },
  cardTextHolder: {
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 0
  },
  cardTitle: {
    fontSize: 14,
    color: '#4D4E52',
    lineHeight: 20,
    fontFamily: 'dosis-bold'
  },
  cardDate: {
    fontSize: 12,
    color: '#4D4E52',
    lineHeight: 20,
    fontFamily: 'dosis-regular'
  },
  cardDesc: {
    fontSize: 12,
    color: '#4D4E52',
    lineHeight: 16,
    fontFamily: 'dosis-regular'
  },
  cardIconHolder: {
    position: 'absolute', 
    zIndex: 4, 
    right: 10, 
    bottom: 5, 
    backgroundColor: 'transparent'
  },
  cardRating: {
    position: 'absolute',
    left: 2,
    bottom: 2,
    backgroundColor: Colors.brand.secondary,
    width: 35,
    height: 35,
    borderRadius: 25,
    overflow: 'hidden'
  },
  iconText: {
    position: 'absolute',
    width: 35,
    height: 35,
    textAlign: 'center',
    top: 8,
    left: 0,
    fontSize: 13,
    fontFamily: 'dosis-bold',
    color: '#fff'
  },
  // DETAIL SCREEN
  detail: {
    backgroundColor: Colors.detailBackground,
    flex: 1,
  },
  detailImageHolder: {
    position: 'absolute',
    left: 10,
    top: 260,
    height: 180,
    width: 121
  },
  detailImage: {
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: { height: 4, width: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4
  },
  detailInfoHolder: {
    flexDirection: 'column',
    backgroundColor: Colors.detailBackground
  },
  movieTitle: {
    color: Colors.textPrimary, 
    fontSize: 23, 
    fontFamily: 'dosis-bold', 
    padding: 10
  },
  genreText: {
    color: Colors.textPrimary,
    fontSize: 12,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#e3e3e3',
    overflow: 'hidden',
    borderRadius: 13,
    margin: 5,
    marginLeft: 0,
    marginRight: 10
  },
  movieText: {
    color: Colors.textPrimary,
  },
  movieSubText: {
    color: '#999',
    fontSize: 11,
    paddingBottom: 5
  },
  movieDescription: {
    fontFamily: 'dosis-medium',
    fontSize: 16
  },
  movieH2: {
    fontFamily: 'dosis-bold',
    fontSize: 14,
    color: '#606879',
    paddingTop: 20,
    paddingBottom: 10
  },
  // ACTOR
  actorHolder: {
    marginLeft: 10, 
    marginBottom: 50
  },
  actorImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  actorNames: {
    position: 'absolute',
    width: '100%',
    left: 5,
    bottom: 10,
    backgroundColor: 'transparent',
    zIndex: 3,
  },
  actorName: {
    fontFamily: 'dosis-bold',
    color: '#fff',
    fontSize: 11,
  },
  actorChar: {
    fontFamily: 'dosis-bold',
    color: '#999',
    fontSize: 11,
  },
  // SAVED
  savedCardHolder: {
    flexDirection: 'row', 
    backgroundColor: 'rgba(255,255,255,.1)',
    margin: 15,
    marginRight: 0,
    marginLeft: 0,
    height: 150
  },
  savedImage: {
    height: 160,
    width: 120,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    marginTop: -10,
    borderRadius: 3
  },
  savedTextHolder: {
    padding: 10
  },
  savedTitle: {
    fontSize: 16,
    fontFamily: 'dosis-medium',
    color: '#fff'
  },
  // UTILS
  triangle: {
    width: 200,
    height: 0,
    borderBottomWidth: 100,
    borderBottomColor: Colors.detailBackground,
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    transform: [
      {rotate: '90deg'}
    ]
  },
  triangleBack: {
    backgroundColor: Colors.detailBackground,
    height: 300,
    position: 'absolute',
    left: 0
  },
}