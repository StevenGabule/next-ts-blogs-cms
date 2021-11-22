/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';

type Props = {
  userData: any;
};

const About: NextPage<Props> = ({ userData }: Props) => {
  const [user, _] = useState(userData);
  return (
    <Layout title={`About me ${user.name}`}>
      {user && (
        <p style={{ textAlign: 'center' }}>
          <Image src={user.avatar_url} alt={user.name} width={200} height={200} />
          <br />
          Name: {user.name} <br />
          Bio: {user.bio}
        </p>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await (await fetch('https://api.github.com/users/stevengabule')).json();

  return {
    props: {
      userData: data,
    },
  };
};

export default About;
