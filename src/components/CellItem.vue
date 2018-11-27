<template>
  <div class="cell">
    <div
      class="cell-info"
      :style="styleObject"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div class="cell-info-head">
        <img src="@/assets/head.png">
      </div>
      <div class="cell-info-detail">
        <span>藤原拓海</span>
        <span style="font-size: 16px;color: #aaa">我今天送豆腐见到一台GTR</span>
      </div>
    </div>
    <div class="cell-read">
      <span>标为已读</span>
    </div>
    <div class="cell-delete">
      <span>删除</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CellItem',
  data () {
    return {
      startTx: 0, // 开始滑动的x值
      endTx: 0, // 滑动后的x值
      distanceX: 0, // 滑动距离，在touchmove中动态赋值为endTx - startTx
      startMarginLeft: 0, // 开始滑动时的margin-left值
      marginLeft: 0
    }
  },
  computed: {
    // 用于实时更新“信息详情”的margin-left值
    styleObject: function () {
      return {
        marginLeft: this.marginLeft + 'px'
      }
    }
  },
  methods: {
    handleTouchStart (e) {
      this.startTx = e.touches[0].clientX
      this.startMarginLeft = this.marginLeft
    },
    handleTouchMove (e) {
      this.endTx = e.changedTouches[0].clientX
      this.distanceX = this.startTx - this.endTx // 滑动距离
      this.marginLeft = this.startMarginLeft - this.distanceX
    },
    handleTouchEnd (e) {
      if (this.marginLeft > -60) { // margin-left大于-60px则收起
        this.marginLeft = 0
      } else {
        this.marginLeft = -120 // 否则展开
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}
.cell {
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid #aaa;
}
.cell-info {
  display: flex;
  width: 100%;
  flex-shrink: 0;
}
.cell-info-head {
  box-sizing: border-box; /* 设置为IE盒模型 */
  width: 75px;
  height: 75px;
  padding: 10px;
}
.cell-info-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 0 15px 15px;
}
.cell-read {
  display: flex;
  align-items: center;
  width: 80px;
  background-color: #ccc;
}
.cell-delete {
  display: flex;
  align-items: center;
  width: 40px;
  background-color: red;
}
img {
  width: 55px;
  height: 55px;
  border-radius: 5px;
}
span {
  width: 0; /* 宽度为0 */
  font-size: 18px;
  white-space: nowrap;
  margin-left: 5%;/* 这里一定要用百分比，不然会撑出高度，无法完全缩放为0 */
}
</style>
