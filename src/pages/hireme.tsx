import { NextPage } from 'next';
import Layout from '../components/Layout';

const HireMe: NextPage = () => (
  <Layout title={'Hire me!'}>
    <p>
      You can hire me <a href="mailto:lucas.gabule@gmail.com">lucas.gabule@gmail.com</a>
    </p>
  </Layout>
);

export default HireMe;
