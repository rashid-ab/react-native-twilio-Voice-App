import {CommonActions} from '@react-navigation/native';

let navigatorRef;

function setTopLevelNavigator(ref) {
  navigatorRef = ref;
}

function navigate(routeName, params) {
  navigatorRef.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

function reset(routeName) {
  navigatorRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName}],
    }),
  );
}

function goBack() {
  navigatorRef.dispatch(CommonActions.goBack());
}

export default {
  navigate,
  reset,
  setTopLevelNavigator,
  goBack,
};
