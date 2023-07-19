import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="xl:max-w-5xl max-w-3xl mx-auto h-screen flex flex-col max-sm:px-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
