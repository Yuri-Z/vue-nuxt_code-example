<template lang="html">
  <table class="table table-striped">
    <tbody>
      <tr>
        <th>Занятость</th>
        <td>
          <ul class="table__list" v-for="index in employment_length" :key="index">
            <li class="table__list-item" v-for="(item, index2) in info.employment.slice((index - 1) * 3, 3 * index)" :key="index2">
              {{ item }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>График работы</th>
        <td>
          <ul class="table__list" v-for="index in employment_length" :key="index">
            <li class="table__list-item" v-for="(item, index2) in info.work_time.slice((index - 1) * 4, 4 * index)" :key="index2">
              {{ item }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

  export default {
    props: ['info'],
    data() {
      return {
        employment_length: Math.ceil(this.info.employment.length / 3),
        work_time_length: Math.ceil(this.info.work_time.length / 4),
      }
    }
  }
</script>

<style src="~/assets/styles/pages/social/profile/vProfileTable.scss" lang="scss" scoped/>
