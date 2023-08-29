import React from 'react';
import styled from "styled-components";

export const CustomSelect = () => {
  const [inputValue, setInputValue] = React.useState<string>("")
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value
    setInputValue(currentValue)
    setIsOpen(!!currentValue)
  }
  const onClickHandler = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <SelectWrapper>
      <div>
        <InputStyled onChange={onChangeHandler}/>
        <OptionsWrapper isOpen={isOpen}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </OptionsWrapper>
      </div>
      <ButtonStyled onClick={onClickHandler}>{isOpen ? "^": "-"}</ButtonStyled>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
const InputStyled = styled.input`
  text-align: center;
  border: none;
  outline: none;
  height: 4em;
`
const ButtonStyled = styled.button`
  height: 2em;
  border: none;
  background-color: white;
  cursor: pointer;
  color: gray;
`
const OptionsWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  background-color: white;
  width: 200px;
  border-radius: 0 0 10px 10px;
  display: ${props => props.isOpen ? "block" : "none"};
`