//23) What does the addEventListener method do? Write an example.


// The addEventListener method in JavaScript is used to attach an event handler to an HTML element. This method allows you to listen for specific events and define what should happen when those events occur.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Listener</title>
</head>
<body>
  <button id="btn">Click</button>
  <script>
    document.getElementById("btn").addEventListener("click", () => alert("Hi!"));
  </script>
</body>
</html>
