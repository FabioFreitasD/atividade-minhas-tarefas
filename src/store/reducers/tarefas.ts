import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridades.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridades.URGENTE,
      enums.Status.CONCLUIDO,
      'Rever aula 2 do modulo',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridades.URGENTE,
      enums.Status.PENDENTE,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
