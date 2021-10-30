import { 
    Modal,
    Row,
    Col,
    Typography,
    Image
} from "antd";
import CreateProjectForm from "../CreateProjectForm";
import BgImage from "../../assets/images/form_side_image.png";
import "./style.scss";

// get title and text components from Typography
const { Title,Text } = Typography;

const CreateProjectModal = ({toggleModel,visible})=>{
    function closeModal(){
        toggleModel(false);
    }
    return (
        <Modal
            visible={visible}
            title={null}
            width={1000}
            onCancel={closeModal}
            footer={null}
            className="create_project_modal"
        >
            <Row>
                <Col span={12}>
                    <div className="side_a">
                        <Title level={2}>
                            Let's make a project
                        </Title>
                        <Text>Boost your productivity by making it easier for everyone to access project in one location</Text>
                        <CreateProjectForm/>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="side_b">
                        <Image src={BgImage} preview={false}/>
                    </div>
                </Col>
            </Row>
        </Modal>
    )
};

export default CreateProjectModal;
