import Tarefa from '../../components/Tarefas'

import * as S from './styles'

const tarefas = [
  {
    titulo: 'Estudar Programação',
    descricao: 'Ver aulas da faculdade',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de Luz',
    descricao: 'Pix via app',
    prioridade: 'urgente',
    status: 'concluido'
  },
  {
    titulo: 'Pagar a internet',
    descricao: 'Baixar a fatura',
    prioridade: 'urgente',
    status: 'pendente'
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
