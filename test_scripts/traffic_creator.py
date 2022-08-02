import paho.mqtt.client as mqtt
import json
import time

MQTT_HOST = "localhost"
MQTT_TEST_TOPIC = "mqtt_test"

def main() -> None:
    """
    Main function
    """

    client = mqtt.Client("traffc_creator")
    client.connect(MQTT_HOST, 1883)
    print("Connected to MQTT broker")

    print("Beginning traffic creation")
    counter = 0
    while True:
        try:
            counter += 1
            message = {
                "name": "traffc_creator",
                "value": f"Traffice Countr message: {counter}"
            }
            client.publish(MQTT_TEST_TOPIC, json.dumps(message))
            print(".", end="", flush=True)
        #  except KeyboardInterrupt:
        #      print("Exiting...")
        #      break
        except Exception as e:
            print("X", end="", flush=True)
        time.sleep(0.5)
    client.disconnect()


if __name__ == "__main__":
    main()
