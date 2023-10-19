import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as fs from 'fs';

@Injectable()
export class AppService {
  async uploadFile(file: Express.Multer.File): Promise<string> {
    const readableStream = fs.createReadStream(file.path);

    const auth = new google.auth.GoogleAuth({
      keyFile: './googlekey.json',
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const { data } = await drive.files.create({
      media: {
        mimeType: file.mimetype,
        body: readableStream,
      },
      requestBody: {
        name: file.originalname,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
      },
      fields: 'id,name,webContentLink',
    });

    return data.webContentLink;
  }
}
