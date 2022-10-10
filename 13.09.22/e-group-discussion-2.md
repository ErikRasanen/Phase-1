# Group discussion 2

Discuss in Groups:

1. The output of this snippet and explain what is happening.

```js
if ("0") {
  console.log('Hello');
}
```
ANSWER:

System checks if 0 is 0 and then outputs 'Hello'



2. The output of this snippet.

```js
if ("0") {
  console.log(null || 2 || undefined);
}
```
ANSWER: 2


3. How would you approach the following problem.

Miettimällä rakenteleen ja toteuttamalla sen.


You are supposed to write a program that asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show "Canceled", if it’s another string – then show "I don’t know you".

The password is checked as follows:

- If it equals “TheMaster”, then show “Welcome!”,
- Another string – show “Wrong password”,
- For an empty string or cancelled input, show “Canceled”

The flowchart can be found in the image folder.

## Reference
- https://javascript.info/

