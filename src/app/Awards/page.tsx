import { AwardsProps } from "../components/Awards/PropsAwards";
import { Buttons } from "../components/Buttons";
import { Menu } from "../components/MenuNav/Menu";
import { Title } from "../components/Title";
import imgEmpire from '@/app/img/empireawards.jpg'
import imgAcademy from '@/app/img/bafta.jpg'
import imgTeenChoice from '@/app/img/teenchoice.png'
import imgPeopleChoice from '@/app/img/peoplechoice.webp'
import imgTeenChoice2019 from '@/app/img/teenchoice2019.jpg'
import imgKidsChoice from '@/app/img/kidsaward.png'
import imgMtv from '@/app/img/mtvaward.webp'
import imgKidsChoice2 from '@/app/img/nickchocie.jpg'
import { Footer } from "../components/Footer";

function Awards() {
  return (
        <div className="overflow-y-auto h-[100%]">
            <Menu/>
            <Title/>
            <Buttons text="PREMIAÇÕES"/>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-4">
                    <AwardsProps img={imgEmpire} alt={'Imagem do EmpireAwards'} title="Empire Awards" year="2013"/>
                    <AwardsProps img={imgAcademy} alt={'Imagem do BritshAcademy'} title="British Academy Film Awards" year="2017"/>
                    <AwardsProps img={imgTeenChoice} alt={'Imagem do TeenChoice'} title="Teen Choice Awards" year="2017"/>
                    <AwardsProps img={imgPeopleChoice} alt={"Imagem do People's Choice Awards"} title="People's Choice Awards" year="2019"/>
                    <AwardsProps img={imgTeenChoice2019} alt={'Imagem do TeenChoice2019'} title="Teen Choice Awards" year="2019"/>
                    <AwardsProps img={imgKidsChoice} alt={'Imagem do KidsChoice2020'} title="Kids' Choice Awards" year="2020"/>
                    <AwardsProps img={imgMtv} alt={'Imagem do MtvAwards2022'} title="MTV Movie e TV Awards" year="2022"/>
                    <AwardsProps img={imgKidsChoice2} alt={'Imagem do KidsChoice2022'} title="Kids' Choice Awards" year="2022"/>
            </div>
            <Footer/>

        </div>
  );
}

export default Awards;
