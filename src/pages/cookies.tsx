import { getNextStaticProps } from '@faustjs/next';
import { getProps } from '@faustjs/next/dist/cjs/server';
import { client } from 'client';
import { Footer, Header, Cookie } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { title } from 'process';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const cookies = useQuery().cookies().nodes;


  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <h2>All the Cookies</h2>
      
     {cookies.map(cookie => {
          return <Cookie data={cookie} key={cookie.id ?? ''} />;
      })} 
        <pre>{JSON.stringify(cookies, null, 2)}</pre>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
