import { IService } from "./shared/IService.js";
import { ServiceFrame } from "./shared/ServiceFrame.js";

const sampleService: IService = {
	getServiceName(): string {
		return "SampleService";
	},
	init(frame: ServiceFrame): void {
		console.log(`Initializing service "${this.getServiceName()}"...`);
	},
	onExit(): void {
		console.log(`Exiting service "${this.getServiceName()}"...`);
	},
	onReset(): void {
		console.log(`Resetting service "${this.getServiceName()}"...`);
	}
}

const main = async (): Promise<void> => {
	const mqttServerUrl = "mqtt://localhost:1883";
	const frame = new ServiceFrame(mqttServerUrl);

	await frame.initFrameAsync(sampleService);
}

await main();