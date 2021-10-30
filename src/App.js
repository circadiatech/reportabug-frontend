import Layout from "./components/Layout";
import {Button} from "antd";
import './App.scss';
import CreateProjectModal from "./components/CreateProjectModal";

function App() {
  return (
    <Layout>
      <h1>inner pages goes here!..</h1>
      <Button>Create Project</Button>
      <CreateProjectModal/>
    </Layout>
  );
}

export default App;
