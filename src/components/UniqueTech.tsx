import { Space, Divider, Typography } from "antd";

import { UniqueTech as Props } from "../pages/[name]/[expansion]/[id]";

const { Paragraph } = Typography;

const UniqueTech = ({ name, age, cost, description }: Props) => (
  <div>
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
  </div>
);

export default UniqueTech;
