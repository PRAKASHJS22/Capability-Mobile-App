import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8F9F9',
    height: '15%',
    padding: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: '#008DD2',
    fontSize: 18,
  },
  container2: {
    justifyContent: 'center',
    backgroundColor: '#008DD2',
    marginTop: 5,
    height: '5%',
  },
  text1: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  container4: {
    flexDirection: 'row',
    margin: 20,
    padding: 10,
  },
  text2: {
    color: 'grey',
    marginStart: 10,
    fontSize: 16,
  },
  text3: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text4: {
    fontSize: 15,
    color: 'grey',
  },
  container3: {
    width: 350,

    margin: 20,
    //marginHorizontal:15,

  },
  text5: {
    fontSize: 15,
    color: 'grey',
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'right',
  },
  cardContainer: {
    height: 600,

    marginBottom: 10,
    padding:10,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 5,
  },
  button: {
    marginHorizontal: 5,
    marginTop: 10,
    height: 40,
    width: 280,
    borderRadius: 10,
    backgroundColor: '#008DD2',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1.5,
  },
});
export default styles;