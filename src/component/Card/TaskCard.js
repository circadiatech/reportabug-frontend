import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { MessageOutlined, UserOutlined } from "@ant-design/icons";


const TaskCard = () => {

    const state = useSelector(state => state);

  return (
      <>
          {
              state.map(
                  (val, index) => {
                      return (
                        <>
                          <Card
                            key={val.id}
                            style={{
                              color: "black",
                              width: "33%",
                              border: "1px solid #d9d9d9",
                            }}
                          >
                            <p>{val.description}</p>
                            <MessageOutlined /> <span>{val.comments}</span>
                            <UserOutlined style = {{float: "right   "}} />
                          </Card>
                          <br />
                        </>
                      );
                  }
              )
          }
     
    </>
  );
};

export default TaskCard;
