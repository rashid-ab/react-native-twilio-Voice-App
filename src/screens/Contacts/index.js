import { ActivityIndicator, ScrollView, View } from 'react-native';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { getColorTheme } from '../../theme/theme';
import Header from './components/header';
import ListItem from './components/listItem';
import { FlatList } from 'react-native-gesture-handler';
// const data = [
//   { displayName: '', image: true, image: true, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Furqan Jameel', image: true, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Daud Butt', image: false, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Hafiz Daud', image: true, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Nauman Ali', image: false, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Amir Jamil', image: false, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Abdul Qayyum', image: true, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Talha Abit', image: false, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Rashid Ali butt', image: true, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Haider Ali Gujjar', image: false, phoneNumbers: [{ number: '03222464082' }] },
//   { displayName: 'Rizwan Aslam Butt', image: true, phoneNumbers: [{ number: '03222464082' }] },
// ];
const Contacts = React.memo(({ path }) => {
  const [selectedChildIndex, setSelectedChildIndex] = useState(null);
  const theme = useSelector(state => state.theme.value);
  let contactList = useSelector(state => state.contacts.contacts);
  // contactList=contactList.slice(0, 10)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [list, setList] = useState(20)
  const [data, setData] = useState(contactList.slice(0, 20))
  const handleChildPress = index => {
    setSelectedChildIndex(index);
  };
  console.log('path', path)
  // const renderFooter = () => {
  //   return isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  // };
  // const handleEndReached = useCallback(() => {
  //   console.log('Next')
  //   if (path != 'Home') {
  //     setPage(Number(page) + 20)
  //     setList(Number(list) + 20)
  //     setData(prev => {
  //       console.log('sts')
  //       return [...prev, ...contactList.slice(Number(page) + 20, Number(list) + 20)]
  //     })
  //   }
  // }, [page]);
  const handleEndReached = () => {
    // Fetch more data when end of the list is reached
    console.log('Next')
    if (path != 'Home') {
      setPage(Number(page) + 20)
      setList(Number(list) + 20)
      setData(prev => {
        console.log('sts')
        return [...prev, ...contactList.slice(Number(page) + 20, Number(list) + 20)]
      })
    }
  };
  // const renderItem = (item) => (

  // );
  const colors = getColorTheme(theme);
  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <Header colors={colors} path={path} />
      <View style={styles.list}>
        <ScrollView 
          // pagingEnabled
          // nestedScrollEnabled
          onScrollEndDrag={handleEndReached}
          showsVerticalScrollIndicator={false}
        >
          {data.map((item, index) => (
            <ListItem
              item={item}
              key={index}
              index={index}
              // isSelected={selectedChildIndex}
              // onPress={handleChildPress}
              path={path}
            />
          ))}
          {/* <FlatList
            data={data}
            initialNumToRender={10}
            maxToRenderPerBatch={5}
            onEndReached={handleEndReached}
            removeClippedSubviews={true}
            // onEndReachedThreshold={0.7} // Adjust as needed, represents the fraction of the total height of the list
            renderItem={({ item, index }) => (
              item.phoneNumbers.length ? */}

          {/* : <></>
            )} */}
          {/* keyExtractor={({item,index}) => index}
          /> */}
        </ScrollView>
      </View>
    </View>
  );
}, (prevProps, nextProps) => {
  // Compare the previous props with the new props
  // Return true if you want the component to re-render, false otherwise

  return false;
});

export default Contacts;
