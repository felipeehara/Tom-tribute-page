import { Born,LastParagraph, ParagraphDance, ParagraphDanceTwo, ParagraphRevelation, ParagraphRevelationTwo} from "../components/CompCareer/PropsTextCareer";
import { TitleCareer } from "../components/CompCareer/TextCareer";
import { Footer } from "../components/Footer";
import { Menu } from "../components/MenuNav/Menu";
import { Title } from "../components/Title";


function Career() {
  return (
      <div>
          <Menu/>
            <div className="flex flex-col justify-center text-center">
                <Title/>
                <Born/>
                <TitleCareer title={'2006—2013: Início, destaque em Billy Elliot e estreia no cinema:'}/>
                <ParagraphDance/>
                <ParagraphDanceTwo/>
                <TitleCareer title={'2015—2017: Revelação como Homem-Aranha:'}/>
                <ParagraphRevelation/>
                <ParagraphRevelationTwo/>
                <TitleCareer title={'2015—presente: filmes de grande sucesso e estrelato:'}/>
                <LastParagraph/>
                <Footer/>
            </div>
        </div>
  );
}

export default Career;
