/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';

import axios from 'react-native-axios';
import {useDispatch} from 'react-redux';

import {setVacancy} from './src/redux/actions/vacancy';

//type itemType = {

//}

const App = () => {
  const [vacancies, setVacancies] = useState({});
  const [togl, setTogl] = useState(false);

  console.log(vacancies);
  const dispatch = useDispatch();

  dispatch(setVacancy('ggg'));
  //не подсвечивает TS

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('https://api.zp.ru/v1/vacancies')
        .then(response => setVacancies(response.data.vacancies));
    };

    getData();
  }, [togl]);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.container}>
        <Text>{item.header}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={vacancies} renderItem={renderItem} />
      <Button title="press" onPress={() => setTogl(!togl)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 3,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
