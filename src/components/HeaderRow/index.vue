<template>
  <div class="header">
    <div class="header-box web">
      <div class="header-content">
        <div class="header-logo">
          <router-link to="/">
            <img :src="require('@/assets/img/header/logo-white.png')" />
          </router-link>
        </div>
        <div class="header-link">
          <router-link to="/product"><div class="pages">PRODUCT</div></router-link>
          <router-link to="/workshop"><div class="pages">WORKSHOP</div></router-link>
          <router-link to="/about"><div class="pages">ABOUT</div></router-link>
        </div>
      </div>
    </div>

    <!-- phone -->

    <div class="phone-header phone">
      <div class="logo">
        <router-link to="/">
          <img :src="require('@/assets/img/header/logo-white.png')" />
        </router-link>
      </div>
      <input type="checkbox" id="menu-control" />

      <div class="hamburger"><div></div></div>
      <div class="menu">
        <div class="box-1">
          <div>
            <ul>
              <li>
                <router-link to="/product">
                  <div class="pages">
                    PRODUCT
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/workshop">
                  <div class="pages">
                    WORKSHOP
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <div class="pages">
                    ABOUT
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  // nav-bar
  .header-box {
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 30;
    background: #006737;

    .header-content {
      height: 100%;
      margin: 0 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      // logo
      .header-logo {
        margin-left: 1rem;
        img {
          height: 3.5rem;
          width: 3.5rem;
        }
      }

      // nav-link
      .header-link {
        display: flex;

        .pages {
          margin: 1.25rem;
          color: #fff;
          font-weight: 600;
          border-bottom: 2px solid transparent;
          &:hover {
            border-bottom: 2px solid #b0d8bf;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .phone {
    display: none;
  }
}

@media screen and(max-width:767px) {
  .web {
    display: none;
  }

  .phone-header {
    height: 3.3rem;
    width: 100%;
    background: #006737;
    position: relative;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    .logo {
      margin: 6px;

      img {
        vertical-align: middle;
        width: 2.6rem;
        height: 2.6rem;
      }
    }

    #menu-control {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 52;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      opacity: 0;
    }

    /* Toggler Animation */
    #menu-control:checked + .hamburger > div {
      transform: rotate(135deg);
    }

    /* Turns Lines Into X */
    #menu-control:checked + .hamburger > div:before,
    #menu-control:checked + .hamburger > div:after {
      top: 0;
      transform: rotate(90deg);
    }

    /* Rotate On Hover When Checked */
    #menu-control:checked:hover + .hamburger > div {
      transform: rotate(225deg);
    }

    /* Show Menu */
    #menu-control:checked ~ .menu {
      visibility: visible;
    }

    #menu-control:checked ~ .menu > div {
      transform: scale(1);
      transition-duration: 0.8s;
    }

    #menu-control:checked ~ .menu > div > div {
      opacity: 1;
      transition: opacity 0.4s ease 0.4s;
    }

    .hamburger {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 50;
      width: 2rem;
      height: 2rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        position: relative;
        flex: none;
        width: 32px;
        height: 2px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;

        &::after,
        &::before {
          content: '';
          position: absolute;
          z-index: 1;
          top: -10px;
          width: 100%;
          height: 2px;
          background: inherit;
        }

        &::after {
          top: 10px;
        }
      }
    }

    .menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      .box-1 {
        background: rgba(255, 239, 148, 0.9);
        border-radius: 50%;
        width: 380vw;
        height: 380vw;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;

        div {
          text-align: center;
          max-width: 90vw;
          max-height: 100vh;
          opacity: 1;
          transition: opacity 0.4s ease;

          ul {
            li {
              list-style: none;
              padding: 1rem;
              vertical-align: middle;

              .pages {
                color: #006737;
                font-size: 1.5rem;
                text-decoration: none;
                transition: color 0.4s ease;
                margin: 1.5rem 0;
                border-bottom: 2px solid #006737;
              }
            }
          }
        }
      }
    }
  }
}
</style>
