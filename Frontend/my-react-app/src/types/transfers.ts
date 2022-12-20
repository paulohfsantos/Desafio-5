export interface ITransfer {
  contaId: number | null;
  dataTransferencia: string;
  valor: number;
  tipo: string;
  nomeOperador: string | null;
}

export type TransferBody = {
  contaId: number | null;
  dataInicio: string,
  dataFim: string,
  nomeOperador: string | null;
}

export type TransfersState = {
  transfers: ITransfer[]
}

export type TransferAction = {
  type: string
  transfer: TransferBody
}

export type DispatchType = (args: TransferAction) => TransferAction