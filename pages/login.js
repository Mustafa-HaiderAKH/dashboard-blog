import { Card, Input, Row, Col, Button, message } from "antd";
import { useState } from "react";
import { login } from "../pages/api/blogapi";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setLoaing] = useState(false);
  const handelLogin = () => {
    login({ email, password }, (err, result) => {
      //cheack if error in request
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
          setLoaing(false);
        });
      } else {
        console.log(result);

        setLoaing(false);
      }
    });
  };
  return (
    <>
      <div className="login-page">
        <Card style={{ width: 400 }}>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col span={24}>
              <Input.Password
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                block
                onClick={handelLogin}
                loading={isLoading}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};
export default Login;
