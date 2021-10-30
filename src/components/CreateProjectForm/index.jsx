import {
    Form,
    Input,
    Select,
    Button
} from "antd";
import "./style.scss";

// get form comonent from Form 
const { Item } = Form;

// get TextArea component from Input
const { TextArea } = Input;

// get Option component from Select
const { Option } = Select;

const CustomLabel = ()=>{
    return(
        <label>
            Project Description 
            <span>(Optional)</span>
        </label>
    );
};

const CreateProjectForm = ()=>{
    return(
        <Form
            layout="vertical"
            className="project_form"
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
            <Item label={<CustomLabel/>}>
                <TextArea placeholder="Enter Description..." rows={4}/>
                <span>Get your members on project with a few words about your project</span>
            </Item>
            <Item>
                <Button block>Create</Button>
            </Item>
        </Form>
    );
};

export default CreateProjectForm;