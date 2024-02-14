import Toast from 'react-native-toast-message';

export const showToast = (type, header, message) => {
  Toast.show({
    type: type,
    text1: header,
    text2: message,
    props: {
      // text1NumberOfLines : 0,
      // text2NumberOfLines: 4,
    },
  });
};
