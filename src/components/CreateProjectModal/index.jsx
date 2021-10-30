import { useState } from "react";
import { 
    Modal,
    Row,
    Col,
    Typography,
    Form,
    Input,
    Select,
    Button
} from "antd";
import "./style.scss";

// get title and text components from Typography
const { Title,Text } = Typography;

// get form comonent from Form 
const { Item } = Form;

// get TextArea component from Input
const { TextArea } = Input;

// get Option component from Select
const { Option } = Select;

const CreateProjectModal = ({toggleModel})=>{
    const [visible,setVisible] = useState(true);
    function closeModal(){
        setVisible(false);
    }
    return (
        <Modal
            visible={visible}
            title={null}
            width={1000}
            onCancel={closeModal}
            footer={null}
        >
            <Row className="create_project_modal">
                <Col span={12}>
                    <div className="side_a">
                        <Title level={2}>
                            Let's make a project
                        </Title>
                        <Text>Boost your productivity by making it easier for everyone to access project in one location</Text>
                        <Form
                            layout="vertical"
                        >
                            <Item label="Project Name">
                                <Input placeholder="Enter Name"/>
                                <span>This is the name of your team or project</span>
                            </Item>
                            <Item label="Invite People">
                                <Select defaultValue="">
                                    <Option value="" disabled>Choose...</Option>
                                    <Option value="1">opt 1</Option>
                                    <Option value="2">opt 2</Option>
                                </Select>
                            </Item>
                            <Item label={<lable>Project Description <span>(Optional)</span></lable>}>
                                <TextArea placeholder="Enter Description..." rows={4}/>
                                <span>Get your members on project with a few words about your project</span>
                            </Item>
                            <Item>
                                <Button block>Create</Button>
                            </Item>
                        </Form>
                    </div>
                </Col>
                <Col span={12}>
                    right hand side contetn
                </Col>
            </Row>
        </Modal>
    )
};

export default CreateProjectModal;