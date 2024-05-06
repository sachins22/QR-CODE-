import { Url } from "../model/url.model.js";
import QRCode from "qrcode";
import fs from "fs"


async function takeUrl(req, res) {
  const { url } = req.body;
  try {
      if (!url) {
          throw new Error("URL is required");
      }

      // Save the URL to the database
      await Url.create({ url });

      // Generate QR code for the submitted URL
      generateQR(url, res);

  } catch (error) {
      console.error("Error saving URL:", error);
      res.status(500).send("Error saving URL");
  }
}



  function generateQR(url, res) {
    // Generate QR code for the provided URL
    QRCode.toFile('./website_qr.png', url, (err) => {
        if (err) {
            console.error('Error generating QR code:', err);
            res.status(500).send('Error generating QR code');
        } else {
            console.log('QR code generated successfully');
            res.send('QR code generated successfully');
        }
    });
}

export { takeUrl };

