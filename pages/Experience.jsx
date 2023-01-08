import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Experience = () => {
  return (
    <div>
      <Grid justifyContent={"flex-start"} padding="50px">
        <GridItem>
          <h1>1. Masai School</h1>
          <p>fen 2020-present</p>
        </GridItem>
        <GridItem>
         <h1> 2.Civil Engineering</h1>
         <p>jun 2015-may 2019</p>
        </GridItem>
      </Grid>
      
    </div>
  )
}

export default Experience
