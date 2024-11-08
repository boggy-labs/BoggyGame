import { generateQR } from "./qrcode";
import { config } from "../config/config";
import fs from "fs";
describe("generateQR", () => {
  it("should return qrcode img buffer,test download ", async () => {
    let imgBuffer = await generateQR("test data", config.qrcode.logo.connect);
    fs.writeFile("./test.png", imgBuffer, (err) => {
      if (err) {
        console.error("Error saving image:", err);
      }
    });
  });
});
