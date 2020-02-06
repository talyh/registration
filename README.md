For the time being, this is hosted at https://tojam-6526c.firebaseapp.com/

To change values from year to year, focus on `src/jamConfig.ts`.

# RUNNING LOCALLY

0. Ensure you have npm installed. See https://www.npmjs.com/get-npm for help with this step.
1. Clone or fork the project (your choice).
1. Run `npm install` to get the packages needed.
1. Run `npm start` to see the app running locally on http://localhost:3000/

# BUILDING AND DEPLOYING

0. Ensure you can run locally and it's working as expected.
1. Install the firebase cli. See https://firebase.google.com/docs/cli for help with this step.
1. Run `npm run build`.
1. Run `serve -s build` to see the built version running locally on http://localhost:5000.
1. If the built version is ok, run `firebase deploy`.
1. Commit the firebase delta file to git.
