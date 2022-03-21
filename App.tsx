import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ToastType, useToast } from 'react-native-toast-notifications';
import { getData, VacanciesTypes } from './src/redux/actions/vacancy';

import VacancyItem from './src/elements/vacancy-item/vacancy-item';
import Loader from './src/elements/loader/loader';
import { AppStateType } from './src/redux/reducers';

const App: React.FC = () => {
    const { favoriteVacancy, vacancies, isLoading } = useSelector((state: AppStateType) => ({
        favoriteVacancy: state.favorite,
        vacancies: state.vacancy.vacancy,
        isLoading: state.vacancy.isLoading
    }));

    const dispatch = useDispatch();

    const toast: ToastType = useToast();

    useEffect(() => {
        getData()(dispatch)
            .then(() => {
                toast.show('Успешно загружено');
            })
            .catch(() => {
                toast.show('Ошибка');
            });
    }, [dispatch, toast]);

    const renderItem = useCallback(
        ({ item }: { item: VacanciesTypes }) => {
            return <VacancyItem item={item} favoriteVacancy={favoriteVacancy} />;
        },
        [favoriteVacancy]
    );

    const vacancyList = () => (
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <FlatList data={vacancies} renderItem={renderItem} />
        </SafeAreaView>
    );

    const content = !isLoading ? vacancyList() : <Loader />;

    return content;
};

export default App;
