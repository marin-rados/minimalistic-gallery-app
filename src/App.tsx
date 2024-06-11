import Layout from "./components/layout";
import Header from "./components/header";
import Gallery from "./components/gallery";
import "./styles/style.scss";

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Gallery />
      </Layout>
    </>
  );
};

export default App;
