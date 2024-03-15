export interface IQueue {
    name: string;
    options: any;
    connection: any;
    createQueue(): Promise<any>;
    consumeQueue(): Promise<any>;
    publishQueue(): Promise<any>;
}