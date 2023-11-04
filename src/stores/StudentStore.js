import { defineStore } from "pinia"
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        { name: 'A. Student', starID: 'aa1234aa', present: false},
        { name: 'B. Student', starID: 'bb1234bb', present: false},
        


    ])

    const mostRecentStudent = ref( {} ) // empty object

    function addNewStudent(student) {
    studentList.value.push(student)
    } // this adds the student to the end of the list 


    // this is getting the delete button working
    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student
        }) // if return true it keeps the student and false gets rid of 
        mostRecentStudent.value = {} // reset most recent message
    }


    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    const studentCount = computed( () => {
        return studentList.value.length
    }) // thhis updated the student count

    // computed means computed property
    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    }) // this will sort the students in alpbetical 


    return {
        // reactive data
        studentList,
        mostRecentStudent,

        // functions 
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        //computed properties
        studentCount,
        sortedStudents

        //if confused during lab, go through functions above
    }

})