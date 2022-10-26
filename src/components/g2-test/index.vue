<template>
  <div class="text-center mt-10">
    <p>G2组件测试</p>
    <div id="container" class="inline-block" style="width: 400px;height: 200px;" />
  </div>
</template>
<script>
import { Line } from 'G2Plot'
import { g2LinData } from '@/api/test'
export default {
  mounted() {
    this.chartInit()
  },
  methods: {
    async chartInit() {
      const data = await g2LinData()
      const line = new Line('container', {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
          // type: 'timeCat',
          tickCount: 5
        }
      })

      line.render()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
