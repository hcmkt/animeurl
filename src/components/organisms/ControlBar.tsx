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
import { seasons } from 'domains/annict';

type Props = {
  seasonIdx: number;
  setSeasonIdx: Dispatch<SetStateAction<number>>;
};

const ControlBar: FC<Props> = ({ seasonIdx, setSeasonIdx }) => {
  const seasonsLength = seasons.length;

  return (
    <>
      <Center>
        <Button
          leftIcon={<ChevronLeftIcon />}
          onClick={() => setSeasonIdx(seasonIdx + 1)}
          visibility={seasonIdx + 1 < seasonsLength ? 'visible' : 'hidden'}
        >
          {seasonIdx + 1 < seasonsLength
            ? seasons[seasonIdx + 1].nameText
            : seasons[seasonIdx].nameText}
        </Button>
        <Menu autoSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            my={5}
            mx={10}
          >
            {seasons[seasonIdx].nameText}
          </MenuButton>
          <MenuList h={300} sx={{ overflowY: 'scroll' }}>
            {seasons.map((x, i) => (
              <MenuItem key={i} onClick={() => setSeasonIdx(i)}>
                {x.nameText}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Button
          rightIcon={<ChevronRightIcon />}
          onClick={() => setSeasonIdx(seasonIdx - 1)}
          visibility={seasonIdx - 1 >= 0 ? 'visible' : 'hidden'}
        >
          {seasonIdx - 1 >= 0
            ? seasons[seasonIdx - 1].nameText
            : seasons[seasonIdx].nameText}
        </Button>
      </Center>
    </>
  );
};

export default ControlBar;
