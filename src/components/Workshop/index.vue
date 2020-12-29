<template>
  <div class="workshop ">
    <!-- banner carousel -->
    <div class="banner">
      <Carousel />
    </div>
    <div class="main-area">
      <!--workshop introduction -->
      <div class="title">
        <span class="web">GET INTERACTIVE WITH SUCCULENT WORKSHOPS</span>
        <span class="phone">WORKSHOPS</span>
      </div>
      <div class="workshop-content">
        <div class="text-area">
          <div class="title-1">
            <h4>OUR WORKSHOPS ARE GREAT FOR：</h4>
          </div>

          <div class="list">
            <ul>
              <li>Corporate Events & Gatherings</li>
              <li>Youth Groups</li>
              <li>Neighborhood Groups</li>
              <li>Moms Clubs</li>
            </ul>

            <ul>
              <li>Girls Night Out Gathering</li>
              <li>Team Building Activities</li>
              <li>Holiday Crafting</li>
              <li>and more!</li>
            </ul>
          </div>
          <div class="word-box web">
            <p class="word">
              We will happily tailor the experience to fit your theme, environment or time constraints.
            </p>
          </div>
        </div>
      </div>

      <!-- class  -->
      <div class="class-area">
        <div class="class-info">
          <div class="class" v-for="(item, index) in classArr" :key="index">
            <div>
              <router-link to=""><img :src="require(`@/assets/img/workshop/class-${index + 1}.png`)"/></router-link>
            </div>
            <div>
              <router-link to="">
                <h5>{{ item.title }}</h5>
              </router-link>
              <p>{{ item.date }} <br />{{ item.time }}</p>
            </div>
          </div>

          <transition-group name="fade" v-if="!showMore" class="class-box">
            <div class="class " v-for="(item, index) in classArr2" :key="index">
              <div>
                <router-link to="">
                  <img :src="require(`@/assets/img/workshop/class2-${index + 1}.png`)" />
                </router-link>
              </div>
              <div>
                <router-link to="">
                  <h5>{{ item.title }}</h5>
                </router-link>
                <p>{{ item.date }} <br />{{ item.time }}</p>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
      <div class="btn-area">
        <button class="more-btn" @click="showMore = !showMore">
          <p v-if="showMore">VIEW MORE</p>
          <p v-else>PICK UP</p>
        </button>
      </div>
    </div>

    <!-- fix button -->
    <div class="fix-btn" @click="scrollToTop()">
      <img :src="require('@/assets/img/arrow-up-btn/Arrow-gray.svg')" />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Workshop/Carousel';
export default {
  components: {
    Carousel,
  },
  data() {
    return {
      showMore: true,

      classArr: [
        { title: 'HOUSE OF GLASS MOSAIC', date: 'Friday, October 09, 2020', time: '6:00 PM to 8:00 PM' },
        { title: 'MINI SUCCSENTS SCENE', date: 'Sunday, October 17, 2020', time: '2:00 PM to 4:00 PM' },
        { title: 'CEMENT MAKING SUCCSENTS', date: 'Friday, October 26, 2020', time: '6:00 PM to 8:00 PM' },
        { title: 'MINI SUCCSENTS EARRINGS', date: 'Friday, November 07, 2020', time: '2:00 PM to 4:00 PM' },
        { title: 'CEMENT POTTING CREAF', date: 'Sunday, November 14, 2020', time: '6:00 PM to 8:00 PM' },
        { title: 'CACTUS JEWELRY HOLDER', date: 'Friday, November 21, 2020', time: '6:00 PM to 8:00 PM' },
      ],

      classArr2: [
        { title: 'NEUTRAL SUCCULENT GIFT BOX', date: 'Friday, December 04, 2020', time: '6:00 PM to 8:00 PM' },
        { title: 'SUCCULENT TERRARIUM', date: 'Sunday, December 13, 2020', time: '1:00 PM to 3:00 PM' },
        { title: 'SUCCULENT FLORAL WORKSHOP', date: 'Friday, December 18, 2020', time: '6:00 PM to 8:00 PM' },
        { title: 'MOSSBALL WORKSHOP', date: 'Friday, January 01, 2021', time: '2:00 PM to 4:00 PM' },
        { title: 'DELIGHTFUL FLORAL WORKSHOP', date: 'Sunday, January 03, 2021', time: '1:00 PM to 3:00 PM' },
        { title: 'CACTUS GINGERBREAD HOUSE', date: 'Friday, January 08, 2021', time: '6:00 PM to 8:00 PM' },
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
.main-area {
  max-width: 1200px;
  margin: 0 auto;

  // workshop introduction

  .title {
    text-align: center;
    margin: 5rem 0 3rem 0;

    span {
      font-weight: 600;
      font-size: 2rem;
      font-weight: 600;
      color: #006737;
      border-bottom: 4px solid #b0d8bf;
    }
  }

  .workshop-content {
    display: flex;
    justify-content: center;

    .text-area {
      display: flex;
      flex-direction: column;

      .title-1 {
        padding-left: 5.6rem;

        h4 {
          color: #006737;
          margin-bottom: 1.2rem;
        }
      }

      .list {
        display: flex;
        justify-content: center;
        font-size: 1.1rem;

        ul {
          margin: 0 1rem;
        }
      }
      .word {
        margin: 1.7rem 0 3rem 0;
        font-size: 1.1rem;
      }
    }
  }

  // class-area
  .class-area {
    display: flex;
    border-top: 2px solid #b0d8bf;

    .class-info {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .class {
        margin: 1.3rem auto;
        width: 355px;

        img {
          width: 100%;
          box-shadow: 2px 2px 8px rgb(148, 148, 148);

          &:hover {
            filter: brightness(80%);
            transition: 0.5s;
          }
        }

        h5 {
          color: #006737;
          margin-top: 2rem;
          border-bottom: 2px solid #b0d8bf;
          &:hover {
            color: #b0d8bf;
            transition: 0.5s;
          }
        }
      }

      .class-box {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  //btn-area
  .btn-area {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    .more-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        color: #fff;
        background: #006737;
        border: 0.125rem solid #006737;
        border: 0.125rem solid #006737;
        padding: 0.7rem 1rem;
        border-radius: 0.3rem;
        margin: 0;

        &:hover {
          color: #006737;
          background: #fff;
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

// view more btn
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}

@media (min-width: 768px) {
  .phone {
    display: none;
  }
}

@media screen and(max-width:767px) {
  .web {
    display: none !important;
  }

  .workshop {
    .banner {
      margin-top: 3.3rem;
    }

    .main-area {
      .title {
        margin-top: 3rem;
      }

      .workshop-content {
        .text-area {
          align-items: center;
          .title-1 {
            padding-left: 0rem;
            h4 {
              font-size: 1rem;
            }
          }

          .list {
            flex-direction: column;
          }

          .word-box {
            .word {
              margin: 1.7rem 0 3rem 1rem;
            }
          }
        }
      }
      .class-area {
        margin-top: 2rem;

        .class-info {
          .class {
            width: 90%;
          }
        }
      }
    }
  }
}

@media screen and(max-width:376px) {
  .web {
    display: none !important;
  }

  .main-area {
    .class-area {
      .class-info {
        .class {
          h5 {
            font-size: 1.05rem;
          }
        }
      }
    }
  }
}
</style>
