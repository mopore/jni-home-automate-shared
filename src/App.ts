import { IService } from "./shared/IService.js";
import { ServiceFrame } from "./shared/ServiceFrame.js";
import { log } from "./shared/logger/log.js";

const LOCAL_MQTT_BROKER = "mqtt://localhost:1883";

const sampleService: IService = {
	getServiceName(): string {
		return "SampleService";
	},
	initAsync(): Promise<void> {
		log.info(`Initializing service "${this.getServiceName()}"...`);
		return Promise.resolve();
	},
	onExit(): void {
		log.info(`Exiting service "${this.getServiceName()}"...`);
	},
	onReset(): void {
		log.info(`Resetting service "${this.getServiceName()}"...`);
	}
}

const frame = new ServiceFrame(LOCAL_MQTT_BROKER);
await frame.initFrameAsync(sampleService);