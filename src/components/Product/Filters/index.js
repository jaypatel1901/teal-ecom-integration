import React, { useState } from "react";
import styled from "styled-components";
// icons
import { StarOutlined, DownOutlined, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
// ui
import { Row, Col, Input, Button, Dropdown, Radio } from "antd";

const { Search } = Input;

const Filters = (props) => {
  const [valueSubscription, setValueSubscription] = useState(0);

  const onChangeSubscription = (e) => {
    setValueSubscription(e.target.value);
  };

  return (
    <ContentFilters>
      <Row gutter={0}>
        <Col md={8}>
          <SearchBox
            placeholder="Filter customers"
            onSearch={(value) => console.log(value)}
          />
        </Col>
        <Col md={4}>
          <Dropdown
            overlay={
              <DropdownBox>
                <RadioGroupStyle
                  onChange={onChangeSubscription}
                  value={valueSubscription}
                >
                  <RadioStyle value={1}>mysolidshoes</RadioStyle>

                </RadioGroupStyle>
                <ButtonLink type="text">Clear</ButtonLink>
              </DropdownBox>
            }
            trigger={["click"]}
          >
            <ButtonBox block type="default">
              Product   Vendor <DownOutlined />
            </ButtonBox>
          </Dropdown>
        </Col>
        <Col md={3}>
          <Dropdown
            overlay={
              <DropdownBox>
                <RadioGroupStyle
                  onChange={onChangeSubscription}
                  value={valueSubscription}
                >
                  <RadioStyle value={1}>Available on Online Store</RadioStyle>
                  <RadioStyle value={1}>Unavailable on Online Store</RadioStyle>

                </RadioGroupStyle>
                <ButtonLink type="link">Clear</ButtonLink>
              </DropdownBox>
            }
            trigger={["click"]}
          >
            <ButtonBox block type="default">
              Availability <DownOutlined />
            </ButtonBox>
          </Dropdown>
        </Col>

        <Col md={3}>
          <ButtonLast block type="default" onClick={() => props.onOpen(true)}>
            More filters
          </ButtonLast>
        </Col>
        <Col md={3}>
          <ButtonSaved block type="default" disabled icon={<StarOutlined />}>
            Saved
          </ButtonSaved>
        </Col>
        <Col md={3}>
          <Dropdown
            overlay={
              <DropdownBox>
                <RadioGroupStyle
                  onChange={onChangeSubscription}
                  value={valueSubscription}
                >
                  <RadioStyle value={1}>Product title A–Z</RadioStyle>
                  <RadioStyle value={1}>Product title Z–A</RadioStyle>
                  <RadioStyle value={1}>Created (oldest first)</RadioStyle>
                  <RadioStyle value={1}>Created (newest first)</RadioStyle>
                  <RadioStyle value={1}>Updated (oldest first)</RadioStyle>
                  <RadioStyle value={1}>Updated (newest first)</RadioStyle>
                  <RadioStyle value={1}>Low inventory</RadioStyle>
                  <RadioStyle value={1}>High inventory</RadioStyle>
                  <RadioStyle value={1}>Product type A–Z</RadioStyle>

                </RadioGroupStyle>
                <ButtonLink type="link" >Clear</ButtonLink>
              </DropdownBox>
            }
            trigger={["click"]}
          >
            <ButtonBox block type="default" disabled icon={ <ArrowUpOutlined />}>
            Sort  <DownOutlined />
            </ButtonBox>
          </Dropdown>
        </Col>
      </Row>
    </ContentFilters>
  );
};

const ContentFilters = styled.div`

`;

const ButtonSaved = styled(Button)`
  margin-left: 10px;
  padding: 6px 12px;
  height: auto;
`;

const DropdownBox = styled.div`
  padding: 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonLink = styled(Button)`
  color: #ccc;
  margin: 10px 0 0;
  padding: 0 3px;
  display: block;
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

const SearchBox = styled(Search)`
  border-radius: 4px 0 0 4px;
  padding: 6px 12px 6px 35px !important;
`;

const ButtonBox = styled(Button)`
  padding: 6px 12px;
  height: auto;
  border-radius: 0;
  border-left: 0;
`;

const ButtonLast = styled(Button)`
  padding: 6px 12px;
  height: auto;
  border-radius: 0 4px 4px 0;
  border-left: 0;
`;

export default Filters;
