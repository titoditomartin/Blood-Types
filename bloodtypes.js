const AType = ["A+", "A-"];
const BType = ["B+", "B-",];
const ABType = ["AB+", "AB-"];
const ElsType = ["O+", "O-"];
function canGiveBlood(a,b) {

    if (a == "A+" && BType.includes(b))
    return false;
    
    else if (a == "A-" && BType.includes(b))
    return false;

    else if (a == "B+" && AType.includes(b))
    return false;
    
    else if (a == "B+" && AType.includes(b))
    return false;
    
    else
    return true;

}
     



console.log(canGiveBlood("O+", "A+"))
console.log(canGiveBlood("A-", "B-"))
console.log(canGiveBlood("A-", "AB+"))