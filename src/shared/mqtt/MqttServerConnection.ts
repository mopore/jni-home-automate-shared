import MQTT, { Client } from "mqtt";


export class MqttServerConnection {

	private _client: Client;

	private _connected = false;

	constructor(mqttServerUrl: string){
		console.log(`Connecting to MQTT server via "${mqttServerUrl}"...`);
		
		this._client = MQTT.connect(mqttServerUrl, {
			connectTimeout: 3000
		});
		
		this._client.on("connect", () => {
			console.log("Connected to MQTT server");
			this._connected = true;
		});

		this._client.on("disconnect", () => {
			console.error("Lost the connection to MQTT server...");
			this._connected = false;
		})

		this._client.setMaxListeners(15);
	}


	get connected(): boolean {
		return this.connected;
	}


	attemptReconnect(): void{
		console.info("Attempting to reconnect...");
		this._client.reconnect();
	}


	publish(topic: string, message: string): void{
		if (! this._connected) {
			const errorMessage = `Error trying to publishing without connection!`;
			console.error(errorMessage);
			console.trace();
			throw new Error(errorMessage);
		}
		this._client.publish(topic, message);
	}


	subscribe(topic: string, handler: (message: string, topic?: string) => void): void{
		this._client.subscribe(topic, (error => {
			if (!error) {
				this._client.on("message", (recTopic, recMessage) => {
					if (recTopic === topic){
						handler(recMessage.toString(), topic);
					}
				});
			}
			else {
				const errorMessage = `Error subscribing: ${error}`;
				console.error(errorMessage);
				console.trace();
				throw new Error(errorMessage);
			}
		}));
	}


	setMaxListeners(limit: number): void {
		this._client.setMaxListeners(limit)
	}


	exit(): void {
		this._client.end();
	}
}
