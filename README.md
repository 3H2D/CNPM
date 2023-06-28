# Quản lý tổ dân phố

## Project instruction

```bash
./
├── client/  # Frontend
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
├── server/ # Backend
│   ├── config/ 
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   │   └── Router.js
│   └── server.js
├── dp.sql # Database

```
## Database

1. Create database `dp`

    ```bash
    mysql -u root
    create database dp;
    exit;
    ```
2. Import database
    ```bash
    mysql -u root dp < dp.sql
    ```

## Start backend

```bash
npm install
cd server
node server.js
```
Backend listen on port `8080`

## Start frontend

```bash
cd client
yarn install
yarn dev
```
Open browser and go to `localhost:5173`
