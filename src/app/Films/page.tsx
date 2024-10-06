"use client";
import { useRouter } from 'next/navigation';
import { Buttons } from '../components/Buttons';
import { FilmAvengersInfinityWar, FilmChefSnow, FilmCherry, FilmCivilWar, FilmCurrentWar, FilmDolittle, FilmEdgeWinter, FilmEverydayDevil, FilmFarhome, FilmHeartOfTheSea, FilmHomeComing, FilmHowLiveNow, FilmImpossible, FilmLocke, FilmLostCity, FilmNoReturnHome, FilmPilgrimage, FilmUncharted, FilmWolfHall, FilmWorldChaos } from '../components/importFilms';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header/Header';

export default function FilmsPage() {
  const router = useRouter();

  const redirect = () => {
    router.push('/');
  };

  return (
   
    <div className="overflow-y-auto h-[100%] relative">
      <Header/>
       
       <Buttons text='FILMES'/>
       <FilmImpossible/>
       <FilmLocke/>
      <FilmHowLiveNow/>
      <FilmWolfHall/>
      <FilmHeartOfTheSea/>
      <FilmLostCity/>
      <FilmEdgeWinter/>
      <FilmCivilWar/>
      <FilmPilgrimage/>
      <FilmHomeComing/>
      <FilmCurrentWar/>
      <FilmAvengersInfinityWar/>
      <FilmChefSnow/>
      <FilmFarhome/>
      <FilmEverydayDevil/>
      <FilmDolittle/>
      <FilmWorldChaos/>
      <FilmNoReturnHome/>
      <FilmCherry/>
      <FilmUncharted/>

      

      <Footer/>
    </div>
  );
}
