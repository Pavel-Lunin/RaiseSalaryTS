export type setVacancyType = {
  type: string;
  vacancy: VacancyType;
};

type VacancyType = {
  id: string;
  header: string;
};

export const setVacancy = (vacancy: VacancyType) => ({
  type: 'vacancy/SET_VACANCY',
  payload: vacancy,
});
