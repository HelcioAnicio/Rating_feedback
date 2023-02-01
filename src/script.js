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