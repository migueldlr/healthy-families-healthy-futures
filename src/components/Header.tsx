import React from 'react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Spacer, Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { NavLink } from 'src/components/Navigation';

interface HeaderProps {
  onHamburgerClick: () => void;
}

function Header({ onHamburgerClick }: HeaderProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: GatsbyTypes.HeaderQuery = useStaticQuery<GatsbyTypes.HeaderQuery>(graphql`
    query Header {
      contentfulAsset(title: { eq: "Logo" }) {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
        description
      }
    }
  `);

  const hfhfLogo =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    data.contentfulAsset?.fluid != null ? (
      <Img
        fluid={data.contentfulAsset.fluid}
        alt={data.contentfulAsset.description}
        imgStyle={{ objectFit: 'contain' }}
      />
    ) : null;

  return (
    <>
      <Flex h="55px" w="full" px="40px" wrap="nowrap" flexDir="row">
        <Flex align="center" flexDir="row">
          <Box w="135px" maxH="50px" mr="20px" display={['none', null, 'block']}>
            {hfhfLogo}
          </Box>
          {/* <Input
          type="text"
          id="header-search"
          placeholder="search website"
          name="s"
          variant="outline"
          w="300px"
          size="sm"
          borderRadius="30px"
        /> */}
        </Flex>

        <Spacer />

        <Flex align="center" flexDir="row">
          <NavLink text="Get Involved" link="/get-involved" />
          <Spacer mr={5} />
          <Button variant="primary" fontSize="16px">
            Donate
          </Button>
        </Flex>
      </Flex>

      <Flex
        wrap="nowrap"
        mx="auto"
        flexDir="row"
        w="full"
        alignItems="center"
        display={['flex', null, 'none']}
        px={6}
        my={3}
        borderTop="1px"
        borderTopColor="gray.400"
      >
        <HamburgerIcon h={6} w={6} color="gray.700" onClick={onHamburgerClick} />
        <Box w="178px" display={['block', null, 'none']} margin="auto">
          {hfhfLogo}
        </Box>
      </Flex>
    </>
  );
}

export default Header;
