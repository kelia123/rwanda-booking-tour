import React from "react";
import DashLyaout from "../../components/dashboardLayout";
import {DatePicker, Form,Input,Space,Button} from "antd";
const NewTour =()=>{
    const onFinish=(values)=>{
        console.log(values)
    }
    return(
        
            <Form onFinish={onFinish}>
                <Form.Item name="title" label="Title" rules={[{ required: true  }]}>
                <Input />
                </Form.Item>

                <Form.Item name="description" label="Description" rules={[{ required: true  }]}>
                <Input.TextArea/>
                </Form.Item>

                <Space>
                <Form.Item name="" label="Date scheduled:" rules={[{ required: true  }]}>
                <DatePicker/>
                </Form.Item>
                
                <Form.Item name="" label="Due date" rules={[{ required: true  }]}>
                <DatePicker/>
                </Form.Item>
                </Space><br></br>

                <Button htmlType="submit" type="primary">
                     Register now 
                     </Button>
            </Form>
        
        
    )
}
export default NewTour;