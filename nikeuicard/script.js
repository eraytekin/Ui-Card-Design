var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var view = document.getElementById("sonuc");
var counter = 0;
        
plus.addEventListener("click", () => {
    counter+=1;
    return view.innerHTML = counter;
});
minus.addEventListener("click", () => {
    counter-=1; 
    if(counter < 0) counter = 0;
    return view.innerHTML = counter;
});

        