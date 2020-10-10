import { Card, Input, Row, Col, Button } from "antd";
import Header from "../componet/pureHeader";
import Blog from "../componet/card";
import { PlusOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Header />

        <main className="container">
          <div className="search-box">
            <Input.Search
              style={{ width: 300 }}
              placeholder="Search for something"
            />
            <Button type="primary" icon={<PlusOutlined />}>
              New Article
            </Button>
          </div>
          <Row gutter={[30, 30]} style={{ marginTop: 30 }}>
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>{" "}
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>{" "}
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>{" "}
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>{" "}
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>{" "}
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>
            <Col md={8} sm={12} xs={24}>
              <Blog />
            </Col>
          </Row>
        </main>
      </div>
    </>
  );
};
export default Home;
