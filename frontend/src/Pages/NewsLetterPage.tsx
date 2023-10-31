import NewsLetterSignup from '../components/NewsLetterSignup';
import PageContent from '../components/PageContent';

/* eslint-disable @typescript-eslint/no-explicit-any */
const NewsLetter = () => {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsLetterSignup />
    </PageContent>
  );
};

export default NewsLetter;
export async function action({ request }: any) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log('SIGNUP...', email);
  return { message: 'Signup successful!' };
}
