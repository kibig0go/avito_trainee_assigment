import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export const Wrapper = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontSize: 20}}>Games</div>
      </Header>
      <Content>
        <Outlet className="site-layout-content" style={{ background: colorBgContainer }}>
        </Outlet>
      </Content>
      <Footer style={{ textAlign: 'center' }}>kibig0go design</Footer>
    </Layout>
  );
};
