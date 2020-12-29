<template>
  <div class="product">
    <!-- main area -->
    <div class="main-area">
      <!-- products -->
      <div class="title">
        <span>OUR PRODUCTS</span>
      </div>
      <div class="product-area">
        <div class="product-box " v-for="(item, index) in imgArr" :key="index">
          <div class="pic">
            <img :src="require(`@/assets/img/product/pro-${index + 1}-1.jpg`)" />
          </div>
          <div class="pro-name">
            <p class="p-title">{{ item.title }}</p>
            <p class="p-price">$ {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- fix button -->
    <div class="fix-btn" @click="scrollToTop()">
      <img :src="require('@/assets/img/arrow-up-btn/Arrow-gray.svg')" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgArr: [
        { title: 'LOVELY WOODEN POTS', price: '1500' },
        { title: 'TIGER TAIL ORCHID', price: '850' },
        { title: 'GROUNDHOG WOOD POT', price: '1050' },
        { title: 'IRON ROUND POT', price: '1330' },
        { title: 'CHRISTMAS WREATH', price: '1250' },
        { title: 'SUCCULENTS STANDING BASIN', price: '2450' },
        { title: 'SNOW MAN CEMENT POT', price: '690' },
        { title: 'CERAMIC LARGE CACTUS POT', price: '1350' },
        { title: 'LITTLE PIGGY CEMENT POT', price: '790' },
        { title: 'LOVELY KITTY CEMENT POT', price: '1280' },
        { title: 'SQUARE WOODEN POTS', price: '850' },
        { title: 'GIRAFFE CEMENT POT', price: '1190' },
        { title: 'GEOMETRIC CACTUS POT', price: '590' },
        { title: 'CEMENT ROUND SMALL POT', price: '480' },
        { title: 'SHUIYU LITTLE POTTED PLANTS', price: '650' },
        { title: 'FUJI HILL POTTED PLANT', price: '410' },
        { title: 'LITTLE PIG CEMENT POT', price: '690' },
        { title: 'CYPRESS CACTUS LARGE POT', price: '2700' },
        { title: 'HOUSE OF GLASS MOSAIC', price: '1090' },
        { title: 'MEDITERRANEAN STYLE POT', price: '590' },
      ],
    };
  },

  mounted() {
    window.addEventListener('scroll', this.yyy, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.yyy);
  },
  methods: {
    // scrollTop
    yyy() {
      let scrollTop = document.documentElement.scrollTop;
      // console.log(scrollTop);

      // fixed-btn arrow up
      if (scrollTop > 160) {
        document.querySelector('.fix-btn').classList.add('show');
      } else {
        document.querySelector('.fix-btn').classList.remove('show');
      }
    },

    // 返回最上面
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  // main-area
  .main-area {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 4rem;

    // product-area
    .title {
      width: 100%;
      height: 10.375rem;
      font-weight: 600;
      text-align: center;
      margin-top: 0rem;
      margin-bottom: 2rem;
      padding-top: 7rem;
      span {
        font-size: 2rem;
        font-weight: 600;
        color: #006737;
        border-bottom: 4px solid #b0d8bf;
      }
    }

    .product-area {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .product-box {
        display: flex;
        flex-direction: column;
        width: 15rem;
        margin: 1rem;

        .pic {
          display: flex;
          position: relative;
          font-size: 0px;
          width: 15rem;
          height: 15rem;

          cursor: pointer;

          img {
            width: 100%;
            object-fit: cover;
            &:hover {
              transition: 0.5s;
              box-shadow: 2px 2px 8px rgb(148, 148, 148);
              filter: brightness(80%);
            }
          }
        }

        .pro-name {
          color: #006737;
          font-weight: 500;
          margin-top: 0.5rem;

          .p-title {
            margin: 0;
            font-size: 0.9rem;
          }

          .p-price {
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  // fix-btn arrow-up
  .fix-btn {
    width: 2.2rem;
    position: fixed;
    top: 90%;
    right: 0.8rem;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }
  .fix-btn.show {
    transition: 0.8s;
    opacity: 1;
  }
}
</style>
