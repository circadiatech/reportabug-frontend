import {
    Layout,
} from "antd";

const { Content } = Layout;

const CustomLayout = ({children})=>{
    return (
        <Layout>
            {/* //TODO header goes here */}
            <Content>
                {children}
            </Content>
        </Layout>
    )
};

export default CustomLayout;