const fetchBMIVALUE=(height,weight)=>
        Math.round(weight / (height * height))



const generate = ()=>Math.floor(Math.random()*1500)

function fetchBMI(bmi){

    let lowerThan =[

        {
            key:'Underweight',
            value:18.5
        },{
            key:'Normal weight',
            value:25
        },{
            key:'Overweight',
            value:30
        }
    ]


    for (const obj of lowerThan){

        if(bmi<obj.value){
            return obj.key
        }
    }

    if(bmi>30){
        return "Obesity"
    }
}

function count(array_elements) {
    // array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                console.log(current + ' comes --> ' + cnt + ' times');
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + ' comes --> ' + cnt + ' times');
    }

}

let array=[]
for (let i=0;i<100000;i++){

    const weight = generate();
    const height = generate();
    const bmi = fetchBMIVALUE(height,weight)

    array.push(fetchBMI(bmi))
    // console.log(fetchBMI(bmi))
}

count(array)
// console.log(array)
