<script setup>

// app.vue is going to be the container student form, studem message, student table

import NewStudentForm from './components/NewStudentForm.vue';
import StudentTable from './components/StudentTable.vue';
import StudentMessage from './components/StudentMessage.vue';

// code here

</script>

<template>

    <!-- HTML template here-->

    <!-- 3 components added from above-->

    <StudentMessage></StudentMessage>
    <StudentTable></StudentTable>
    <NewStudentForm></NewStudentForm>

</template>

<style scoped>

/* CSS for this component here */

</style>