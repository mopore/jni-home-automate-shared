import { IService } from "./shared/IService.js";
import { ServiceFrame } from "./shared/ServiceFrame.js";

const LOCAL_MQTT_BROKER = "mqtt://localhost:1883";

const sampleService: IService = {
	getServiceName(): string {
		return "SampleService";
	},
	async initAsync(_: ServiceFrame): Promise<void> {
		console.log(`Initializing service "${this.getServiceName()}"...`);
	},
	onExit(): void {
		console.log(`Exiting service "${this.getServiceName()}"...`);
	},
	onReset(): void {
		console.log(`Resetting service "${this.getServiceName()}"...`);
	}
}

const frame = new ServiceFrame(LOCAL_MQTT_BROKER);
await frame.initFrameAsync(sampleService);