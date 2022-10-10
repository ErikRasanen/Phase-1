# Activity

1. Create a new folder called `box-model`
2. Initialize a new git repo inside of the `box-model` folder (make sure you're not already inside of a Git repo!)
3. Make a new file called `index.html`
4. Make another new file called `styles.css`
5. Make a commit that includes both empty files. Add a meaningful commit message.
6. In the `index.html` file, add the following changes:
    
    ```html
    <div class="box-1">Box 1</div>
    ```
    
7. In the `styles.css` file, add the following:
    
    ```css
    box-1 {
    float: left;
    width: 200px;
    height: 200px;
    padding: 50px;
    border: 1px solid red;
    }

    ```
    
8. Make a new commit, including **ONLY the changes from the `index.html` file.**  Add a meaningful commit message.
9. Make a second commit including **ONLY the changes to the `styles.css file.**  Add a meaningful commit message.
10. Next up, add the following line to the end of `index.html`
    
    ```html
    <div class="box-2">Box 2</div>
    <div class="box-3">Box 3</div>
    ```
 
    
11. In the `styles.css` file,  add the following line to the end of the file:
    
    ```css
    .box-2 {
    float: left;
    width: 20%;
    height: 20%;
    padding-top: 50px;
    margin-left: 10px;
    border: 5px solid green;
    }

    .box-3 {
    float: left;
    width: 300px;
    padding: 30px;
    margin: 50px;
    border-top: 50px solid blue;
    }
    ```
    
12. **Make a commit that includes the changes to BOTH files.**  Add a meaningful commit message.
13. **Use a Git command to display a list of the commits.**