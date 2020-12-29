<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item, index) in blogArr" :key="index">
      <div class="article">
        <img :src="require(`@/assets/img/home/article-${index + 1}.jpg`)" />
        <router-link to="">
          <span>{{ item.title }}</span>
        </router-link>
        <p>{{ item.content }}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      // swiper
      swiperOption: {
        slidesPerView: 3,
        loop: true,
        // spaceBetween: 25,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },

      blogArr: [
        {
          title: 'HOW TO PLANT A SUCCULENT',
          content:
            'If you’ve been wondering how to plant succulents to ensure they grow long and happy lives, this is the post for you! This will give you a foundation.',
        },
        {
          title: 'HOW TO PAINT TERRACOTTA POTS',
          content:
            'These simple hand dipped pots are an easy way to dress up a plain terra cotta pot. Use a variety of colors and paint shapes to be very interesting.',
        },
        {
          title: 'CARING FOR SUCCULENTS',
          content:
            'Caring for succulents in winter doesn’t have to keep you guessing!In this post you’ll learn how toproperly care your succulents over the winter.',
        },
        {
          title: 'WAYS TO IDENTIFY SUCCULENTS',
          content:
            'Knowing what types of succulents you own can help you better care for them because not all types of succulents need the exact same care.',
        },
        {
          title: 'MINI SUCCULENT GARDEN IDEAS',
          content:
            'You’ll love these clever ideas for creating a mini succulent garden! Even if you don’t have much space, you’ll definitely be able to fit your place.',
        },
        {
          title: 'MAKE A SUCCULENT WREATH',
          content:
            'Learn how to make living succulents wreath with this step by step photo tutorial! This fun DIY project is sure to make a statement on that.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  display: flex;

  /deep/.swiper-pagination-bullet-active {
    background: #006737;
  }
  .swiper-slide {
    width: 372px !important;
    height: 360px !important;
    margin: 3rem 1.5rem 2.6rem 1.5rem;

    .article {
      display: flex;
      flex-direction: column;
      box-shadow: 3px 3px 10px rgb(148, 148, 148);
      text-align: center;

      &:hover {
        margin: 1.562rem 0;
        color: #fff;
        transition: 0.5s;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 1.2rem;

        &:hover {
          filter: brightness(80%);
          transition: 0.5s;
        }
      }

      span {
        border-bottom: 2px solid #006737;
        margin: 1.562rem 0;
        color: #006737;
        font-weight: 600;
        font-size: 1.25rem;
      }

      p {
        color: #fff;
        font-size: 1rem;
        line-height: 1.2rem;
        padding: 0.2rem;
        text-align: center;
        margin-top: 0.7rem;
      }
    }
  }
}

@media screen and(max-width:767px) {
  .web {
    display: none !important;
  }

  .swiper {
    .swiper-slide {
      .article {
        &:hover {
          margin: 0;
          color: #fff;
          transition: none;
        }
      }
    }
  }
}

@media screen and(max-width:414px) {
  .web {
    display: none !important;
  }

  .swiper {
    display: flex;

    /deep/.swiper-pagination-bullet-active {
      background: #006737;
    }
    .swiper-slide {
      width: 310px !important;
      height: 330px !important;
      margin: 3rem 1.5rem 2.6rem 1.5rem;

      .article {
        display: flex;
        flex-direction: column;
        box-shadow: 3px 3px 10px rgb(148, 148, 148);
        text-align: center;

        &:hover {
          margin: 0;
          color: #fff;
          transition: none;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          margin-bottom: 1.2rem;

          &:hover {
            filter: brightness(80%);
            transition: 0.5s;
          }
        }

        span {
          margin: 1.562rem 0;

          font-size: 1rem;
        }

        p {
          font-size: 0.8rem;
          line-height: 1rem;
        }
      }
    }
  }
}
</style>
