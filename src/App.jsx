import Layout from './components/Layout';
import Hero from './components/Hero';
import BrandPositioning from './components/BrandPositioning';
import Difference from './components/Difference';
import Industries from './components/Industries';
import Services from './components/Services';
import BigIdea from './components/BigIdea';
import Process from './components/Process';
import Founders from './components/Founders';
import Results from './components/Results';
import FounderMessage from './components/FounderMessage';
import WomenTeam from './components/WomenTeam';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <Layout>
      <Hero />
      <BrandPositioning />
      <Difference />
      <Industries />
      <Services />
      <BigIdea />
      <Process />
      <Founders />
      <Results />
      <FounderMessage />
      <WomenTeam />
      <FinalCTA />
    </Layout>
  );
}

export default App;
