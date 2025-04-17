import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="pendente"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDO}
            criterio="status"
            legenda="concluido"
          />
          <FiltroCard
            valor={enums.Prioridades.URGENTE}
            criterio="prioridade"
            legenda="urgente"
          />
          <FiltroCard
            valor={enums.Prioridades.IMPORTANTE}
            criterio="prioridade"
            legenda="importante"
          />
          <FiltroCard
            valor={enums.Prioridades.NORMAL}
            criterio="prioridade"
            legenda="normal"
          />
          <FiltroCard criterio="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
