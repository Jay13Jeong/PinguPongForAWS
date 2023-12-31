import {createContext} from "react";
import io, { Socket } from "socket.io-client";
import { REACT_APP_HOST } from "../configData";

const ENDPOINT = "";
export const socket = io(ENDPOINT, {
    transports: ['websocket'],
    withCredentials: true,
});
export const SocketContext = createContext<Socket>({} as Socket);