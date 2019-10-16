
function dateFormat(){
    today = Date()
    let month = today.getUTCMonth() + 1;
    let day = today.getUTCDate();
    let year = today.getUTCFullYear();
    let newDate = `${year}-${month}-${day}`
    return newDate
    
}