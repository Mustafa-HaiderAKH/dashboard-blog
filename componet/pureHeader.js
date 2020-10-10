import { Typography, Layout, Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="content">
            <Title style={{ color: "#fff" }} level={3}>
              Dashboard
            </Title>
            <div className="user-Account">
              <Text style={{ color: "#fff", marginRight: 8 }}>
                Mustafa Haider
              </Text>
              <Popover
                content={
                  <div>
                    <Text style={{ marginBottom: "1px", display: "block" }}>
                      Change Password
                    </Text>
                    <br />
                    <Text>Sign Out</Text>
                  </div>
                }
              >
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Popover>
              ,
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
