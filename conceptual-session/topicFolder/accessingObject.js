const Person ={
    name : 'abul',
    age : 23,
    contact : {
        phone: '235686',
        email : 'abul@gmail.com'
    },
    education : {
        schoolName : 'sreepur MC pilot',
        subjects : [
            {name : 'bangla', mark : 45},
            {name : 'english', mark : 65},
            {name : 'math', mark : 75}
        ]
    }
}

console.log(Person.education.subjects[1].mark);