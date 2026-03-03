
import { messageCardStatusEnum } from "../enums/messageCardStatus.enum";
import { messageCardTypeEnum } from "../enums/messageCardType.enum";
import { IPatient } from "./patient.interface";

export interface IMessageCard{
    patient: IPatient,
    lastMessage?: string,
    lastMessageDate: string,
    type: messageCardTypeEnum,
    status: messageCardStatusEnum,
    selected?: boolean
}