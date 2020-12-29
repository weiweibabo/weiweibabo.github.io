<template>
  <b-modal v-model="show" id="modal-center" :hide-footer="true" :title="rowData.title" title-class="title">
    <!-- 這邊的 v-if為除錯用 都有值的時候才會渲染畫面 -->
    <div class="img" v-if="rowData && rowData.num">
      <img class="big-pic" :src="require(`@/assets/img/home/pro-${proData.num}-${proNum}.jpg`)" />

      <div class="img-wrap">
        <div class="img-row" v-for="(items, index) in proArr" :key="index" @click="demo(items)">
          <img :src="require(`@/assets/img/home/pro-${proData.num}-${index + 1}.jpg`)" />
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <p class="pro-title">PRODUCT DESCIPTION</p>
      <div class="desciption">
        <P
          >Fuji Hill-Two-color one-inch pot,miniature cement cactus pot (including cactus/succulent). Tailor-made homes
          exclusive to one-inch pots. Placed on the desk,counter,healing basin.</P
        >
        <p>
          Hue : Two-tone cement/water blue Mount Fuji<br />
          Material : cement, sand, white cement/water blue pigment<br />
          Size : 4 x 4 x 7 cm
        </p>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    rowData: {
      type: Object,

      // 告訴程式它的型別是object
      default: () => {},
    },
  },
  data() {
    return {
      show: false,

      proData: {},
      // init 1
      proNum: 1,

      proArr: [{ data: { num: 1 } }, { data: { num: 2 } }, { data: { num: 3 } }],
    };
  },

  // 監聽 show的 value是否有改變 true <--> false
  // 如果改變了 就重新渲染畫面 (重新跑一次生命週期)
  watch: {
    value: {
      handler(val) {
        const vm = this;

        vm.show = val;

        // show = true時, rowData 賦值 proData
        if (val) {
          vm.proData = vm.rowData;
        }
      },
    },
    show(val) {
      const vm = this;

      // $emit =>子層將得到的值回傳給父層
      // 'input' => oninput事件
      // 點擊關閉時會回傳 false給show 執行關閉 modal的動作
      vm.$emit('input', val);
    },
  },

  methods: {
    //product detail demo
    demo(items) {
      const vm = this;

      // 把 items.data的num 賦值給 proNum
      vm.proNum = items.data.num;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: #006737;
}

.img {
  width: 18rem;
  display: flex;
  margin-bottom: 1rem;
  margin-left: 3rem;

  .big-pic {
    width: 100%;
  }

  .img-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .img-row {
      width: 5rem;
      margin: 0 1rem;
      img {
        width: 100%;
        padding-bottom: 3.5px;
        cursor: pointer;
      }
    }
  }
}

.modal-footer {
  justify-content: start;
  display: flex;
  padding: 1rem 2.75rem 0rem 2.75rem;

  .pro-title {
    font-size: 18px;
    font-weight: 500;
    color: #006737;
  }

  .desciption {
    color: rgb(116, 116, 116);
    line-height: 1.2;
    p {
      margin-top: 1rem;
    }
  }
}
</style>
