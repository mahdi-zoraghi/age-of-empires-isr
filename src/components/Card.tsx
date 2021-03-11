import Link from "next/link";
import { Typography, List } from "antd";

import { Civilizations } from "../pages";

import styles from "../styles/Card.module.css";

export interface Props {
  civilization: Civilizations;
}

const Card = ({
  civilization: { id, name, expansion, civilization_bonus },
}: Props) => {
  const { Title } = Typography;

  const linkName = name.split(" ").join("-");
  const linkExpansion = expansion.split(" ").join("-");

  return (
    <Link href={`/${linkName}/${linkExpansion}/${id}`}>
      <a>
        <div className={styles.item}>
          <Typography>
            <main className={styles.title}>
              <Title level={2}>{name}</Title>
              <Title level={3}>{expansion}</Title>
            </main>
            <List
              size="small"
              header="Civilization Bonus"
              bordered
              dataSource={civilization_bonus}
              renderItem={(item: string) => (
                <List.Item style={{ padding: "5px" }}>
                  <Typography>{item}</Typography>
                </List.Item>
              )}
            />
          </Typography>
        </div>
      </a>
    </Link>
  );
};

export default Card;
