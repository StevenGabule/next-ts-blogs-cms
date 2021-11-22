import { NextPage } from 'next';
import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post: NextPage = ({ router }: any) => (
  <Layout title={router.query.title}>
    <p style={{ width: '70%' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam soluta, placeat nam ex nobis molestiae voluptatem natus magni
      fugit aut iste animi quisquam debitis blanditiis excepturi voluptatibus quasi sequi!
    </p>
  </Layout>
);

export default withRouter(Post);
