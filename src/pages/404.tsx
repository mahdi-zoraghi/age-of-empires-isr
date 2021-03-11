import Link from "next/link";
import Head from "next/head";
import { Result, Button } from "antd";

const NotFound = () => (
  <section>
    <Head>
      <title>Page Not Found!!</title>
    </Head>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </section>
);

export default NotFound;
