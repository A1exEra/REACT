import styled from 'styled-components';
import { MEAL } from '../../types';
import MealItem from './Mealtem';
import Card from '../UI/Card';
const DUMMY_MEALS: MEAL[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal: MEAL) => (
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
`;
export default AvailableMeals;
