import { defineStore } from 'pinia'
import type { WorkAssignment } from './WorkAssignment'
import { reactive } from 'vue'

const WORK_ASSIGN_KEY = 'work_assignment'

export const useWorkAssignmentStore = defineStore('workAssignment', () => {
  window.addEventListener('storage', (e) => {
    if (e.key == WORK_ASSIGN_KEY) Object.assign(workAssignment, getWorkAssignmentFromLocalStorage())
  })
  function getWorkAssignmentFromLocalStorage(): WorkAssignment {
    const jsonWorkAssignment = localStorage.getItem(WORK_ASSIGN_KEY)
    if (jsonWorkAssignment) return JSON.parse(jsonWorkAssignment)
    else {
      return {
        city_id: undefined,
        department_id: undefined,
        worker_id: undefined,
        team_id: undefined,
        shift_id: undefined,
      }
    }
  }
  function saveWorkAssignmentToLocalStorage(workAssignment: WorkAssignment) {
    localStorage.setItem(WORK_ASSIGN_KEY, JSON.stringify(workAssignment))
  }

  const workAssignment = reactive(getWorkAssignmentFromLocalStorage())

  return {
    state: workAssignment,
    set: saveWorkAssignmentToLocalStorage,
    get: getWorkAssignmentFromLocalStorage,
  }
})
