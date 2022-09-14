let nhietdo = +prompt(" nhap nhiet do");
while (nhietdo < 20 || nhietdo > 100 || nhietdo >= 20 || nhietdo <= 100) {
    if (nhietdo <= 20) {
        alert('tang nhiet do');
        nhietdo = +prompt(" nhap nhiet do");
    } else if (nhietdo >= 100) {
        alert('giam nhiet do');
        nhietdo = +prompt(" nhap nhiet do");
    }
    alert('trong khoang cho phep');
    nhietdo = +prompt(" nhap nhiet do");
}