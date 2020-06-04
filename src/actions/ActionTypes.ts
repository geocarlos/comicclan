import { IReceiveBooks, IRequestBooks, IErrorReceivingBooks } from './IActions';

type ActionTypes = IReceiveBooks | IRequestBooks | IErrorReceivingBooks;

export default ActionTypes;