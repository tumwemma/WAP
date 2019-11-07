'use strict'

let students = [ { "studentId": "000-98-0001", "firstName": "James" }, { "studentId": "000-98-0002", "firstName": "Anna" }, { "studentId": "000-98-0003", "firstName": "Jeffrey" } ]

let loadData = (function (){
    if (students.length > 0) {
    let temp = ''

    students.forEach((u) => {
        temp += '<tr>'
        temp += '<td>' + u.studentId + '</td>'
        temp += '<td>' + u.firstName + '</td>'
        temp += '</tr>'
    })
        document.getElementById('jsonData').innerHTML = temp
    }
})

window.addEventListener('load', loadData())

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault()
    let stu = {}

    stu.studentId = document.getElementById('stuId').value
    stu.firstName = document.getElementById('name').value
    
    if(stu.studentId != "" & stu.firstName != ""){
        students.push(stu)
    }
    document.querySelector('#stuId').value = ''
    document.querySelector('#name').value = ''
    
    // console.log(stu)
    // console.log(students)
    loadData()
})
