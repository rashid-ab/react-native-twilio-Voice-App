import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {getColorTheme} from '../../theme/theme';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthDP} from '../../components/Responsive';
const Call = () => {
  const [mic, setMic] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [dialpad, setDialpad] = useState(false);
  const theme = useSelector(state => state.theme.value);
  const colors = getColorTheme(theme);
  return (
    <View style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
      <View style={{flex: 0.9, alignItems: 'center'}}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/avatars.png')}
        />
        <Text style={[styles.name, {color: colors.labelColor}]}>
          Devon Lane
        </Text>
        <Text style={[styles.number, {color: colors.labelColor}]}>
          +31 (207) 555-0129
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setMic(!mic)}
            style={styles.buttons}>
            <Feather
              onPress={() => setMic(!mic)}
              name={'mic-off'}
              size={widthDP(30)}
              color={!mic ? 'grey' : colors.themeColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setSpeaker(!speaker)}
            style={styles.buttons}>
            <FontAwesome
              onPress={() => setSpeaker(!speaker)}
              name={'volume-up'}
              size={widthDP(30)}
              color={!speaker ? 'grey' : colors.themeColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setDialpad(!dialpad)}
            style={styles.buttons}>
            <Entypo
              onPress={() => setDialpad(!dialpad)}
              name={'dial-pad'}
              size={widthDP(30)}
              color={!dialpad ? 'grey' : colors.themeColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.1}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => alert('CALL END')}
          style={[styles.buttons,{backgroundColor:'red'}]}>
          <MaterialIcons
            onPress={() => console.log('Call end')}
            name={'call-end'}
            size={widthDP(30)}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Call;
