import { Form, Input, Button, Row, Col } from "antd";
import "./Signup.css";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg">
      <Row style={{ height: "100vh" }} align="middle">
        <Col span={6} offset={9} className="signUpBox">
          <h2>Sign up</h2>
          <Form
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 22,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Enter Email" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Enter Password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="signUpBtn">
                Sign Up
              </Button>
            </Form.Item>

            <h3>OR</h3>

            <div className="google-btn" style={{ maxWidth: 300 }}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon-svg"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <p className="btn-text">
                <b>Continue with Google</b>
              </p>
            </div>
          </Form>
          <div className="borderSbottom"></div>
          <div>
            <a href="#">
          Already have an account? Sign in
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
