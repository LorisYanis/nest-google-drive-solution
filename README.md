# The Google Drive upload solution for Nest.js

### Clone the repository

```shell
git clone https://github.com/LorisYanis/nest-google-drive-solution.git
```

### Install packages

```shell
npm i
```

OR

```shell
yarn install
```

> OR any other alternative package manager

### Add googlekey.json to the root directory
> You can generate one at https://cloud.google.com/
```json
{
  "type": "service_account",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "",
  "universe_domain": "googleapis.com"
}
```

### Setup .env file

```shell
# The google drive folder's ID (https://drive.google.com/drive/u/0/folders/ID...)
# (You must a folder before and add a client_email from googlekey-example)
GOOGLE_DRIVE_FOLDER_ID="YOUR_ID"
```
