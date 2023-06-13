import { Box } from '@chakra-ui/react'

export function Header() {
    return (
        <Box bg='#E2E8F0' w='100%' p={10} color='black' textAlign={"center"}>
            <img src="/img/Logo.svg" alt="logo" />
        </Box>
    )
}