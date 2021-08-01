import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 16px;

  img {
    padding: 0 30px;
    margin-bottom: 20px;
  }

  .slick-list {
    margin: 0 -20px;
  }

`;

export const CarouselTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  margin: 16px 0;
`;
