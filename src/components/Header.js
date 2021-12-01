import React, { useState } from 'react'
import "./Header.css";
import logo from "../asset/img/finallogo.png"
import { Modal, Form, Input, Button } from "antd";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };
    const navigate = useNavigate();

    return (
        <>

            <Modal visible={visible}
                width="40%"
                onOK={() => form.submit()}
                onCancel={() => setVisible(false)}>
                <h1> Signin Form </h1>
                <Form onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={[{ required: "true", type: "email" }]}>
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                        <Input type="password" />
                    </Form.Item>
                    <Button htmlType="submit" onClick={()=>{localStorage.setItem("userLogedIn",true); navigate("/dash/newtour");}}> Login </Button>

                </Form>
            </Modal>
            <div class="header-container">
                <div class="logo">
                    <img src={logo} width="150px" /> </div>
                <div class="headers">
                    <ul>
                        <li> <a href="/"> Home </a></li>
                        <li> <a href="/Gallery"> Gallery </a></li>
                        <li> <a href="/Contactus"> Contact us </a></li>
                        <li> <a href="/Aboutus"> About us </a></li>
                        <li> <a href="#" onClick={()=>setVisible(true)}> Sign in </a></li>
                        <li> <a href="/Signup"> Sign up </a></li>
                        <li> <a href="/Tours"> Tours </a></li>
                    </ul>

                </div>
            </div>
        </>

    )

}
export default Header;