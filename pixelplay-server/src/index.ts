import express from "express";
import http from "http";
import GameOfLife from "life-game";
import SocketIo from "socket.io";
import { appFps, appName, port } from "./constants";
import { generateStarter } from "./starter";

const app = express();
const httpServer = http.createServer(app);
const socketIoServer = SocketIo(httpServer);

socketIoServer.on("connection", (socket: SocketIo.Socket) => {
	console.log("Client connected", socket.id);
	socket.on("disconnect", function() {
		console.log("Client disconnected", socket.id);
	});
});

const width = 50;
const height = 50;

// center
const offsetX = 23;
const offsetY = 23;

const seed = [
	[false, true, true],
	[true, true, false],
	[false, true, false]
];

const starter = generateStarter(width, height, offsetX, offsetY, seed);

var myGame = new GameOfLife(width, height, starter);

console.log(`Emitting frames @ ${appFps}FPS`);

setInterval(() => {
	// reset game because game ends at edges
	myGame.setMap(starter);
}, 10000);

setInterval(() => {
	const currentCycle = myGame.cycle();
	myGame.setMap(currentCycle.map);
	// console.log(currentCycle, currentCycle)
	const frame = myGame.map.map((p: any) => ({
		state: p.state,
		position: p.position
	}));
	const message = {
		width: currentCycle.width,
		height: currentCycle.height,
		time: Date.now(),
		points: frame
	};
	// console.log("Emitting frame", message);
	socketIoServer.emit("message", message);
}, 1000 / appFps);

app.get("/health", (req, res) => res.send("OK"));

httpServer.listen(port, () => console.log(`${appName} listening on port ${port}!`));
