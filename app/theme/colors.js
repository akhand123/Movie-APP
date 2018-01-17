const app = {
    background: '#F4F5F9',//'#49477A',
    cardBackground: '#fff',
    listItemBackground: '#FFFFFF',
    linearColor: '#37CEBD',//'#151C25',
    linearColorOpacity: 'rgba(21, 28, 37,.7)',
    detailBackground: '#fff',
  };
    
  const brand = {
    brand: {
      primary: '#FFBC00',//'#37CEBD',//'#FECA13',//'#0E4EF8',
      primaryOpacity: '#DEDEDE',//'rgba(55, 206, 189, .5)',
      secondary: '#FFBC00',//'#FFA044',//'#17233D',
      heart: '#e31b23'
    },
  };
    
  const text = {
    textPrimary: '#15182D',//'#222222',
    textSecondary: '#BABDC2',//'#777777',
    textThirdly: '#D0D1D5',
    headingPrimary: brand.brand.primary,
    headingSecondary: brand.brand.primary,
  };
    
  const borders = {
    border: '#D0D1D5',
  };

  const topBar = {
    topbar: {
      background: '#fff',//'rgba(21, 28, 37,.7)',
      border: '#eee',
      title: brand.brand.primary,
      icon: '#999'
    }
  };
    
  const tabbar = {
    tabbar: {
      background: '#ffffff',//'rgba(21, 28, 37,.7)',//'#151C25',//'#ffffff',
      border: 'transparent',//'#eee',//'rgba(21, 28, 37,.7)',//'#151C25',
      iconDefault: brand.brand.primaryOpacity, //'#333'
      iconSelected: brand.brand.primary,
    },
  };
  
  const indicator = {
    spinner: brand.brand.primaryOpacity,
    launch: '#fff'
  };
  
    
  export default {
    ...app,
    ...brand,
    ...text,
    ...borders,
    ...topBar,
    ...tabbar,
    ...indicator,
  };