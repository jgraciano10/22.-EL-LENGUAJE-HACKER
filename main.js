vocabulario = {
    a: "4",
    b: "I3",
    c: "[",
    d: ")",
    e: "3",
    f: "|=",
    g: "&",
    h: "#",
    i: "1",
    j: ",_|",
    k: ">|",
    l: "1",
    m: "/\/\ ",
    n: "^/",
    o: "0",
    p: "|*",
    q: "(_,)",
    r: "I2",
    s: "5",
    t: "7",
    u: "(_)",
    v: "\/",
    w: "\/\/",
    x: "><",
    y: "j",
    z: "2",
    1: "L",
    2: "R",
    3: "E",
    4: "A",
    5: "S",
    6: "b",
    7: "T",
    8: "B",
    9: "g",
    0: "o"

}
document.getElementById("button.es").onclick =translate; 

function translate(){
    let mensaje_original = document.getElementById("information").value.toLowerCase().split("")
    console.log(mensaje_original)
    let mensaje_cifrado =""

    for(elemento in mensaje_original){
        if(vocabulario[mensaje_original[elemento]]===undefined){
            mensaje_cifrado+= mensaje_original[elemento]

        }else{
            mensaje_cifrado+=vocabulario[mensaje_original[elemento]]

        }
    }
    document.getElementById("impresion").innerHTML = `El mensaje cifrado es: ${mensaje_cifrado}`
}

