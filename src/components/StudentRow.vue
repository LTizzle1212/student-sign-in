<script setup>

import { ref } from 'vue'
const props = defineProps({ // this is for the student table
    student: Object
})

const emit = defineEmits( [ 'arrived-or-left', 'delete-student'])

const isStudentPresent = ref(props.student.present) // prop for studenlist for is student present

const notifyArrivedOrLeft = () => {
    // tell parent that student arrived or left - emit event
    emit('arrived-or-left', props.student, isStudentPresent.value)
}

const confirmedTheDeleteStudent = () => {
    emit ('delete-student', props.student) // this is sending the prop back to studentTable
}

</script>


<template>

<tr class="align-middle" v-bind:class="{ present: student.present, absent: !student.present }">
            <td>{{ student.name }}</td>
            <td>{{ student.starID }}</td>
            <td> 
                <!-- todo v-model checkbox?-->
                <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft"> 
                <!-- v-model is studentpresent is for the const above-->
                <span class="mx-3" v-if="student.present">Here!</span>
                <span class="mx-3" v-else>Not present</span>
            </td>
            <td>
                <button class="btn btn-danger" v-on:click="confirmedTheDeleteStudent">
                    <i class="bi bi-trash-fill"></i> Delete
                </button>
            </td>
        </tr>


</template>


<style scoped>

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;
}

</style>