export interface StyledProps {
  pathname: string;
}
export interface EVENT {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
}
export type EVENT_DATA = Omit<EVENT, 'id'>;
