import { useState } from "react";
import Layout from "./components/Layout";
import {Button} from "antd";
import './App.scss';
import CreateProjectModal from "./components/CreateProjectModal";
import Login from "./component/Login/Login";

function App() {
  const [visible,setVisible] = useState(false);
  return (
    <Layout>
      <h1>inner pages goes here!..</h1>
      <Button onClick={()=>setVisible(true)}>Create Project</Button>
      <CreateProjectModal visible={visible} toggleModel={(visb)=>setVisible(visb)}/>
      <Login />
    </Layout>
  );
}

export default App;
