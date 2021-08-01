import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #fff;
  font-size: 16px;
  margin: 10px 0 0 5px;
`;

const ImageCard = ({ photo, title }) => {
  return (
    <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
  );
};

export default ImageCard;
