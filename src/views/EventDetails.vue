<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEventById(this.id)
      .then(response => {
        console.log(response.data)
        this.event = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style></style>
