import { FC, Dispatch, SetStateAction } from 'react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Center,
} from '@chakra-ui/react';

export interface Season {
  name: string;
  nameText: string;
}

type Props = {
  seasonNames: Season[];
  selectedSeason: number;
  setSelectedSeason: Dispatch<SetStateAction<number>>;
};

const ControlBar: FC<Props> = (props) => {
  const { seasonNames, selectedSeason, setSelectedSeason } = props;
  const seasonsLength = seasonNames.length;

  return (
    <>
      <Center>
        <Button
          leftIcon={<ChevronLeftIcon />}
          onClick={() => setSelectedSeason(selectedSeason + 1)}
          visibility={selectedSeason + 1 < seasonsLength ? 'visible' : 'hidden'}
        >
          {selectedSeason + 1 < seasonsLength
            ? seasonNames[selectedSeason + 1].nameText
            : seasonNames[selectedSeason].nameText}
        </Button>
        <Menu autoSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            my={5}
            mx={10}
          >
            {seasonNames[selectedSeason].nameText}
          </MenuButton>
          <MenuList h={300} sx={{ overflowY: 'scroll' }}>
            {seasonNames.map((x, i) => (
              <MenuItem key={i} onClick={() => setSelectedSeason(i)}>
                {x.nameText}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Button
          rightIcon={<ChevronRightIcon />}
          onClick={() => setSelectedSeason(selectedSeason - 1)}
          visibility={selectedSeason - 1 >= 0 ? 'visible' : 'hidden'}
        >
          {selectedSeason - 1 >= 0
            ? seasonNames[selectedSeason - 1].nameText
            : seasonNames[selectedSeason].nameText}
        </Button>
      </Center>
    </>
  );
};

export default ControlBar;
