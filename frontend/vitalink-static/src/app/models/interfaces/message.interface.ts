export enum MessageTypeEnum{
    PATIENT = 'PATIENT',
    CALLER = 'CALLER'
}

export interface IMessage{
    content: string,
    from: string,
    timestamp: string,
    type: MessageTypeEnum 
}