function search(arg1,arg2){
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] == arg2) {
            return i;
        }
    }
    return -1;
}