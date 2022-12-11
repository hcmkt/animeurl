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
import { Work } from 'domains/annict';

type Props = {
  animes: Work[];
};

const AnimeTable: FC<Props> = ({ animes }) => {
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
                {x.official_site_url != null && (
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
