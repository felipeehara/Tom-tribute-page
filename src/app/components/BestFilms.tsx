import { Buttons } from "./Buttons";
import { FilmFarhome, FilmHomeComing, FilmImpossible } from "./importFilms";

export const BestFilms = () => {
    return (
        <div className="flex items-center flex-col">
            <Buttons text={'Melhores Filmes'}/>
            <FilmImpossible/>
            <FilmHomeComing/>
            <FilmFarhome/>
        </div>
    );
}