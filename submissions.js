let submissions = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true},
    { name: "Joe", score: 77, date: "2018-05-14", passed: true},
    { name: "Jack", score: 59, date: "2019-07-05", passed: false},
    { name: "Jill", score: 88, date: "2020-004-22", passed: true},

];

function addSubMission (array, newName, newScore, newDate) {
    let newSubmission = { 
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >=60,
    };
    array.push(newSubmission);
}

addSubMission(submissions, 'John', 62, "2021-08-10");
addSubMission(submissions, "Tim", 98, "2020-09-30");

console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index,1)
}
console.log('before delete')
console.table(submissions)
deleteSubmissionByIndex(submissions,submissions.length-1)
console.log('after delete')
console.table(submissions)


const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex((submission)=>{
        return submission.name() == name() 
    } )

    console.log(`found ${name} at index: ${index}`)

    deleteSubmissionByIndex(array,index)
}

console.log('before delete')
console.table(submissions)
deleteSubmissionByName(submissions, "joE")
console.log('after delete')
console.table(submissions)



const editSubmission = (array, index, score) => {
    let submission = submissions[index]
    submission.score = score
    if(submission.score >=60) {
      
        submission.passed = true
    } else {
        submission.passed = false
    }
}
console.table(submissions)
editSubmission(submissions, 1, 78)
console.log('after edit')
console.table(submissions)



const findSubmissionByname = (array,name)=>{
    const found  = array.find((submission)=> {
        return submission.name.toLowerCase() == name.toLowerCase()
    })
    return found;
}


console.log(findSubmissionByname(submissions,'john'))

const findLowestScore = (array) =>{
    let lowest_score = null;
    let lowest_object = null;
    //find lowest_score with forEach loop
    array.forEach((submission,index)=>{
        if (!lowest_score){
            lowest_score = submission.score;
            lowest_object = submission;
        }
        else if (submission.score < lowest_score) {
            lowest_score = submission.score
            lowest_object = submission
        }
    });

    return lowest_object;
}

console.log('lowes_score', findLowestScore(submissions))


const findAverageScore = (array)=>{
    //total_sum/sample_size
    let total = 0;
    let sample_size = array.length;

    for (let index = 0; index < array.length; index++) {
        total = total + array[index].score;
        
    }

    return total/sample_size;
}


console.log('averagescore', findAverageScore(submissions))

const filterPassing = (array)=>{
    let passed_submissions = null;

    passed_submissions = array.filter((submission) => submission.passed)
    return passed_submissions;

}
console.log('filterpassing', filterPassing(submissions).length)


const filter90AndAbove = (array) =>{
    let _90AndAbove = null;

    _90AndAbove = array.filter((submission) => submission.score >=90)
    return _90AndAbove;
}

console.log('filter90AndAbove', filter90AndAbove(submissions).length)