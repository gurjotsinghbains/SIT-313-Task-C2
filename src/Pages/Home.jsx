import Banner from '../components/Banner';
import Profile from '../components/Profile';
import Portfolio from '../components/Portfolio';
import Gallery from '../components/Gallery';
import Articles from '../components/Articles';
import Tutorials from '../components/Tutorials';

function Home() {
  return (
    <div className="home-page">

      <Banner />

      <Profile />

      <Portfolio />

      <Gallery />

      <Articles />

      <Tutorials />

    </div>
  )
}

export default Home