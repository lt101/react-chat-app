# React Chat App

## About
This is a basic chat application using React and Socket.io. Users log in with a username and join a room. Users of a same room see the other participants can send each other messages.

The application is made for a local environnement (see Client and Server sections) and has no data persistance. 

![chat app screenshot](https://github.com/lt101/react-chat-app/blob/main/react%20chat%20picture.PNG)

## How To Use
Before running the application, run the `npm ci` script in the terminal in the project directory to install necessary dependencies.

To run the client, run the `npm start` script in the terminal in the project directory. The client will run on **http://localhost:3000/**

To run the server, run the `npm run dev` script in the terminal in the 
*server* folder. The server will run on port 5000 by default.

To test the app and simulate the interaction between two people:
- Open two instances of localhost:3000 on your web browser
- On each instance, enter a username or generate a random one
- On both instances, enter the same room name and join chat

## Client
The frontend is written in Javascript using the React framework. It makes use of a few React hooks, such as useState, useEffect, useContext, useRef and useCallback. The client implements socket.io-client to interact with the server, which is what allows them to communicate with other clients.
Styling is done with react-bootstrap.

## Server
The server is an Express server that implements Socket.io. It listens to client connections and manages client-side emitted events. It also keeps a temporary list of all connected users (their associated socket id, username, and room) which only lasts for the duration of the server activation.
