function doanS(){
    let phamVi = +prompt('bat dau tu 0 den so ban chon de thiet lap pham vi');
    let chonSo = +prompt('chon so ban muon trong pham vi');
    let soRandom = Math.floor(Math.random() * phamVi);
    let count = 0;
    while (soRandom != chonSo){
        count++;
        if (count == 3){
            alert("het 3 luot doan");
            break;
        }else if (soRandom > chonSo){
            alert('so ban doan be hon');
        }else if (soRandom < chonSo){
            alert('soban chon lon hon');
        }
        chonSo = +prompt('chon so ban muon trong pham vi');
    }
    if (soRandom == chonSo){
        alert('ban doan dung la so ' + soRandom);
    }

}
