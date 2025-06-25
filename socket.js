import { io } from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const socket = io("http://localhost:3000"); // Connect to backend port
