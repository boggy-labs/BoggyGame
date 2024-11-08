import QRCode from "qrcode";
import Jimp from "jimp";

export async function generateQR(data: string, logoFile: string): Promise<any> {
  const qrBuffer = await QRCode.toBuffer(data, {
    width: 300, // Equivalent to box_size * 10 in your Python code
    margin: 4, // Equivalent to border in your Python code
  });
  // Load the logo image using Jimp
  const logo = await Jimp.read(logoFile);

  // Decode QR code image using Jimp
  const qrCodeImage = await Jimp.read(qrBuffer);

  // Calculate the position to place the logo at the center
  const logoSize = qrCodeImage.bitmap.width / 5; // Size of the logo (adjust as necessary)
  const centerX = (qrCodeImage.bitmap.width - logoSize) / 2;
  const centerY = (qrCodeImage.bitmap.height - logoSize) / 2;

  // Resize the logo to fit inside the QR code
  logo.resize(logoSize, logoSize);

  // Composite the logo onto the QR code image
  qrCodeImage.composite(logo, centerX, centerY);

  const qrCodeWithLogoBuffer = qrCodeImage.getBufferAsync(Jimp.MIME_PNG);

  return qrCodeWithLogoBuffer;
}
