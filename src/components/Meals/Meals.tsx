import styled from 'styled-components';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
function Meals() {
  return (
    <Styled>
      <MealsSummary />
      <AvailableMeals />
    </Styled>
  );
}

const Styled = styled.div``;
export default Meals;
