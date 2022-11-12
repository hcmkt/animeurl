import { FC } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from '@chakra-ui/react';

interface Anime {
  id: number;
  title: string;
  official_site_url: string;
}

type Props = {
  animes: Anime[];
};

const AnimeTable: FC<Props> = (props) => {
  const { animes } = props;

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>title</Th>
            <Th>url</Th>
          </Tr>
        </Thead>
        <Tbody>
          {animes.map((x) => (
            <Tr key={x.id}>
              <Td>{x.title}</Td>
              <Td>
                {x.official_site_url && (
                  <Link href={x.official_site_url} isExternal>
                    {x.official_site_url} <ExternalLinkIcon mx="2px" />
                  </Link>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AnimeTable;
