import {StyleSheet, View} from 'react-native';
import AudioRecord from '../../components/AudioRecord';
import ManagerChat from '../../components/ManagerChat';
import Swiper from 'react-native-swiper';

function MessageScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Swiper>
        <ManagerChat navigation={navigation}></ManagerChat>
        <AudioRecord></AudioRecord>
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});
export default MessageScreen;
