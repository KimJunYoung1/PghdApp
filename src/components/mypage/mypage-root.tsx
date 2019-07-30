import { Button } from 'native-base';
import * as React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MiniProfile } from './mini-profile';
import { PghdRecord } from './pghdrecord';
// import { styles } from './style';

const mainColor: string = '#5800ff';
// const andsigninbtn: string = '#343434';

// const logourl: string = 'https://humanscape.io/images/logo-black.png';

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowRadius: 20,
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  mainButton: {
    width: '90%',
    height: 60,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        borderRadius: 50,
      },
      android: {
        borderRadius: 10,
      },
    }),
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  todayRecord: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
  },
});

export interface Props {}
export interface State {}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#F0F0F5',
          flexDirection: 'column',
        }}
      >
        <ScrollView>
          <MiniProfile />
        </ScrollView>
      </View>
    );
  }
}
