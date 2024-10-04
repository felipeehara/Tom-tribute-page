
import { Title } from "./components/Title";
import { Biography } from "./components/Biography";
import { BestFilms } from "./components/BestFilms";
import { Images } from "./components/Images";
import { Video } from "./components/Video";
import { Footer } from "./components/Footer";
import { Menu } from "./components/MenuNav/Menu";

function Page() {
  return (
    <div >
      <Menu/>
      <Title />
      <Biography/>
      <BestFilms/>
      <Images/>
      <Video/>
      <Footer/>
  
    </div>
  );
}

export default Page;
