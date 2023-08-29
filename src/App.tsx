import React from 'react';
import styled from "styled-components";
import {LayOut} from "./LayOut";

export default function App() {
  return (
    <div>
      <LayOut />
    </div>
  );
}


const AppWrapper = styled.div`
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`