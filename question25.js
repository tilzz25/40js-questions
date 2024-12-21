//25) Write a script to change the background color of a webpage when a button is clicked.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Background</title>
</head>
<body>
<button onclick="document.body.style.backgroundColor = ['red', 'blue', 'green', 'yellow', 'pink'][Math.floor(Math.random()*5)]">Change Color</button>
</html>
