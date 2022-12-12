import { FC } from 'react';
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
import { Link } from 'react-router-dom';

type Props = {
  seasonIdx: number;
};

const ControlBar: FC<Props> = ({ seasonIdx }) => {
  const seasonsLength = seasons.length;
  const hasPrev = seasonIdx + 1 < seasonsLength;
  const hasNext = seasonIdx - 1 >= 0;
  const prevIdx = hasPrev ? seasonIdx + 1 : seasonIdx;
  const nextIdx = hasNext ? seasonIdx - 1 : seasonIdx;

  return (
    <>
      <Center>
        <Link to={`/${seasons[prevIdx].name}`}>
          <Button
            leftIcon={<ChevronLeftIcon />}
            visibility={hasPrev ? 'visible' : 'hidden'}
          >
            {seasons[prevIdx].nameText}
          </Button>
        </Link>
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
              <Link to={`/${x.name}`} key={i}>
                <MenuItem>{x.nameText}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
        <Link to={`/${seasons[nextIdx].name}`}>
          <Button
            rightIcon={<ChevronRightIcon />}
            visibility={hasNext ? 'visible' : 'hidden'}
          >
            {seasons[nextIdx].nameText}
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default ControlBar;
