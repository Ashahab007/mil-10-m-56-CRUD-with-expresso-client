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
