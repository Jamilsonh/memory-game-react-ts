import { useContext } from 'react';
import DificultyItem from '../../components/DifficultyItem';
import Difficulties from '../../config/Difficulties';
import { DifficultyContext } from '../../utils/DifficultyContext';
import {
  ButtonDifficulty,
  Container,
  ContainerDifficulty,
  ContainerGame,
  TitleContainerGame,
} from './styles';
import { Link, redirect } from 'react-router-dom';
import AnimatedWallpaper from '../../utils/AnimateWallpaper';

function Home() {
  const { changeDifficulty } = useContext(DifficultyContext);

  const onSelectDifficulty = (difficulty: number) => () => {
    changeDifficulty(difficulty);
  };

  console.log(changeDifficulty);

  return (
    <Container>
      <AnimatedWallpaper />
      <ContainerGame>
        <TitleContainerGame>Escolha a dificuldade</TitleContainerGame>
        <ContainerDifficulty>
          <DificultyItem
            name='Easy'
            numOfCards={Difficulties.EASY}
            onClick={onSelectDifficulty(Difficulties.EASY)}
            //isSelected={selectedDifficulty === Difficulties.EASY}
          />
          <DificultyItem
            name='Medium'
            numOfCards={Difficulties.MEDIUM}
            onClick={onSelectDifficulty(Difficulties.MEDIUM)}
            //isSelected={selectedDifficulty === Difficulties.EASY}
          />
          <DificultyItem
            name='Hard'
            numOfCards={Difficulties.HARD}
            onClick={onSelectDifficulty(Difficulties.HARD)}
            //isSelected={selectedDifficulty === Difficulties.EASY}
          />
          <DificultyItem
            name='Very Hard'
            numOfCards={Difficulties.VERY_HARD}
            onClick={onSelectDifficulty(Difficulties.VERY_HARD)}
            //isSelected={selectedDifficulty === Difficulties.EASY}
          />
        </ContainerDifficulty>
      </ContainerGame>
    </Container>
  );
}

export default Home;
