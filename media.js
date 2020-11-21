const classA = [
    {
        name: `Renato`,
        grade: 10
    },
    {
        name: `Alexandra`,
        grade: 8
    },
    {
        name: `Sarah`,
        grade: 5
    },
    {
        name: `Leonardo`,
        grade: 9
    }
]

const classB = [
    {
        name: `Paulo`,
        grade: 9
    },
    {
        name: `Tiago`,
        grade: 8
    },
    {
        name: `Dioner`,
        grade: 3
    },
    {
        name: `Diego`,
        grade: 4
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

function sendMessage(average, turma) {
    if (average > 7) {
        console.log(`${turma} average: ${average}. Congrats.`)
    } else {
        console.log(`${turma} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 7) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, `turmaA`)
sendMessage(average2, `turmaB`)

studentsReprovados(classA)
studentsReprovados(classB)