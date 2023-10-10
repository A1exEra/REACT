/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { MEAL } from '../../types';
import MealItem from './Mealtem';
import Card from '../UI/Card';
import useHttp from '../../hooks/useHTTP';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
const URL = import.meta.env.VITE_FOODIE_URL;
function AvailableMeals() {
  const [meals, setMeals] = useState<MEAL[] | []>([]);
  const { isLoading, error, sendRequest: fetchData } = useHttp();
  useEffect(() => {
    const transformData = (data: any) => {
      const loadedData: MEAL[] = [];
      data.forEach((item: MEAL) =>
        loadedData.push({
          id: Math.floor(Math.random() * 100 + 1).toString(),
          description: item.description,
          name: item.name,
          price: item.price,
        })
      );
      setMeals(loadedData);
    };
    fetchData({ url: `${URL}/menuItems.json` }, transformData);
  }, []);
  if (isLoading) {
    return (
      <Styled>
        <LoadingSpinner />
      </Styled>
    );
  }
  if (error) {
    return (
      <Styled>
        <p className="error">{error}</p>
      </Styled>
    );
  }
  const mealsList = meals.map((meal: MEAL) => (
    <MealItem key={meal.id} meal={meal} />
  ));
  return (
    <Styled>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </Styled>
  );
}

const Styled = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .error {
    color: red;
    text-align: center;
    font-size: 23px;
  }
`;
export default AvailableMeals;
