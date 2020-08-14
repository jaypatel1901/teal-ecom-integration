import React from "react";
import styled from "styled-components";
import { Layout, Row } from "antd";
import { TEImportButton } from "../../atoms";
import { Button, Card, Input, Col, Checkbox, InputNumber, Select } from "antd";
import { AudioOutlined } from '@ant-design/icons';

import Link from "next/link";
const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;

// import { StyledDropZone } from 'react-drop-zone'
// import 'react-drop-zone/dist/styles.css'
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import dynamic from "next/dynamic";
const NewForm = () => {



    return (
        <Row>
            <Col span={15}>
                <ProductsContent>
                    <Card >
                        <Label>Title</Label>
                        <Input placeholder="Short sleeve t-shirt" />
                        <Label>Descrition</Label>
                        {/* <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                /> */}
                    </Card>
                    <Card>
                    <TittleHeader>Media</TittleHeader>

//                         <StyledDropZone name='file' ></StyledDropZone>
                    </Card>
                    <PricingContent style={{ marginBottom: "20px" }}>
                        <Card>
                            <TittleHeader>Pricing</TittleHeader>
                            <Row>
                                <Col span={12}>
                                    <Label>Price</Label>
                                    <Input prefix="$" placeholder="0.00" />
                                </Col>
                                <Col span={12}>
                                    <Label>Compare at price</Label>
                                    <Input prefix="$" placeholder="0.00" />
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row>
                                <Col span={12}>
                                    <Label>Cost per item</Label>
                                    <Input prefix="$" placeholder="0.00" />
                                    <Label>Customers won’t see this</Label>
                                </Col>
                                <Col span={12}>

                                </Col>
                            </Row>
                            <Checkbox >Charge tax on this product</Checkbox>
                        </Card>
                    </PricingContent>
                    <InventoryContent style={{ marginBottom: "20px" }}>
                        <Card>
                            <TittleHeader><b>Inventory</b></TittleHeader>
                            <Row>
                                <Col span={12}>
                                    <Label>SKU (Stock Keeping Unit)</Label>
                                    <Input />
                                </Col>
                                <Col span={12}>
                                    <Label>Barcode (ISBN, UPC, GTIN, etc.)</Label>
                                    <Input />
                                </Col>
                            </Row><br />
                            <Checkbox >Track quantity</Checkbox><br />
                            <Checkbox >Continue selling when out of stock</Checkbox>

                        </Card>
                        <Card>
                            <CardHeader> Quantity</CardHeader>
                            <br />
                            <Label>  Available</Label>
                            <InputNumber style={{ width: "60%" }} size="large" min={1} max={10} defaultValue={3} />                </Card>
                    </InventoryContent>
                    <ShippingContent style={{ marginBottom: "20px" }}>
                        <Card>
                            <TittleHeader><b>Shipping</b></TittleHeader>
                            <br />
                            <Checkbox >This is a physical product</Checkbox>
                        </Card>
                        <Card>
                            <CardHeader> Quantity</CardHeader>
                            <p>Used to calculate shipping rates at checkout and label prices during fulfillment.</p>
                            <Label>Weight</Label>
                            <Input />
                        </Card>
                        <Card>
                            <CardHeader> Customs information</CardHeader>
                            <p>Used by border officers to calculate duties when shipping internationally. Shown on customs forms you print during fulfillment.</p>
                            <br />
                            <Label>Country of origin</Label>
                            <Select defaultValue="Select Country" style={{ width: "100%" }} >
                                <Option value="India">India</Option>
                                <Option value="China">China</Option>
                                <Option value="U.S." >U.s</Option>

                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            <p>In most cases, where the product is manufactured.</p><br />
                            <Label>HS (Harmonized System) code</Label>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: "100%" }}
                            />
                            <p>Used by border officers to classify this product.</p>
                        </Card>
                    </ShippingContent>
                    <ShippingContent style={{ marginBottom: "20px" }}>
                        <Card>
                            <TittleHeader>Variants</TittleHeader>
                            <Checkbox >This product has multiple options, like different sizes or colors</Checkbox>

                            <br />
                        </Card>
                    </ShippingContent>
                    <ShippingContent style={{ marginBottom: "20px" }}>
                        <Card>
                            <TittleHeader>Search engine listing preview</TittleHeader>
                            <br />
                            <Label>Add a title and description to see how this product might appear in a search engine listing</Label>
                            <br />
                        </Card>
                        <Card>
                            <Label>Page title</Label>
                            <Input style={{ width: "100%" }}></Input>
                            <p>0 of 70 characters used</p><br />
                            <Label>Description</Label>
                            <TextArea rows={4} style={{ width: "100%" }} />
                            <p>0 of 320 characters used</p>
                            <Label>URL and handle</Label>
                            <Input style={{ width: "100%" }} placeholder='http://teal' ></Input>
                        </Card>

                    </ShippingContent>
                </ProductsContent>
            </Col>
            <Col span={8} style={{ marginInlineStart: '30px' }}>
                <Card >
                    <TittleHeader>Product availability</TittleHeader>
                    <p>Available on 1 of 1 channels and apps</p>
                </Card>
                <Card style={{ marginBottom: "20px" }}>
                    <Label>Online Store</Label>
                </Card>
                <Card >
                    <TittleHeader>Organization</TittleHeader><br />
                    <Label>Product type</Label>
                    <Input style={{ width: "100%" }} placeholder='e.g.shirt' ></Input>
                    <Label>Vendor</Label>
                    <Input style={{ width: "100%" }} placeholder='e.g.shirt' ></Input>
                </Card>
                <Card>
                    <TittleHeader>Collections</TittleHeader>
                    <Search
                        placeholder="search for collections"
                        onSearch={value => console.log(value)}
                        style={{ width: "100%" }}
                    />
                    <p>Add this product to a collection so it’s easy to find in your store.</p>
                </Card>
                <Card>
                <TittleHeader>Tags</TittleHeader>
                <Input style={{ width: "100%" }} placeholder='Vintage' ></Input>

                </Card>
            </Col>
        </Row>
    )
}
const ProductsContent = styled.div`
`;
const InventoryContent = styled.div`
`;
const ShippingContent = styled.div``
const Label = styled.div`
font-size: 15px;
color: #000;
font-weight: inherit;
margin-bottom: 0;
`;
const CardHeader = styled.p`
font-size: 17px;
color: #000;
font-weight: inherit;
margin-bottom: 0;
`;

const PricingContent = styled.h4`
font-size: 18px;
color: #000;
font-weight: inherit;
margin-bottom: 0;
`;
const TittleHeader = styled.h3`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-bottom: 0;
`;
export default NewForm;

