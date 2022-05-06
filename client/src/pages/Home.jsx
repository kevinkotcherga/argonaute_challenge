import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home;
