import { messageCardStatusEnum } from "../../models/enums/messageCardStatus.enum"
import { messageCardTypeEnum } from "../../models/enums/messageCardType.enum"
import { IMessageCard } from "../../models/interfaces/messageCard.interface"
import { IPatient } from "../../models/interfaces/patient.interface"

export const mockPatient: IPatient = {
    name: 'Paciente Exemplo',
    email: 'email@email.com',
    birthday: '12-02-2005',
    document: '99.999.999-99',
    phone: '5511993863819'
}

export const mockMatheus: IPatient = {
    name: 'Matheus Eiki',
    email: 'email@email.com',
    birthday: '12-02-2005',
    document: '99.999.999-99',
    phone: '5511999143152'
}


export const mockFrancisco: IPatient = {
    name: 'Francisco Vargas',
    email: 'email@email.com',
    birthday: '12-02-2005',
    document: '99.999.999-99',
    phone: '5511975409180'
}


export const mockInCallCard: IMessageCard = {
    patient: mockPatient,
    lastMessage: 'Ultima mensagem do paciente',
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.IN_CALL,
    selected: false,
}

export const mockInCallMatheusCard: IMessageCard = {
    patient: mockMatheus,
    lastMessage: 'Ultima mensagem do paciente',
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.IN_CALL,
    selected: false,
}

export const mockInCallFranciscoCard: IMessageCard = {
    patient: mockFrancisco,
    lastMessage: 'Ultima mensagem do paciente',
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.IN_CALL,
    selected: false,
}


export const mockFinishedCard: IMessageCard = {
    patient: mockPatient,
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.FINISHED,
    selected: false
}


export const mockWaitingCard: IMessageCard = {
    patient: mockPatient,
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.WAITING_CALL,
    selected: false
}
