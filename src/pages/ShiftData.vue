<script setup lang="ts">
import { useWorkAssignmentStore } from '@entities/workAssignment'
import Container from '@shared/Container.vue'
import { computed } from 'vue'
import { CityList } from '@/entities/city'
import { DepartmentList } from '@/entities/department'
import { WorkerList } from '@/entities/worker'
import { ShiftList } from '@/entities/shift'
import { TeamList } from '@/entities/team'
const workAssignmentStore = useWorkAssignmentStore()
const workAssignment = workAssignmentStore.state
const city = computed(() => CityList.find((city) => city.id == workAssignment.city_id)?.name)
const department = computed(
  () => DepartmentList.find((department) => department.id == workAssignment.department_id)?.name,
)
const worker = computed(
  () => WorkerList.find((worker) => worker.id == workAssignment.worker_id)?.name,
)
const shift = computed(() => ShiftList.find((shift) => shift.id == workAssignment.shift_id)?.name)
const team = computed(() => TeamList.find((team) => team.id == workAssignment.team_id)?.name)
</script>
<template>
  <Container>
    <div class="result">
      <h1>Инфломация о смене</h1>
      <ul>
        <li>Город - {{ city || 'undefined' }}</li>
        <li>Цех - {{ department || 'undefined' }}</li>
        <li>Рабочий - {{ worker || 'undefined' }}</li>
        <li>Смена - {{ shift || 'undefined' }}</li>
        <li>Бригада - {{ team || 'undefined' }}</li>
      </ul>
    </div>
  </Container>
</template>

<style></style>
