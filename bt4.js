let F = 0;
let F0 = 0;
let F1 = 1;
let fibonacci = "";
let div5;
for (let i = 0; i < 20; i ++){
    if (i == 0){
        F = 1;
        fibonacci += F +"<br>";
    }else {
        F = F1 + F0;
        F0 = F1;
        F1 = F;
        fibonacci += F + "<br>";
        if (F % 5 == 0){
            div5 = F;
            break;

        }
    }
}
document.write("so dau tien chia het cho 5 la: "+ div5);
