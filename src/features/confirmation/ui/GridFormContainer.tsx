import React, { type FC } from 'react'
import { Grid, Stack } from '@mui/material'

interface GridFormContainerProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  inputs: React.ReactElement | React.ReactElement[]
  buttons: React.ReactElement
}

const GridFormContainer: FC<GridFormContainerProps> = ({ onSubmit, inputs, buttons }) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <Grid item xs={12}>
          <Stack spacing={1} sx={{ width: '100%' }}>
            {inputs}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {buttons}
        </Grid>
      </Grid>
    </form>
  )
}

export default GridFormContainer
