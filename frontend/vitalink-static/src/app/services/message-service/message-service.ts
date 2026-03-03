import { Injectable } from '@angular/core';
import { IMessage, MessageTypeEnum } from '../../models/interfaces/message.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class MessageService {


  private messageSubject: BehaviorSubject<Record<string,IMessage[]>> = 
    new BehaviorSubject<Record<string,IMessage[]>>(this.getLocalMessages());

  
  public messages$: Observable<Record<string,IMessage[]>> = this.messageSubject.asObservable();

  private apiUrl = ' https://bernie-nonhypostatic-unlucidly.ngrok-free.dev/';


  constructor(private http: HttpClient) {}



  getLocalMessages(): Record<string,IMessage[]>{
    const storage = localStorage.getItem("Messages") || '{}'
    return JSON.parse(storage)
  }

  getServerMessages(): void{
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(socket);

    stompClient.connect({},  () => {
        console.log("Conectado");

        stompClient.subscribe('/topic/messages',  (message: { body: string; }) => {
            const receivedMessage = JSON.parse(message.body)
            console.log("Mensagem recebida:", receivedMessage);

            const newMessage: IMessage = {
              content: receivedMessage.content,
              from: receivedMessage.from,
              timestamp: receivedMessage.timestamp,
              type: MessageTypeEnum.PATIENT
            }

            this.saveLocalMessage(newMessage, receivedMessage.from)

        });
    });
  }


  saveLocalMessage(message: IMessage, conversationNumber: string){
    const currentMessages: Record<string,IMessage[]> = this.getLocalMessages();
    if(!currentMessages[conversationNumber]){
      currentMessages[conversationNumber] = [message]
    }
    else{
      currentMessages[conversationNumber].push(message)
    }

    localStorage.setItem("Messages", JSON.stringify(currentMessages))
    this.messageSubject.next(currentMessages);
  }

  private  isEmptyObj(obj: Object) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  sendMessage(message: string, to: string): Observable<any>{
    const url = this.apiUrl + 'api/whatsapp/send'

    const body = {
      to: to,
      message: message
    }

    const newMessage: IMessage = {
      content: message,
      from: '999',
      timestamp: String(new Date()),
      type: MessageTypeEnum.CALLER
    }

    this.saveLocalMessage(newMessage, to)
    return this.http.post(url, body)
  }
}
