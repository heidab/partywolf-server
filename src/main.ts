import * as http from 'http';
import App from './App';
import * as socketIo from 'socket.io';
const port =  4000;

App.set('port', port);

//create a server and pass our Express app to it.
const server = http.createServer(App);
server.listen(port);
server.on('listening', onListening);

let io = socketIo(server);

io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('message', (m: string) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });

//function to note that Express is listening
function onListening(): void {
  console.log(`Listening on port `+port);
}