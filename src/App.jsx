import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-night dark:text-slate-50">
      <div className="max-w-5xl mx-auto h-screen flex flex-col">
        <Header />
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
