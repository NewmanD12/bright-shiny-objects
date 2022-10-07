// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(f_name, l_name){
    user = {
        firstName : f_name,
        lastName : l_name
    }
    return user
}

function setAge(user, age){
    user['age'] = age
    return user
}

function incrementAge(user){
    user['age'] = user['age'] + 1
    return user
}

function fixCar(car){
    car['needsMaintenance'] = false
    return car
}

function addGrades(student, grades){
    for(let grade of grades){
        student.grades.push(grade)
    }
    return student
}

function getDataType(object, key){
    return typeof object[key]
}

function addTodo(to_do_list, new_to_do){
    to_do_list.push(new_to_do)
    return to_do_list
}

function addSong(playlist, song){
    playlist['duration'] += song['duration']
    playlist['songs'].push(song)
    return playlist
}

function updateReportCard(report_card, new_grade){
    if(new_grade < report_card['lowestGrade']){
        report_card['lowestGrade'] = new_grade
    }   else if(new_grade > report_card['highestGrade']){
        report_card['highestGrade'] = new_grade
    }
    report_card['grades'].push(new_grade)
    grades_total = 0
    for(let grade of report_card['grades']){
        grades_total += grade
    }
    report_card['averageGrade'] = grades_total / report_card['grades'].length
    return report_card
}




// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
