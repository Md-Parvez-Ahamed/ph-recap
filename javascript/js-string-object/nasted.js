const college ={
    name:'KPB School And College',
    class : ['11','12'],
    events : ['Business Tour','Science Fair','International Mother Language Day'],
    unique: {
        color: 'blue',
        result : {
            gpa:5,
            merit: 'top'
        }
    }
}

const facility = college.unique.color;
const education= college.unique.result.gpa
console.log(facility,education);