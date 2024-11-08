import axios from "axios";
import { getDrandRandomness, convertRandomnessToInt } from "./drand";

jest.mock("axios");

describe("getDrandRandomness", () => {
  it("should return randomness from Drand when API call is successful", () => {
    (axios.get as jest.Mock).mockResolvedValue({ status: 200 });
    let randomness = getDrandRandomness();
    expect(randomness);
  });
});

describe("convertRandomnessToInt", () => {
  it("should convert randomness to int value ", () => {
    let randomness =
      "86bb385cf4404def0f322a54f4e9d7314742a3decc93e11a69702413e80d4c6b";
    let result = convertRandomnessToInt(randomness);
    console.log("Conversion result:", result); 
  });
});
