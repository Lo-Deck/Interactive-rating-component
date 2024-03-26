
let value = 0;

const label = document.getElementById('form1');


if(label !== null)
{

    console.log(label);

    addEventListener("click", () => {
        for(let i = 0; i < label.length; i++)
        {
            if(label[i].checked === true)
            {

                value = label[i].value;

                localStorage.setItem('returnValue' , value); 

            }

        }

    });

    addEventListener("submit", (e) => {
            //alert('submit');
            for(let i = 0; i < label.length; i++)
            {
                if(value === 0 && i === label.length-1)
                {
                    alert('Please select a value');
                    e.preventDefault();
                }
            }
    });
    
}





