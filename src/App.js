import Header from "./component/Header/Header";
import Navigation from "./component/Header/Navigation";
import Banner from "./component/Body/Banner";
import Factorye from "./component/Body/Factorye";
import Culture from "./component/Body/Culture";
import "./assets/css/App.css";
function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main className="main">
        <Banner />
        <Factorye />
        <Culture />
      </main>
    </>
  );
}

export default App;
