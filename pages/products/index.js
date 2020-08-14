import React from "react";
import { PageHeader,Filters } from "../../src/components/Product/Index";
import { PageLayout } from '../../src/components/views';

import styled from "styled-components";
import { Menu, Layout, Dropdown, Row, Col, Button, Card, Table, Input } from "antd";
import Link from "next/link";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;

const Products = () => {
  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Inventory',
      dataIndex: 'age',
    },
    {
      title: 'Type',
      dataIndex: 'address',
    },
    {
      title: 'Vendor',
      dataIndex: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: '40 in stock for 39 variants',
      address: '40 in stock for 39 variants',
    },

  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  }
  
  return (
    <PageLayout>
      <ProductsContent>
        <EmptyProductsContent>
          <PageHeader />
          <EmptyDataContent>
            <Card title='All' style={{ width: "100%" }}>
              <Filters/>
             
              <Table
                rowSelection={{
                  // type: selectionType,
                  // ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
              />
            </Card>
          </EmptyDataContent>

        </EmptyProductsContent>
      </ProductsContent>
    </PageLayout>
  );
};

const EmptySearch = styled.div`
max-width: 60rem;
margin: 0 auto;
margin-top:-15px
`;

const ProductsContent = styled.div`
  padding: 20px;
`;

const EmptyProductsContent = styled.div`
  padding: 20px;
  max-width: 63rem;
  margin: 0 auto;
`;

const EmptyDataContent = styled(Layout.Content)`
  padding: 20px;
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  min-height: 50vh;
  align-items: center;
  background: white;
  box-shadow: 0px 4px 4px rgba(186, 195, 201, 0.25);
  border-radius: 5px;
`;

const Message = styled.p`
  color: #637381;
`;

export default Products;
