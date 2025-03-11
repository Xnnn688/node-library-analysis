<template>
  <!-- ref 定义了chart ref相关联-->
  <div ref="chart" style="width: 800px; height: 600px"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

// defineComponent是vue3对ts的支持
export default defineComponent({
  name: 'GraphChart',
  // vue3 组合式api入口函数  通过return返回信息
  setup() {
    // 元素使用ref进行关联  关联之后可以通过chart直接获取元素的相关信息
    // vue3 响应式引用
    const chart = ref<HTMLDivElement | null>(null)

    // 生命周期钩子 组件挂载到dom后执行
    onMounted(() => {
      if (chart.value) {
        initChart(chart.value)
      }
    })

    const initChart = (chartDom: HTMLDivElement) => {
      // 初始化 ECharts 实例
      const myChart = echarts.init(chartDom)

      // 关系图的配置项和数据
      //TODO 后端获取数据过来替换
      const option: echarts.EChartsOption = {
        title: {
          text: '关系图示例',
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'force', // 力导向图布局
            data: [
              { id: '1', name: '节点1', symbolSize: 50 },
              { id: '2', name: '节点2', symbolSize: 40 },
              { id: '3', name: '节点3', symbolSize: 30 },
              { id: '4', name: '节点4', symbolSize: 20 },
              { id: '5', name: '节点5', symbolSize: 10 },
            ],
            links: [
              { source: '1', target: '2' },
              { source: '1', target: '3' },
              { source: '2', target: '4' },
              { source: '3', target: '4' },
              { source: '4', target: '5' },
            ],
            roam: true, // 是否允许缩放和平移
            label: {
              show: true,
            },
            force: {
              repulsion: 1000, // 节点之间的斥力
              edgeLength: 200, // 边的长度
            },
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      }

      // 使用配置项渲染图表
      myChart.setOption(option)
    }

    return {
      chart,
    }
  },
})
</script>

<style scoped>
/* 你可以在这里添加一些样式 */
</style>
