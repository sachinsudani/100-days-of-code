var student = {
    firstName : "Raj",
    lastName : "Patel",
    rollNo : "13",
    class : "B",
    courseList : [],
    buyCourse : function (courseName1, courseName2){
        this.courseList.push(courseName1, courseName2); 
    }
}
var courseList = true
student.buyCourse("BCA", "BBA")
console.log(student.courseList)