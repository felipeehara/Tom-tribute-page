import { Buttons } from "../components/Buttons";
import { ImageStandard } from "../components/Images";
import { Menu } from "../components/MenuNav/Menu";

import TomHoland4 from '@/app/img/tomholand4.png';
import TomHoland5 from '@/app/img/tomholand5.png';
import TomHoland6 from '@/app/img/tomholand6.png';
import TomHoland7 from '@/app/img/tomholand7.jpg';
import TomHoland8 from '@/app/img/tomholand8.jpg';
import TomHoland9 from '@/app/img/tomholand9.jpg';
import TomHoland10 from '@/app/img/tomholand10.jpg';
import TomHoland11 from '@/app/img/tomholand11.png';
import { Title } from "../components/Title";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header/Header";


function Galery() {
  return (
    <div className="overflow-y-auto h-[100%] relative w-full">
        <Header/>
          <Buttons text={'Galeria'}/>

        <div className="flex flex-col items-center mt-10  
               md:grid md:grid-cols-2 lg:grid-cols-3 md:mx-32 md:sticky col-span-5 xl:grid-cols-4 gap-0 ">
                <ImageStandard img={TomHoland4} alt='tom'/>
                <ImageStandard img={TomHoland5} alt='tom'/>
                <ImageStandard img={TomHoland6} alt='tom'/>
                <ImageStandard img={TomHoland7} alt='tom'/>
                <ImageStandard img={TomHoland8} alt='tom'/>
                <ImageStandard img={TomHoland9} alt='tom'/>
                <ImageStandard img={TomHoland10} alt='tom'/>
                <ImageStandard img={TomHoland11} alt='tom'/>
        </div>

    <Footer/>



      

    </div>
  );
}

export default Galery;
