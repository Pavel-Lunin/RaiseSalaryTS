import React, {useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {addFavoriteVacancy} from '../../api/api';
import {useDispatch} from 'react-redux';
import type {VacancyType} from '../../redux/actions/vacancy';

type Props = {
  item: VacancyType;
};

const VacancyItem: React.FC<Props> = ({item}) => {
  const dispatch = useDispatch();
  console.log(item);

  const handleFavoritePress = useCallback(() => {
    addFavoriteVacancy(item.id)(dispatch);
  }, [dispatch, item.id]);

  return (
    <TouchableOpacity onPress={handleFavoritePress}>
      <View style={styles.container}>
        <Text>{item.header}</Text>
      </View>
    </TouchableOpacity>
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

export default React.memo(VacancyItem);
