import { messageCardStatusEnum } from "../../models/enums/messageCardStatus.enum"
import { messageCardTypeEnum } from "../../models/enums/messageCardType.enum"
import { IMessageCard } from "../../models/interfaces/messageCard.interface"
import { IPatient } from "../../models/interfaces/patient.interface"


const patientNames = [
    "Felipe Molinari",
    "Francisco Vargas",
    "Matheus Eiki",
    "Julia da Silva",
    "Ana Souza",
    "Carlos Pereira",
    "Mariana Oliveira",
    "Bruno Santos",
    "Larissa Costa",
    "Rafael Almeida",
    "Beatriz Rodrigues",
    "Gustavo Ferreira",
    "Camila Martins",
    "Lucas Lima",
]

export const attendantNames = [
    "Ana Souza",
    "Matheus Eiki",
    "Francisco Vargas",
    "Rafael Almeida",
    "Mariana Oliveira",
    "Larissa Costa",
    "Bruno Santos",
    "Camila Martins",
]

const getRandomName = (): string => {
    const randomIndex = Math.floor(Math.random() * patientNames.length);
    return patientNames[randomIndex];
}

const createNewMessageCard = (
    patient: IPatient,
    type: messageCardTypeEnum,
    status: messageCardStatusEnum,
    attendant: string
): IMessageCard => {
    return {
        patient,
        lastMessageDate: new Date().toLocaleDateString(),
        type,
        status,
        attendant,
        selected: false,
    }
}

const createNewPatient = (name: string, phone: string): IPatient => {
    return {
        name,
        email: "email@email.com",
        birthday: '12-02-2005',
        document: '99.999.999-99',
        phone
    }
}

export const getPatientCardsMock = (status: messageCardStatusEnum): IMessageCard[] => {
    const availableNames = [...patientNames]
    const patients = [] as IPatient[]

    for (let i = 0; i < 5 && availableNames.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableNames.length)
        const name = availableNames.splice(randomIndex, 1)[0]
        const phone = `5511993863819`
        patients.push(createNewPatient(name, phone))
    }

    const types: messageCardTypeEnum[] = [
        messageCardTypeEnum.SCHEDULE,
        messageCardTypeEnum.BROAD_QUESTION,
        messageCardTypeEnum.RE_SCHEDULE,
        messageCardTypeEnum.INSURANCE,
        messageCardTypeEnum.NOT_DEFINED
    ]

    const cards: IMessageCard[] = []

    patients.forEach((patient, index) => {
        const attendant = attendantNames[index % attendantNames.length]
        cards.push(createNewMessageCard(patient, types[index], status, attendant))
    })

    return cards
}

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
    lastMessage: 'Última mensagem do paciente',
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.IN_CALL,
    attendant: 'Ana Souza',
    selected: false,
}

export const mockInCallMatheusCard: IMessageCard = {
    patient: mockMatheus,
    lastMessage: 'Última mensagem do paciente',
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.IN_CALL,
    attendant: 'Matheus Eiki',
    selected: false,
}

export const mockInCallFranciscoCard: IMessageCard = {
    patient: mockFrancisco,
    lastMessage: 'Última mensagem do paciente',
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.IN_CALL,
    attendant: 'Francisco Vargas',
    selected: false,
}

export const mockFinishedCard: IMessageCard = {
    patient: mockPatient,
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.FINISHED,
    attendant: 'Rafael Almeida',
    selected: false,
}

export const mockWaitingCard: IMessageCard = {
    patient: mockPatient,
    lastMessageDate: '30-03-2026',
    type: messageCardTypeEnum.SCHEDULE,
    status: messageCardStatusEnum.WAITING_CALL,
    attendant: 'Mariana Oliveira',
    selected: false,
}
