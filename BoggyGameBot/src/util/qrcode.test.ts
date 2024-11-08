import { generateQR } from "./qrcode";
import { config } from "../config/config";
import fs from "fs";
/**
 * imgBuffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00
 *  00 01 2c 00 00 01 2c 08 06 00 00 00 79 7d 8e 75 00 00 0d 0f 49 44 41
 *  54 78 01 ed c1 7b b0 e6 05 59 ... 3350 more bytes>
 */
describe("generateQR", () => {
  it("should return qrcode img buffer,test download ", async () => {
    let imgBuffer = await generateQR("test data", config.qrcode.logo.connect);
    console.log("imgBuffer:", imgBuffer);
    let filePath = "./test.png";
    fs.writeFile(filePath, imgBuffer, (err) => {
      if (err) {
        console.error("Error saving image:", err);
      }
    });
  });
});
