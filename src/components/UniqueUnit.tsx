import { Space, Divider, Typography } from "antd";

import { UniqueUnit as Props } from "../pages/[name]/[expansion]/[id]";

const { Paragraph } = Typography;

const UniqueUnit = ({ name, age, cost, description }: Props) => (
  <section>
    <span>{name}</span>
    <br />
    <Space>
      <span>age: {age}</span>
      <Divider type="vertical" style={{ backgroundColor: "rgba(0,0,0,.5)" }} />
      <span>Gold: {cost.Gold}</span>
      <Divider type="vertical" style={{ backgroundColor: "rgba(0,0,0,.5)" }} />
      <span> Food: {cost.Food}</span>
    </Space>
    <Paragraph>{description}</Paragraph>
  </section>
);

export default UniqueUnit;
