# React Timer with basic hooks

**This project is for mastering useEffect and other hooks**

## Learnt about :

- Basic of useEffect

- Cleanup function provided by useEffect after unmounting a component

- How the react strict mode works

## Various things to be careful about :
**In React 18, the useEffect runs 2 times**

Usually, if the dependency array is empty,
the useEffect functions like the lifecycle method `componentDidMount`

But, in React 18, the useEffect actually runs 2 times
when the component is mounted

This behaviour only occurs in StrictMode.

**Is this good or bad?**
- It is actually good as we can catch various errors in our app
related to our components.

For example :
In this counter example, if we dont keep a cleanup function after the
setInterval call has occured, the previous effect will keep on running
and the time will be doubled. 

This will be shown by the strict mode and we can easily catch and resolve
this problem.

So, in general, this is actually something good.


