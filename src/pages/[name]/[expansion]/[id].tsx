import { useEffect } from "react";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import Head from "next/head";
import axios from "axios";

import { Civilizations } from "../..";
import api from "../../../api";

import CivilizationContainer from "../../../components/Civilization";

export interface UniqueTech {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  develops_in: string;
  cost: {
    Food: number;
    Gold: number;
  };
  build_time: number;
  applies_to: string[];
}

export interface UniqueUnit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  created_in: string;
  cost: {
    Food: number;
    Gold: number;
  };
  build_time: number;
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: number;
  attack: number;
  armor: string;
  attack_bonus: string[];
  accuracy: string;
}

export interface Props {
  civilization: Civilizations;
  uniqueTech: UniqueTech;
  uniqueUnit: UniqueUnit;
}

const Civilization = ({ civilization, uniqueTech, uniqueUnit }: Props) => {
  return (
    <>
      <Head>
        <title>
          {civilization.name} - {civilization.expansion}
        </title>
      </Head>
      <CivilizationContainer
        civilization={civilization}
        uniqueTech={uniqueTech}
        uniqueUnit={uniqueUnit}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const id = ctx.params?.id;

  const { data: civilization }: { data: Civilizations } = await api.get(
    `/civilization/${id}`
  );
  const { data: uniqueTech } = await axios.get(civilization.unique_tech[0]);
  const { data: uniqueUnit } = await axios.get(civilization.unique_unit[0]);

  return {
    props: {
      civilization,
      uniqueTech,
      uniqueUnit,
      example:civilization.unique_tech[0]
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async (
  ctx: GetStaticPathsContext
) => {
  const { data: civilizations } = await api.get("/civilizations");

  const paths = civilizations.civilizations.map(
    (civilization: Civilizations) => ({
      params: {
        name: civilization.name.split(" ").join("-"),
        expansion: civilization.expansion.split(" ").join("-"),
        id: civilization.id.toString(),
      },
    })
  );

  return {
    paths,
    fallback: false,
  };
};

export default Civilization;
