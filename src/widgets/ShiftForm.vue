<script setup lang="ts">
import { BaseButton, BaseSelect } from '@/shared/UI'
import { CityList } from '@/entities/city'
import { DepartmentList } from '@/entities/department'
import { WorkerList } from '@/entities/worker'
import { ShiftList } from '@/entities/shift'
import { TeamList } from '@/entities/team'
import { computed, watch } from 'vue'
import { useWorkAssignmentStore } from '@entities/workAssignment'
import { useRouter } from 'vue-router'
const shiftFormData = useWorkAssignmentStore.state
const router = useRouter()
const saveShift = () => {
  useWorkAssignmentStore.set(shiftFormData)
  router.push({ name: 'shift' })
}
const filteredDepartmentList = computed(() =>
  DepartmentList.filter((department) => department.city_id === shiftFormData.city_id),
)
const filteredWorkerList = computed(() =>
  WorkerList.filter((worker) => worker.department_id === shiftFormData.department_id),
)
// const worker_id = computed({
//   get: () =>
//     filteredWorkerList.value.some((item) => item.id === shiftFormData.worker_id)
//       ? shiftFormData.worker_id
//       : undefined,
//   set: (value) => (shiftFormData.worker_id = value),
// })
// const department_id = computed({
//   get: () =>
//     filteredDepartmentList.value.some((item) => item.id === shiftFormData.department_id)
//       ? shiftFormData.department_id
//       : undefined,
//   set: (value) => (shiftFormData.department_id = value),
// })
watch(
  () => shiftFormData.city_id,
  () => {
    shiftFormData.department_id = undefined
    shiftFormData.worker_id = undefined
  },
)
watch(
  () => shiftFormData.department_id,
  () => {
    shiftFormData.worker_id = undefined
  },
)
</script>

<template>
  <form action="" class="shift-form" @submit.prevent="saveShift">
    <div class="shift-form__body">
      <BaseSelect id="city" label="Город" v-model="shiftFormData.city_id">
        <option value="undefined" disabled selected>Выберите город</option>
        <option v-for="city in CityList" :key="city.id" :value="city.id">
          {{ city.name }}
        </option>
      </BaseSelect>
      <BaseSelect id="city" label="Цех" v-model="shiftFormData.department_id">
        <option value="undefined" disabled selected>
          {{ filteredDepartmentList.length ? 'Выберите цех' : 'Сначала выберите город' }}
        </option>

        <option
          v-for="department in filteredDepartmentList"
          :key="department.id"
          :value="department.id"
        >
          {{ department.name }}
        </option>
      </BaseSelect>
      <BaseSelect id="city" label="Сотрудник" v-model="shiftFormData.worker_id">
        <option value="undefined" disabled selected>
          {{ filteredWorkerList.length ? 'Выберите сотрудника' : 'Сначала выберите цех' }}
        </option>
        <option v-for="worker in filteredWorkerList" :key="worker.id" :value="worker.id">
          {{ worker.name }}
        </option>
      </BaseSelect>
      <BaseSelect id="city" label="Бригада" v-model="shiftFormData.team_id">
        <option value="undefined" disabled selected>Выберите бригаду</option>
        <option v-for="team in TeamList" :key="team.id" :value="team.id">
          {{ team.name }}
        </option>
      </BaseSelect>
      <BaseSelect id="city" label="Смена" v-model="shiftFormData.shift_id">
        <option value="undefined" disabled selected>Выберите смену</option>
        <option v-for="shift in ShiftList" :key="shift.id" :value="shift.id">
          {{ shift.name }}
        </option>
      </BaseSelect>
    </div>
    <div class="shift-form__footer">
      <BaseButton>Сохранить</BaseButton>
    </div>
  </form>
</template>
<style scoped>
.shift-form {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1rem;
}
.shift-form__body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.shift-form__footer {
  border-top: 1px solid var(--color-border-hover);
  padding-top: 1rem;
  margin-top: 1rem;
}
</style>
