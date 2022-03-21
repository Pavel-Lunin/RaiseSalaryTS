import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { addFavoriteVacancy, deleteFavoriteVacancy } from '../../redux/actions/vacancy';
import { useDispatch } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';
import type { VacancyType } from '../../redux/actions/vacancy';

type Props = {
    item: VacancyType;
    favoriteVacancy: Set<number>;
};

const VacancyItem: React.FC<Props> = ({ item, favoriteVacancy }) => {
    const dispatch = useDispatch();
    const toast = useToast();

    const favoriteVacancyId = useMemo(() => favoriteVacancy.has(item.id), [favoriteVacancy, item.id]);

    const handleFavoritePress = useCallback(
        (favVacancyId: boolean) =>
            favVacancyId
                ? () =>
                      deleteFavoriteVacancy(item.id)(dispatch)
                          .then(() => {
                              toast.show('Удалено в избранного');
                          })
                          .catch(() => {
                              toast.show('Ошибка удаления');
                          })
                : () =>
                      addFavoriteVacancy(item.id)(dispatch)
                          .then(() => {
                              toast.show('Добавлено в избранное');
                          })
                          .catch(() => {
                              toast.show('Ошибка добавления в избранное');
                          }),
        [item.id, dispatch, toast]
    );

    let favoriteStyle = styles.container;

    const favStyle = {
        borderColor: '#d61414',
        marginHorizontal: 8,
        backgroundColor: '#f8f410'
    };

    if (favoriteVacancy.has(item.id)) {
        favoriteStyle = { ...styles.container, ...favStyle };
    }

    return (
        <TouchableOpacity onPress={handleFavoritePress(favoriteVacancyId)}>
            <View style={favoriteStyle}>
                <View style={styles.textStyle}>
                    <Text>{item.header}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 80,
        borderColor: '#000',
        borderWidth: 2,
        marginHorizontal: 16,
        marginVertical: 3,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        marginTop: 2,
        marginHorizontal: 2
    }
});

export default React.memo(VacancyItem);
