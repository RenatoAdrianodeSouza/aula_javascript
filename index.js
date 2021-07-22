const classA = [
    {
        name: `Mayk`,
        grade: 9.8
    },
    {
        name: `Diego`,
        grade: 10
    },
    {
        name: `Valeska`,
        grade: 2
    },
    {
        name: `Mais um student`,
        grade: 10
    }
]

const classB = [
    {
        name: `Cleiton`,
        grade: 10
    },
    {
        name: `Robson`,
        grade: 10
    },
    {
        name: `Anita`,
        grade: 0
    },
    {
        name: `Novo Aluno`,
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    return average
}

function sendMessagem(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats`)
    } else {
        console.log(`${turma} average: ${average}.Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

markAsFlunked(classA)

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`Student ${student.name} is flunked!`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessagem(average1, `ClassA`)
sendMessagem(average2, `ClassB`)

studentsFlunked(classA)
studentsFlunked(classB)