# PlaceholderProjectName

Steps to Setup the project -
1. Download the project(.zip) from github
2. Unzip it
3. Rename folder nodejs-scaffolding to your `project name`
4. Find and Replace `PlaceholderProjectName` with your `project name` in the entire project
5. cd app
6. Run npm install

## Migrations:
1. `npx migrate-mongo create your-migration-file-name`
2. `npx migrate-mongo up`

## Note
1. For every change in the model, create a new migration and verify if down migration reverts the DB to previous state