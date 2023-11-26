import React from "react";

import { Box, Image, Heading, Text, Flex } from '@chakra-ui/react';
import styled from "styled-components";


export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <StyledBox>
      <StyledImage src={flags.svg} alt="" />
      <StyledInnerBox>
        <StyledHeading>{name.common}</StyledHeading>
        <StyledText>
          Population: {population.toLocaleString()} <br />
          Region: {region} <br />
          Subregion: {subregion}
        </StyledText>
      </StyledInnerBox>
    </StyledBox>

  );
}
const StyledBox = styled.div`
  border-width: 4px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-color: red;
  margin: auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: grid;
grid-template-columns: repeat(3,1fr);
padding: 5%;
gap: 5%;
`;
// const StyledBox = styled.div`
//   width: 80%;
// margin: auto;
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// display: grid;
// grid-template-columns: repeat(3,1fr);
// padding: 5%;
// gap: 5%;
// `;

const StyledImage = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
`;

const StyledInnerBox = styled.div`
  padding: 16px;
`;

const StyledHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const StyledText = styled.p`
  font-size: 1rem;
  color: #666666;
`;
