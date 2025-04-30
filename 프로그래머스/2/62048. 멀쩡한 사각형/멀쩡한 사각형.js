function solution(w, h) {
    var answer = 0;
    let tmp = 0;
    let width = w;
    let hight = h;
    let gcb = 0;
    
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
    gcb = width;
    
    
    return w*h-(w+h-gcb);
}