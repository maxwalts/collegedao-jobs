# College DAO job board
This is a simple job board for the College DAO. It's built with Next.js 13 and Tailwind CSS. The data is stored in an SQLite database.

## /
![Home page](https://github.com/maxwalts/collegedao-jobs/blob/main/public/ss-12.png?raw=true)

## /board
See all jobs, filter by category, create an application
![Board](https://github.com/maxwalts/collegedao-jobs/blob/main/public/ss-22.png?raw=true)

## /account
See which jobs you've applied to
![Account](https://github.com/maxwalts/collegedao-jobs/blob/main/public/ss-32.png?raw=true)

## /job
Create new job posts
![Job](https://github.com/maxwalts/collegedao-jobs/blob/main/public/ss-42.png?raw=true)

## How to run locally
```bash
yarn install
yarn dev
```

## database
migrated to supabase
https://app.supabase.com/project/zhdlpuzmlsqggimrqsoe/database/tables 

## Preview, deploy
Able to make comments on the preview site, but not on the production site.
Need to push to production this way because the github action is not working.
```bash
npx vercel
npx vercel --prod
```