import { Play } from 'phosphor-react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <div>
          <label htmlFor="task">I will work in</label>
          <input id="task" />
          <label htmlFor="minutesAmount">during</label>
          <input id="minutesAmount" type="number" />
          <span>minutes.</span>
        </div>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <button type="submit">
          <Play size={24} />
          Start
        </button>
      </FormContainer>
    </HomeContainer>
  )
}
