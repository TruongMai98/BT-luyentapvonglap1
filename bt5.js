let F = 0;
let F0 = 0;
let F1 = 1;
let fibonacci = "";
let sumFibonacci = 0;
for (let i = 0; i < 20; i ++){
    if (i == 0){
        F = 1;
        fibonacci += F +" ";
    }else {
        F = F1 + F0;
        F0 = F1;
        F1 = F;
        fibonacci += F + " ";
        sumFibonacci += F;
    }
}
document.write("Tong cua day so fibonacci la: " + sumFibonacci);