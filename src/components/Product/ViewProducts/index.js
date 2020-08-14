import React, { useState } from "react";
import styled from "styled-components";
// components
import Filters from "../Filters";
// icons
import { CloseOutlined } from "@ant-design/icons";
// ui
import {
  Table,
  Tabs,
  Tag,
  Select,
  Drawer,
  Button,
  Collapse,
  Radio
} from "antd";

const { TabPane } = Tabs;
const { Option } = Select;
const { Panel } = Collapse;

const customerData = [
  {
    key: 1,
    firstName: "Tony",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 4,
    spent: "66.89",
    isNew: true,
    isUS: true
  },
  {
    key: 2,
    firstName: "ggggg",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "Subscribed",
    order: 1,
    spent: "66.89",
    isNew: false,
    isUS: true
  },
  {
    key: 3,
    firstName: "nnnn",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 2,
    spent: "66.89",
    isNew: false,
    isUS: false
  },
  {
    key: 4,
    firstName: "vvvv",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 1,
    spent: "66.89",
    isNew: true,
    isUS: false
  },
  {
    key: 5,
    firstName: "Tony",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 2,
    spent: "66.89",
    isNew: true,
    isUS: true
  },
  {
    key: 6,
    firstName: "ggggg",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "Subscribed",
    order: 1,
    spent: "66.89",
    isNew: false,
    isUS: false
  },
  {
    key: 7,
    firstName: "nnnn",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 4,
    spent: "66.89",
    isNew: false,
    isUS: true
  },
  {
    key: 8,
    firstName: "vvvv",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 1,
    spent: "66.89",
    isNew: false,
    isUS: false
  },
  {
    key: 9,
    firstName: "Tony",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 1,
    spent: "66.89",
    isNew: true,
    isUS: true
  },
  {
    key: 10,
    firstName: "ggggg",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "Subscribed",
    order: 1,
    spent: "66.89",
    isNew: true,
    isUS: false
  },
  {
    key: 11,
    firstName: "nnnn",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 1,
    spent: "66.89",
    isNew: false,
    isUS: false
  },
  {
    key: 12,
    firstName: "vvvv",
    lastName: "Tee",
    address: "Lakeland , FL, United States",
    status: "",
    order: 1,
    spent: "66.89",
    isNew: false,
    isUS: false
  }
];

const sortOptions = [
  {
    label: "Last update (newest first)",
    value: 1
  },
  {
    label: "Last update (oldest first)",
    value: 2
  },
  {
    label: "Amount spent (high to low)",
    value: 3
  },
  {
    label: "Amount spent (low to high)",
    value: 4
  },
  {
    label: "Total orders (high to low)",
    value: 5
  },
  {
    label: "Total orders (low to high)",
    value: 6
  },
  {
    label: "Last order date (newest first)",
    value: 7
  },
  {
    label: "Last order date (oldest first)",
    value: 8
  },
  {
    label: "Date added as a customer (newest first)",
    value: 9
  },
  {
    label: "Date added as a customer (oldest first)",
    value: 10
  }
];

const dataNew = customerData.filter(el => {
  return el.isNew === true;
});

const dataEmailSubscription = customerData.filter(el => {
  return el.status === "Subscribed";
});

const dataFromUS = customerData.filter(el => {
  return el.isUS === true;
});

const ViewCustomers = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [isOpenMoreFilter, setOpenMoreFilters] = useState(false);
  const [valuesCollapse, setShowCollapse] = useState([]);
  const [valueSubscription, setValueSubscription] = useState(0);
  const [tags, setTags] = useState([]);
  const [accountStatus, setAccountStatus] = useState(null);

  const columns = [
    {
      title: title => {
        if (customerData.length > 10) {
          return `Showing 10 of ${customerData.length} customers`;
        } else {
          return `Showing ${customerData.length} of ${customerData.length} customers`;
        }
      },
      dataIndex: "firstName",
      render: (value, item) => {
        return (
          <div>
            <h3>
              {item.firstName} {item.lastName}
            </h3>
            <p>{item.address}</p>
          </div>
        );
      },
      width: "60%"
    },
    {
      title: "",
      dataIndex: "status",
      render: status =>
        status !== "" ? <Tag color="#87d068">{status}</Tag> : "",
      align: "right",
      width: "10%"
    },
    {
      title: "",
      dataIndex: "order",
      render: order => {
        if (order > 1) {
          return `${order} orders`;
        } else {
          return `${order} order`;
        }
      },
      align: "right",
      width: "10%"
    },
    {
      title: () => {
        return (
          <SortTable>
            <LabelSort>Sort By</LabelSort>
            <Select defaultValue={1}>
              {sortOptions &&
                sortOptions.length > 0 &&
                sortOptions.map((item, i) => (
                  <Option key={i} value={item.value}>
                    {item.label}
                  </Option>
                ))}
            </Select>
          </SortTable>
        );
      },
      dataIndex: "spent",
      render: spent => `$${spent} spent`,
      align: "right",
      width: "20%"
    }
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('');
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User",
      name: record.name
    })
  };

  const callback = key => {
    setTabIndex(Number(key));
  };

  const onChangeSubscription = e => {
    setValueSubscription(e.target.value);
  };

  return (
    <ViewContent>
      <Tabs defaultActiveKey={tabIndex} onChange={callback}>
        <TabPane tab="All" key="1" />
        <TabPane tab="New" key="2" />
        <TabPane tab="Returning" key="3" />
        <TabPane tab="Abandoned checkouts" key="4" />
        <TabPane tab="Email subscribers" key="5" />
        <TabPane tab="From United States" key="6" />
      </Tabs>

      <Filters onOpen={setOpenMoreFilters} />

      <ContentTab>
        {tabIndex === 1 && (
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection
            }}
            columns={columns}
            dataSource={customerData}
            pagination={customerData.length > 10}
          />
        )}
        {tabIndex === 2 && (
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection
            }}
            columns={columns}
            dataSource={dataNew && dataNew.length > 0 ? dataNew : []}
            pagination={customerData.length > 10}
          />
        )}
        {tabIndex === 3 && (
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection
            }}
            columns={columns}
            dataSource={[]}
            pagination={customerData.length > 10}
          />
        )}
        {tabIndex === 4 && (
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection
            }}
            columns={columns}
            dataSource={[]}
            pagination={customerData.length > 10}
          />
        )}
        {tabIndex === 5 && (
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection
            }}
            columns={columns}
            dataSource={dataEmailSubscription}
            pagination={customerData.length > 10}
          />
        )}
        {tabIndex === 6 && (
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection
            }}
            columns={columns}
            dataSource={dataFromUS}
            pagination={customerData.length > 10}
          />
        )}
      </ContentTab>

      <DrawerStyle
        title={
          <DrawerTitle>
            More filters
            <TitleIconClose onClick={() => setOpenMoreFilters(false)} />
          </DrawerTitle>
        }
        placement="right"
        closable={false}
        onClose={() => setOpenMoreFilters(false)}
        visible={isOpenMoreFilter}
        footer={
          <>
            <ButtonFooterLeft type="default">
              Clear all filters
            </ButtonFooterLeft>
            <ButtonFooterRight type="primary">Done</ButtonFooterRight>
          </>
        }
      >
        <CollapseStyle
          defaultActiveKey={valuesCollapse}
          onChange={values => setShowCollapse(values)}
          expandIconPosition="right"
        >
          <PanelStyle
            header={
              <div>
                <PanelTitle>Email subscription status</PanelTitle>
              </div>
            }
            key="1"
          >
            <RadioGroupStyle
              onChange={onChangeSubscription}
              value={valueSubscription}
            >
              <RadioStyle value={1}>Subscribed</RadioStyle>
              <RadioStyle value={2}>Pending confirmation</RadioStyle>
              <RadioStyle value={3}>Not subscribed</RadioStyle>
            </RadioGroupStyle>
            <ButtonLink type="text">Clear</ButtonLink>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Tagged with</PanelTitle>
              </div>
            }
            key="2"
          >
            <SelectTags mode="tags" onChange={setTags}>
              {tags}
            </SelectTags>
            <ButtonLink type="text">Clear</ButtonLink>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Customer account status</PanelTitle>
              </div>
            }
            key="3"
          >
            <RadioGroupStyle
              onChange={e => setAccountStatus(e.target.value)}
              value={accountStatus}
            >
              <RadioStyle value={1}>Active account</RadioStyle>
              <RadioStyle value={2}>Disabled account</RadioStyle>
              <RadioStyle value={3}>Invited to create account</RadioStyle>
              <RadioStyle value={4}>Declined account invitation</RadioStyle>
            </RadioGroupStyle>
            <ButtonLink type="text">Clear</ButtonLink>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Customer language</PanelTitle>
              </div>
            }
            key="4"
          >
            <p>Coming soon!</p>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Amount spent</PanelTitle>
              </div>
            }
            key="5"
          >
            <p>Comming soon!</p>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Number of orders</PanelTitle>
              </div>
            }
            key="6"
          >
            <p>Comming soon!</p>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Date of order</PanelTitle>
              </div>
            }
            key="7"
          >
            <p>Comming soon!</p>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Date added as customer</PanelTitle>
              </div>
            }
            key="8"
          >
            <p>Comming soon!</p>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Abandoned checkout</PanelTitle>
              </div>
            }
            key="9"
          >
            <p>Comming soon!</p>
          </PanelStyle>
          <PanelStyle
            header={
              <div>
                <PanelTitle>Location</PanelTitle>
              </div>
            }
            key="10"
          >
            <p>Comming soon!</p>
          </PanelStyle>
        </CollapseStyle>
      </DrawerStyle>
    </ViewContent>
  );
};

const ViewContent = styled.div`
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: var(
    --p-card-shadow,
    0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15)
  );
  border-radius: 3px;
`;

const ContentHeader = styled(Tabs)`
  padding: 0 15px;
  border-bottom: 1px solid #ccc;
`;

const ContentTab = styled.div``;

const SortTable = styled.div`
  text-align: right;
`;

const LabelSort = styled.span`
  display: inline-block;
  margin-right: 10px;
`;

const DrawerStyle = styled(Drawer)``;

const DrawerTitle = styled.h3`
  margin: 0;
  font-weight: 500;
  position: relative;
  color: #000;
  font-size: 24px;
`;

const TitleIconClose = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  font-size: 18px;
  cursor: pointer;
`;

const ButtonFooterLeft = styled(Button)`
  float: left;
`;

const ButtonFooterRight = styled(Button)`
  float: right;
`;

const CollapseStyle = styled(Collapse)`
  background: none;
  border: none;
  padding: 0 10px;
`;

const PanelStyle = styled(Panel)`
  background: none;
  border: none;
`;

const PanelTitle = styled.h3`
  margin: 0px;
  font-weight: bold;
  color: #000;
  opacity: 0.8;
`;

const RadioGroupStyle = styled(Radio.Group)`
  width: 100%;
`;

const RadioStyle = styled(Radio)`
  display: block;
  height: 30px;
  line-height: 30px;
  width: 100%;
`;

const SelectTags = styled(Select)`
  width: 100%;
`;

const ButtonLink = styled(Button)`
  color: #ccc;
  margin: 10px 0 0;
  padding: 0 3px;
  display: block;
`;

export default ViewCustomers;