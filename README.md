# Questionnaire
 Fullstack questionnaire assignment
## Prerequisites
1. NPM
2. PostgreSQL
## Steps to run locally:
1. Clone this repository

   `git clone https://github.com/trx40/Questionnaire.git`
2. Setup client

   `cd client`

   
   `npm install`

   
   `npm run build`

   
   `cd dist`

   
   `npm run preview`


4. Setup server

   Navigate back to the top level directory of Questionnaire app and then run:

   `cd server`
   
   Update your local postgres settings accordingly in the .env file

   After updating the .env file to match your local credentials, run

   `npm install`

   `npm run build`

   `cd dist`

   `npm run start`

   The backend should now be up to handle requests.

6. Navigate to `localhost:4173` in your browser to see the app.
