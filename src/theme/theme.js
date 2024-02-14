const lightCOLORS = {
  backgroundColor: 'white',
  labelColor: 'black',
  copyRightColor: '#28203D',
  inputTextColor: 'black',
  commonColor: 'white',
  tabBarBackgroundColor:'#fff',
  commonTextInputColor: '#F9F9F9',
  commonTabBarBorderColor: '#d7d9d7',
  commonGreyColor: '#979997',
  themeColor: '#6039BB',
};

const darkCOLORS = {
  backgroundColor: 'black',
  labelColor: 'white',
  copyRightColor: 'white',
  inputTextColor: 'black',
  commonColor: 'white',
  tabBarBackgroundColor:'#212121',
  commonTextInputColor: '#F9F9F9',
  commonTabBarBorderColor: '#979997',
  commonGreyColor: '#979997',
  themeColor: '#6039BB',
};
export const getColorTheme = theme => {
  return theme == 'light' ? lightCOLORS : darkCOLORS;
};
