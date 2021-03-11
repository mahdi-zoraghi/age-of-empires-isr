import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { useEffect } from "react";
import api from "../api";

import Card from "../components/Card";

import styles from "../styles/Home.module.css";

export interface Civilizations {
  army_type: string;
  civilization_bonus: string[];
  expansion: string;
  id: number;
  name: string;
  team_bonus: string;
  unique_tech: string[];
  unique_unit: string[];
}

export interface Props {
  civilizations: Civilizations[];
}

const Home = ({ civilizations }: Props) => {
  return (
    <>
      <Head>
        <title>Civilizations List</title>
      </Head>
      <section className={styles.container}>
        {civilizations?.map((civilization) => (
          <Card civilization={civilization} key={civilization.id} />
        ))}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { data: civilizations } = await api.get("/civilizations");

  return {
    props: {
      civilizations: civilizations.civilizations,
    },
    revalidate: 1,
  };
};

export default Home;
