# Rating_feedback

This site is a page about feedback at the end of some service or assistance. Then, at the end, a screen with 5 numbers will appear and the person will choose the evaluation for the service or care, then another screen will appear thanking you for the time dedicated.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview


### The challenge

The users should be able to:
- A content of thanks for the dedicated time.
- It's possible to see 5 options to evaluatioin.
- The buttons are interactives.
- A screen informing which note was chosen.
- View the optimal layout depending on their device's screen size.

### Screenshot
![image](https://user-images.githubusercontent.com/117602073/215917902-ce1d4523-fb7b-4c08-b058-13aecf5f4253.png)

### Links

- https://rating-feedback.vercel.app/

## My process

### Built with

- Semantic HTML 
- CSS custom properties
- Flexbox
- Responsiveness
- Pseudo-classes
- JavaScript
- Repeat loop

### What I learned

On this project i implemented by first JS with a repeat loop.

```JS
let feedback_level = 0

const inputs = document.querySelectorAll('input');
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('change', ()=>{
        feedback_level = inputs[index].value
        document.querySelector('button').addEventListener('click', ()=>{
            document.querySelectorAll('main')[0].style.display='none';
            document.querySelectorAll('section')[0].style.display='flex';
            document.querySelector('span').innerHTML=feedback_level
        })
    })
}
```

### Continued development

I want to creat more websites with JS, it's so much incredible to see in action.

### Useful resources

This resource helped me a lot to understand how to do to implemented JS.
https://www.w3schools.com/jsref/default.asp
https://www.w3schools.com/jsref/dom_obj_document.asp

## Author

- Linkedin - https://www.linkedin.com/in/helcio-anicio/ 
- Vercel - https://vercel.com/helcioanicio


## Acknowledgments

One person helped me understand how some functions in JS works. 
Here below is his discord name and his github profile.
Wemestery#5027
https://github.com/DanielAbrante

