let info = `My names Pedro Rodrigues,I\'m a senior at 
Bullard Havens Technical
 High School
and after high school I would like to pursure a career in 
Electrical Engeering.`;


const lpBOX = document.getElementById("landing-page")



let test = ()=>{
    console.log("hi");
    sleep(1);
    console.log("bye");
}

test();

function sleep(secs){
    let d = new Date();
    let start = d.getSeconds();
    let end = start + secs;
    console.log(start);
    while (true){
        let e = new Date().getSeconds()
        if (e >= end){
            break;
        }
    }
}


