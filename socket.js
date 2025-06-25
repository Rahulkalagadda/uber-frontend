import { io } from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const socket = io("https://uber-backend-production-c74c.up.railway.app/"); // Connect to backend port
