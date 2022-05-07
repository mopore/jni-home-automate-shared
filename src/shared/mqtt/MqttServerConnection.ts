import MQTT, { Client } from "mqtt";


export class MqttServerConnection {

	private _client: Client;

	constructor(mqttServerUrl: string){
		console.log(`Connecting to MQTT server via "${mqttServerUrl}"...`);
		this._client = MQTT.connect(mqttServerUrl, {
			connectTimeout: 3000
		});

		this._client.on("connect", () => {
			console.log("Connected to MQTT server");
		});	

	}

	publish(topic: string, message: string): void{
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

	exit(): void {
		this._client.end();
	}
}
