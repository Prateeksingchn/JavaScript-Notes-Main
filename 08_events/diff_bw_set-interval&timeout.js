// 1.setTimeout:

/*The setTimeout function is used to execute a piece of code or a function after a specified delay (in milliseconds).
It triggers the execution of the code once, after the specified delay.
Syntax: setTimeout(callback, delay, arg1, arg2, ...) */

Example:
setTimeout(function() {
  console.log('Delayed message');
}, 1000); // Executes after 1000 milliseconds (1 second)


/* ----------------------------------------------------------------------------------------------------------------------- */

// 2.setInterval:

/* The setInterval function is used to repeatedly execute a piece of code or a function at fixed intervals (in milliseconds).
It triggers the execution of the code at regular intervals until cleared.
Syntax: setInterval(callback, delay, arg1, arg2, ...) */

Example:
setInterval(function() {
  console.log('Repeated message');
}, 2000); // Executes every 2000 milliseconds (2 seconds)



/* ----------------------------------------------------------------------------------------------------------------------- */
// Key Differences:
/*setTimeout triggers the execution once after the specified delay, 
  while setInterval triggers the execution repeatedly at fixed intervals.

  setInterval will keep executing until explicitly stopped using clearInterval.
  It's important to note that the actual time between executions in setInterval
  is the delay plus the time it takes for the code to run. 
  If the code takes longer to execute than the specified delay, there can be overlap.
  In summary, use setTimeout for a one-time delay, and setInterval for repeated executions 
  at fixed intervals. Be cautious with setInterval to ensure that the code within it 
  completes within the specified interval to prevent overlapping executions. */