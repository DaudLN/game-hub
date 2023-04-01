import { Grid, GridItem, Show } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';

const App = () => (
  <>
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={
        {
          // base: `100%`,
        }
      }
    >
      <GridItem pl="2" area={'nav'}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={'aside'}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem pl="2" area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  </>
);

export default App;
