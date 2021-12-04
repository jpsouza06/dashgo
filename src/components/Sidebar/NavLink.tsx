import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkPros extends ChakraLinkProps{
  icon: ElementType;
  children: string;
  href: string;
}
export function NavLink({icon, children, href, ...rest}: NavLinkPros) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" aling="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}