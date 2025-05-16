// 17.0 How to deploy in firebase (for client side)

/**
 * go to firebase => build => Hosting=> get started
 * in terminal run 'npm install -g firebase-tools' for one time in ur computer in client side.
 * after install then press Next  => run 'firebase login' in terminal and logged in by the automated process.
 * for each project, run 'firebase init'
 * select using space bar 'Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys'.
 * then select 'Use an existing project' => in terminal u will see ur all projects name. stop here.
 * now copy 'firebase deploy' from firebase site => continue to console
 * then u will get ur project name on top left side
 * then in terminal select that project name where u stopped.
 * 'What do you want to use as your public directory?' the answer of this question is dist.
 * 'Configure as a single-page app (rewrite all urls to /index.html)?' answer is y
 * Set up automatic builds and deploys with GitHub? (Y/n) answer is n
 * for every time, u want to deploy run 'npm run buld'
 * now paste the copied 'firebase deploy'
 * after that u will get the hosting url
 * Now we have to deploy our server side in another host
 */

// 18.0 deploy server in vercel
/**
 * go to vercel express deploy
 * run 'npm i -g vercel' in server. (first time in ur PC)
 *  run 'vercel login'
 * from doc instead of  "vercel dev", we use "vercel --prod"
 * "Link to existing project?" answer is no
 * create a vercel.json file and copy the following code 
 * {
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
        }
    ]
}
 * now ctrl + c to cancel then start with "vercel --prod" (if u change anything start with "vercel --prod")
 * now go vercel website => in profile icon Dashboard => now click the server
 * now go to settings => environment => add environment variables
 * use ur DB_USER as key and value cofee_monster
 * then press add another and add the password
 * now redeploy
 * now to check after a minutes 'https://mil-10-m-56-crud-with-expresso-mongodb-server.vercel.app/coffees' u will get the data. same as users.
 * now go to the client to replace all the "http://localhost:3000/" with "https://mil-10-m-56-crud-with-expresso-mongodb-server.vercel.app/ using ctrl + shift + f then click the below arrow button on left, then replace all button on right.
 * in every change in client side run "npm run build"
 * then "firebase deploy"



 */
