import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefas'

import * as S from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <S.Container>
      <p>
        2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              prioridade={t.prioridade}
              descricao={t.descricao}
              status={t.status}
              titulo={t.titulo}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}
export default ListaDeTarefas
