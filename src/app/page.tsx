
import { Title } from "./components/Title";
import { Biography } from "./components/Biography";
import { BestFilms } from "./components/BestFilms";
import { Images } from "./components/Images";
import { Video } from "./components/Video";
import { Footer } from "./components/Footer";
import { Menu } from "./components/MenuNav/Menu";
import { Header } from "./components/Header/Header";

function Page() {
  return (
    <div className="overflow-y-auto h-[100%] relative">
      <Header/>
      <Biography/>
      <BestFilms/>
      <Images/>
      <Video/>
      <Footer/>
  
    </div>
  );
}

export default Page;
