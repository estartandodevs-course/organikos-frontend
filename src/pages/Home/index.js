import { Logo } from '../../components/Logo/index';
import { InputRange } from '../../components/InputRange/index';
import { InputSearch } from '../../components/InputSearch/index';
import { Container, Wrapper } from './styles';
import { SellerList } from '../../components/ListCard';
import { Footer } from '../../components/Footer';

export const Home = () => {
  return (
    <Container>
      <Logo />
      <InputRange />
      <InputSearch />
      <Wrapper>
        <SellerList />
      </Wrapper>
      <Footer>Organikos</Footer>
    </Container>
  );
};
