import { getNextStaticProps } from '@faustjs/next';
import { getProps } from '@faustjs/next/dist/cjs/server';
import { client } from 'client';
import { Footer, Header, Award } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { title } from 'process';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const awards = useQuery().awards().nodes;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <h2>Service Awards</h2>
      
      {awards.map(award => <Award data = {award} key = {award.id ?? ''} /> )}

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
