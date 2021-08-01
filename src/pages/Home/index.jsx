import React, { useState } from 'react';
import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import {
  Card,
  RestaurantCard,
  Modal,
} from '../../components';
import {
  Carousel,
  CarouselTitle,
  Container,
  Search,
  Wrapper
} from './style';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: false,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <img src={logo} alt="Logo" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Slider {...settings}>
            <Card photo={restaurante} title="Restaurante x" />
            <Card photo={restaurante} title="Restaurante x" />
            <Card photo={restaurante} title="Restaurante x" />
            <Card photo={restaurante} title="Restaurante x" />
            <Card photo={restaurante} title="Restaurante x" />
          </Slider>
        </Search>
        <RestaurantCard />
      </Container>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
    </Wrapper>
  );
};

export default Home;
