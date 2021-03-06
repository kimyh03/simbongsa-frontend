import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => props.height};
  opacity: 0.7;
`;

const Text = styled.div`
  margin-top: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.deppOrangeColor};
`;

export default ({ height = "90vh" }) => (
  <Container height={height}>
    <Loader
      type="TailSpin"
      color="#f36200"
      height={30}
      width={30}
      timeout={30000}
    />
    <Text>Loading...</Text>
  </Container>
);
