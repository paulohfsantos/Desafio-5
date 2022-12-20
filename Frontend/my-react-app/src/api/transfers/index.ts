import { api } from '../api'

export const getTransfer = async (
  contaId: number | null,
  dataInicio: string,
  dataFim: string,
  nomeOperador: string | null
) => {
  return await api.get(`/transferencias/pesquisar?
    contaId=${contaId}
    &dataCriacaoInicio=${dataInicio}
    &dataCriacaoFim=${dataFim}
    &nomeOperador=${nomeOperador}
  `)
}