import Tarefa from '../../components/Tarefas'

import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar Programação',
    descricao: 'Ver aulas da faculdade',
    prioridade: enums.Prioridades.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de Luz',
    descricao: 'Pix via app',
    prioridade: enums.Prioridades.URGENTE,
    status: enums.Status.CONCLUIDO
  },
  {
    titulo: 'Pagar a internet',
    descricao: 'Baixar a fatura',
    prioridade: enums.Prioridades.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <S.Container>
    <p>2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
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

export default ListaDeTarefas
