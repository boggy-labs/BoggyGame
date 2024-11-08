import axios from "axios";
import { randomBytes } from "crypto";
import { config } from "../config/config";
/** */
export async function getDrandRandomness(): Promise<string> {
  try {
    const response = await axios.get(config.drand.url);
    if (response.status === 200) {
      const data = response.data;
      const randomness = data.randomness;
      return randomness;
    } else {
      // In case of error, generate a random hex string
      return randomBytes(32).toString("hex");
    }
  } catch (error) {
    console.error("Error fetching randomness from Drand:", error);
    // Fallback to generating a random hex string
    return randomBytes(32).toString("hex");
  }
}

export function convertRandomnessToInt(randomness: string): BigInt {
  // Convert the randomness (hex string) to an integer
  return BigInt(`0x${randomness}`);
}
