import { Card, Space, Typography, List, Divider } from "antd";

import { Civilizations } from "../pages";
import {
  UniqueTech as IUniqueTech,
  UniqueUnit as IUniqueUnit,
} from "../pages/[name]/[expansion]/[id]";

import UniqueTech from "../components/UniqueTech";
import UniqueUnit from "./UniqueUnit";

import styles from "../styles/Civilization.module.css";

export interface Props {
  civilization: Civilizations;
  uniqueTech: IUniqueTech;
  uniqueUnit: IUniqueUnit;
}

const Civilization = ({ civilization, uniqueTech, uniqueUnit }: Props) => {
  const { Title, Text, Paragraph } = Typography;

  return (
    <div className={styles.wrapper}>
      <h1>Civilization Component</h1>
      <Card title={<Title level={2}>{civilization.name}</Title>}>
        <main className={styles.flex}>
          <Paragraph>Expansion: {civilization.expansion}</Paragraph>
          <Paragraph>Army Type: {civilization.army_type}</Paragraph>
        </main>
        <br />
        <Paragraph>Team Bonus: {civilization.team_bonus}</Paragraph>
        <Divider children="Civilization Bonus" />
        <section>
          <List
            dataSource={civilization.civilization_bonus}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </section>
        <Divider />
        <div className={styles.flex}>
          <h2 children="Unique Tech" />
          <h2 children="Unique Unit" />
        </div>
        <section className={styles.flex}>
          <UniqueTech {...uniqueTech} />
          <UniqueUnit {...uniqueUnit} />
        </section>
      </Card>
    </div>
  );
};

export default Civilization;
