let url = 'https://api.exchangerate-api.com/v4/latest/USD';
b = fetch(url);
b.then((data)=>{
    console.log(data)
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Error")
})

async function display() {
    let url = 'https://api.exchangerate-api.com/v4/latest/USD';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    // displayData(data);
    push_Fetch_Data(data);
}
function push_Fetch_Data(data){
    document.getElementById('convert').onclick = function(){
        document.getElementById('cname1').onchange = function(){
            let curr1 = document.getElementById('cname1')[0]
        }
        document.getElementById('cname2').onchange = function(){
            let curr2 = document.getElementById(cname2)[0]
        }
    }
    let curr_val_1 = data.curr1;
    console.log(curr_val_1);
    let container = document.getElementById('container');
    let conRate  = document.createElement('p')
    conRate.textContent = 'Conversion Rate = $(data.curr1) : $(data.curr2)'
    container.appendChild(conRate)
    
}
display();