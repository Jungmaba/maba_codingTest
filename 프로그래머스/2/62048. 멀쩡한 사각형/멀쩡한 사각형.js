function solution(w, h) {
    let tmp = 0;
    let width = w;
    let hight = h;
    let gcd = 0;
    
    if(width < hight){
        tmp = width;
        width = hight;
        hight = tmp;
    }
    
    while(hight!==0){
        tmp = width%hight;
        width = hight;
        hight = tmp;
    }
    gcd = width;
    
    return w*h-(w+h-gcb);
}
