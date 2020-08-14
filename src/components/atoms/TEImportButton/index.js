import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


const TEImportButton = ({ children, ...props }) => {
  return (
    <StyledButton
      icon={<ImportIcon />}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const ImportIcon = styled(DownloadOutlined)`
  object-fit: corver;
  width: 10px;
  font-size: 16px;
  margin: 5px 5px 0 0;
`;

const StyledButton = styled(Button)`
  display: flex;
  font-size: 16px;
  background: #f6f8f9;
  border: none;
  opacity: 0.8;
  padding: 4px 0;
  outline: none;
  &:hover, &:focus{
    background: #f6f8f9;
  }
`;

export default TEImportButton;
