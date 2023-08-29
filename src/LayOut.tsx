import React from 'react';
import styled from "styled-components";
import {CustomSelect} from "./CustomSelect";
import {CarOutlined, HomeOutlined, SettingOutlined, ShoppingOutlined, StarOutlined} from "@ant-design/icons";

export const LayOut = () => {
  const icons = [
    {image: <HomeOutlined style={{color: "white", fontSize: 25}}/>, description: 'Apartments'},
    {image: <ShoppingOutlined style={{color: "white", fontSize: 25}}/>, description: 'Shopping'},
    {image: <CarOutlined style={{color: "white", fontSize: 25}}/>, description: 'Cars'},
    {image: <StarOutlined style={{color: "white", fontSize: 25}}/>, description: 'Raiting'},
    {image: <SettingOutlined style={{color: "white", fontSize: 25}}/>, description: 'Settings'},
  ]

  const iconList =icons.map(icon => <Icon>{icon.image}</Icon>)

  return (
    <LayOutWrapper>
      <BGTheme/>
      <Header>
        header
      </Header>
      <ContentWrapper>
        <FormStyled>
          <CustomSelect/>
          <InputStyled placeholder="Enter location"/>
          <CustomSelect/>
          <ButtonStyled>Search</ButtonStyled>
        </FormStyled>
        <IconsWrapper>
          {iconList}
        </IconsWrapper>
      </ContentWrapper>
      <Void>
        void
      </Void>
    </LayOutWrapper>
  );
};

const LayOutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
const Header = styled.header`
  z-index: 999;
  height: 4em;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.84);
  display: flex;
  align-items: center;
  position: fixed;
`
const ContentWrapper = styled.div`
  z-index: 1;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 50px;
  background-image: url("https://oir.mobi/uploads/posts/2021-03/1616430087_38-p-zadnii-fon-dlya-saita-44.jpg");
  background-position: center;
  background-size: cover;
`
const BGTheme = styled.div`
  background-image: url("https://img.freepik.com/premium-photo/sheung-wan-hong-kong-02-october-2018-hong-kong-city_328191-6043.jpg?w=1380");
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
  //filter: blur(3px) brightness(80%) grayscale(.70);
`
const Void = styled.div`
  height: 100vh;
`

const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 600px;
  max-width: max-content;
  height: 6em;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4em;
  border-radius: 10px;
  padding-right: 1em;
  gap: 10px;
  background-color: white;
`
const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`
const InputStyled = styled.input`
  text-align: center;
  border: none;
  outline: none;
  height: 4em;
  border-inline: 1px solid rgba(128, 128, 128, 0.56);
`
const ButtonStyled = styled.button`
  background-image: url("https://oir.mobi/uploads/posts/2021-03/1616430087_38-p-zadnii-fon-dlya-saita-44.jpg");
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
  min-height: 4em;
  min-width: 10em;
  border-radius: 0 10px 10px 0;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    color: white;
    background-image: none;
    background-color: #87b8cb;
  }

  &:active {
    transform: scale(0.96);
  }
`
const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-image: url("https://oir.mobi/uploads/posts/2021-03/1616430087_38-p-zadnii-fon-dlya-saita-44.jpg");
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.96);
  }
`