import { HStack, Box, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Grid, GridItem, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Box bgImg={"/img/background1.jpg"} w={"100%"} alignItems={"center"} height={"340"}>
        <HStack justifyContent={"space-around"} pt={80}>
          <Grid templateColumns='repeat(5, 1fr)'>
            <GridItem colSpan={3}>
              <Stack spacing={3}>
                <Text fontSize='50px' fontWeight="500" mb={5} color="white">5 Continentes,<br />
                  infinitas possibilidades.</Text>
                <Text fontSize='20px' w='80%' color="#DADADA">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
              </Stack>
            </GridItem >
            <GridItem colStart={7}>
              <Image src="/img/Airplane.svg" w={"100%"} />
            </GridItem >
          </Grid>
        </HStack >
      </Box >
    </>
  )
}
