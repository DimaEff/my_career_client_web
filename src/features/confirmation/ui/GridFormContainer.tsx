import React, { type FC } from 'react'
import { Grid } from '@nextui-org/react'

interface GridFormContainerProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  inputs: React.ReactElement
  buttons: React.ReactElement
}

const GridFormContainer: FC<GridFormContainerProps> = ({ onSubmit, inputs, buttons }) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid.Container
        gap={1}
        css={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <Grid xs={12}>{inputs}</Grid>
        <Grid xs={12} justify={'center'}>
          {buttons}
        </Grid>
      </Grid.Container>
    </form>
  )
}

export default GridFormContainer
