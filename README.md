# acapedia-technical-assessment-vue

- Please do not take more than 3-4 hours on this challenge.
- If you are unable to complete a portion it is OK. We're looking to see how you work with and around the challenges.
- If there are items left outstanding / things you did not get to please note them in the Pull request
- Use git locally to track all the changes
- Your `main` branch should have the project without your changes
- Your implementation should be in another branch
- Push the code to a private repo in your github and give us access to it
- When you're complete create a Pull Request, including all the relevant info and assign us as reviewers.

## Tasks:

### Improve the list of posts functionality

**Requirements:**

- Add a debounce search by title
- Add a filter of posts by category
- Add pagination
- Add the amount of comments, which should be calculated in the frontend from the list of comments

**Notes:**

- The only existing categories are: tech, code, cars and money
- How to [filter in json server](https://github.com/typicode/json-server#filter)
- How to [paginate in json server](https://github.com/typicode/json-server#paginate)
- How to [include a relationship in json server](https://github.com/typicode/json-server#relationships)
- The UI is not important for this part, only the components and their functionalities.

### Show Post comments

**Requirements:**

- add a post detail page (UI is not important) using a dialog, just show the same things than in list
- Show the list of comments below the post's details
- Add the ability to remove a comment
- Comments should be a new module in the store and api (don't embed the comments for this parts, you must fetch them from [/comments](http://localhost:3000/comments))
- The UI is not important for this part, only the components and their functionalities.

**Notes:**

- You don't have to add the ability to add a new comment, just use the ones existing in the db.json

### Show a new List of posts on the vue route /posts-v2

**Requirements:**

- it should reuse the same `ListPosts` component like in the original list of posts (including the UI changes), do any change you need.
- it should fetch the posts from the other api on localhost:3001
- The UI is not important for this part, only the components and their functionalities.
- Show the details here is not required

### Implement UI for the list of posts

**Requirements:**

- Show a grid of 4 posts per row
- Each card should be a link to the post detail
- Showing the image, title, category, description and the amount of comments. Similar as the wire-frame.
- Use vuetify components
- The UI is important here but don't spend too much time, a simple UI like in [the wireframe](src/assets/list-posts-ui.png)

## Things we will be assessing

- Clean code
- Vuejs and Vuex best practices
- Structuring your code to match the good patterns of our code (do not follow the existing code smells though)
- Error handling, logging and form validation
- Pull request description and clarity
- Fix some of the existing code smells
- Loaders when calling the API

## Project setup

```
# nvm use

npm install
npm install -g json-server
```

### Compiles and hot-reloads for development

```
npm run serve

# first server
json-server --watch db.json --port 3000

# second server
json-server --watch db2.json --port 3001
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
