<script setup>

// code here
// this will import the store to the table
import { useStudentStore } from '../stores/StudentStore' // this will populate it as typing

// store to refs
import { storeToRefs } from 'pinia';

import { computed } from 'vue';

import StudentRow from './StudentRow.vue'

const studentStore = useStudentStore()

const { sortedStudents, studentCount } = storeToRefs(studentStore) // this converts to ref for stdent store
// this adds the students on the student list by putting {} around studentList

const deleteStudent = (student) => {
    studentStore.deleteStudent(student)
} // this gets the deleteStudent to help

const arrivedOrLeft = (student, isStudentPresent) => {
    student.present = isStudentPresent // coming from studentStore
    studentStore.arrivedOrLeft(student)
} // works with the funcion arrivedOrLeft

const pluralStudentMessage = computed ( () => {
    if (studentCount.value === 1) {
        return 'There is 1 student in class'
    } else {
        return `There are ${studentCount.value} students in class`
    }
})



</script>

<template>

    <!-- HTML template here-->

    <div id="student-list-table" class="card m-2 p-2">
        <h4 class="card-title">Student List</h4>
        <h5 class="card-subtitle text-muted">{{ pluralStudentMessage }}</h5> <!-- this will say how many students there are-->
        <!-- adding "card-subtitle text-muted" added a light grey on the wording on the line above-->

        <div id="student-table">
            <table class="table">
                <thead>
                    <tr class="align-middle">
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- creating student row object-->
                    

                    <StudentRow 
                    v-for="student in sortedStudents"
                    v-bind:student="student"
                    v-on:arrived-or-left="arrivedOrLeft" 
                    v-on:delete-student="deleteStudent"
                    ></StudentRow>
                     <!-- event handler for arrivedorleft, goes with arrived or left on studentRow-->
                     <!-- saves in a prop for student-->

                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

/* CSS for this component here */
#student-table {
    max-height: 500px;
    overflow: scroll;
}

th, td {
    width: 25%;
    text-align: center;
}

</style>