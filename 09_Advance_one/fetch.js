/* "FETCH" FUNCTION IN JS
In simple words, 'fetch' is a function in JavaScript that allows you to make requests to the internet, 
like asking a server for information. Imagine you are asking a waiter in a restaurant 
for a menu – you are making a request, and the waiter brings back the menu as a response.

//1. What is fetch?
fetch is a built-in JavaScript function that allows you to make requests to external resources, 
typically to fetch data from a server or send data to a server.

//2. Why do we use fetch?
Imagine you're using a web page or app, and you want to get information from a server 
(like the latest weather data or news). fetch is a tool that helps your code talk to the server, 
ask for the information, and bring it back to your program.

//3. How does fetch work?
When you use fetch, you're sending a message to the server saying, 
"Hey, I want some data!" or "I want to send some data to you." 
The server then responds with the requested information or acknowledges that it received the data.

Here's a breakdown of the main parts:

// 1. Making a Request (fetch):
You (your JavaScript code) tell the browser that you want to get some information from 
a specific place on the internet (a URL). It's like telling the browser to fetch some data.

// 2. Getting a Response:
The browser (or your code) sends this request out to the internet, and it waits for a response. 
This is similar to the waiter going to the kitchen to get the menu.

// 3. Handling the Response:
When the response comes back, it might be successful (the server found what you asked for) or not (something went wrong). 
Just like when the waiter brings you the menu or says they couldn't find it.


// 4. Using the Data:
If everything went well, you usually want to do something with the information you received. 
For example, displaying it on a webpage or using it in your code. */

//Here's a simple example:
// Let's fetch information about a fake API
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

/* In this code:
==> `fetch('https://jsonplaceholder.typicode.com/todos/1')`: You are telling your code to fetch data 
    from a specific URL (like asking for a menu from a restaurant).

==> `.then(response => response.json())`: When the response comes back, this part says to convert the response 
    to JSON format (like translating the menu into a language you can understand).

==> `.then(data => console.log(data))`: Now you can use the data you got, 
    like printing it to the console (reading and understanding the menu).

==> `.catch(error => console.error('Error:', error))`: If something goes wrong (the waiter spills the soup), 
    this part handles the error and logs a message.

So, fetch is like a messenger between your code and the internet, 
helping you get and use information from different online sources.
*/  