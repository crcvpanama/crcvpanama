const patients = document.getElementsByClassName('patientsB');
const listPatientsA = document.querySelector('.patientsA');
const listHours = listPatientsA.querySelector('.item:nth-child(2)');
const newDiv = document.createElement('div');

// console.log(patients[0].outerText);
let list = JSON.stringify(patients[0].innerHTML);
// console.log(listPatientsA.innerHTML);
// console.log(list);

let wwww = listPatientsA.innerHTML.split(',');

let hora = list.split(',');
// console.log(hora);

const array = Object.values(hora);
// console.log(array)

// let val = array[1].split('\\');

let rr = hora.map((rows) => {
    // console.log(rows);
    let lista = {
        'ID': rows.ID,
        'Hora':rows.hora
    }

    return rows;
});
// console.log(val);


// let corr = function() {
//     for(let i=0;i<hora.length;i++){
//     console.log(hora[i]);
//     patientsCount = hora[i];
//     return patientsCount;
//     };
// };
// console.log(corr);
let count = hora.map((row) => {
    // console.log(row);

    let ww = {
        'ID': row.id,
        'Nombre': row.nombre,
        'Email': row.email,
        'Fecha': row.cita,
        'Hora': row.hora,
        'Telefono': row.telefono
    };
    // console.log(ww);
            // return ww;
    for(let i=0;i<row.length;i++){
        // console.log(row[i]);
        patientsCount = row[i];
        return patientsCount;
    };
});
count;
// console.log(count)
const horario = ['9:00','10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00'];

// patients


let j = JSON.stringify({patients});
// console.log(rr);
// let e = JSON.parse(hora);
let PO = hora.map((a) => {
    // console.log(a);
    return a;
});


// console.log(PO[0]);

// console.log(JSON.parse(PO[0]));

// let ii= 0;
let hour = () => {
    for(let i=0;i<horario.length;i++){
        // ii++;
    //     console.log(wwww[i]);
        console.log(hora[0]);
    // if (hora[i]=='1:00 p.m.'){
        
        newDiv.innerHTML += `
                     <div class="horario">
                     <h2>${horario[i]}</h2>
                     <br>
                     </div>
                     <br>
                     <h3></h3>
                    `;
    } 
};
    // listPatientsA.insertBefore(newDiv, listHours);
// };

// hour();



