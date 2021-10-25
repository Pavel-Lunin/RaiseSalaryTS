import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, FlatList} from 'react-native';

import {getData, VacanciesTypes} from './src/api/api';
import VacancyItem from './src/elements/vacancy-item/vacancy-item';

const App: React.FC = () => {
  const [vacancies, setVacancies] = useState<Array<VacanciesTypes>>([]);

  const [togl, setTogl] = useState(false);

  useEffect(() => {
    getData(setVacancies);
  }, [togl]);

  const renderItem = ({item}: {item: VacanciesTypes}) => {
    return <VacancyItem item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList data={vacancies} renderItem={renderItem} />
      <Button title="press" onPress={() => setTogl(!togl)} />
    </SafeAreaView>
  );
};

export default App;
