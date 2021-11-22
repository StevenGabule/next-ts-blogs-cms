import Link from 'next/link';
import Layout from '../components/Layout';

type Props = {
  title: string;
  slug: string;
};

const PostLink = ({ title, slug }: Props) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blogs = () => (
  <Layout title={'My Blogs'}>
    <ul>
      <PostLink slug={'react-post'} title={'React Post'} />
      <PostLink slug={'angular-post'} title={'Angular Post'} />
      <PostLink slug={'vue-post'} title={'Vue Post'} />
    </ul>
  </Layout>
);

export default Blogs;
