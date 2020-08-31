# notes-app

notes app is a cli based app to take notes.

## Setup
* Clone this repo.
```
cd notes-app
```
* Run app.js file.
* See [List of commands](#list-of-commands) for more info.

## List of commands:
* **add** *(to add new note)*
  * needs title and body
```
node app.js add --title="new title" --body="this is new title"
```
* **read** *(to read a note)*
  * needs title
```
node app.js read --title="new title"
```
* **remove** *(to remove a note)*
  *needs title
```
node app.js remove --title="new title"
```
* **list** *(to list all notes)*
```
node app.js list
```
