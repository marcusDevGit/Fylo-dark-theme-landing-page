<template>
  <section class="intro">
    <div class="hold">
      <img class="intro_img" src="@/assets/illustration-intro.png" alt="" />

      <div class="intro_txt">
        <h1 class="intro_title">All your files in one secure location, accessible anywhere.</h1>
        <p class="intro_description">
          Fylo stores all your most important files in one secure location. Access them wherever you need, share and
          collaborate with friends, family, and co-workers.
        </p>
        <button class="intro_btn">Get Started</button>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: 'IntroSection'
}
</script>
  
<style scoped>
.intro {
  background-color: #1c2431;
  background-image: url("@/assets/bg-curvy-desktop.svg");
  background-repeat: no-repeat;
  background-position: bottom center;
}

.intro .hold {
  padding: 4rem 0 4rem 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.intro_img {
  width: 100%;
  max-width: 900px;
}

.intro_txt {
  margin: 2rem 0;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.intro_title {
  max-width: 30ch;
  font-size: 2.5rem;
  font-weight: 600;
}

.intro_discribtion {
  margin-top: 2em;
  max-width: 52.5ch;
  font-size: 1.15rem;
  opacity: 0.75;
}

.intro_btn {
  margin-top: 2em;
  padding: 1rem 6rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #339ecc;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
}

.intro_btn:hover {
  background-color: #65e2d9;
}

@media (max-width: 910px) {
  .intro_img {
    max-width: 600px;
  }
}

@media (max-width: 700px) {
  .intro_txt {
    margin: 2rem 0;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .intro_title {
    font-size: 1.8rem;
  }

  .intro_discribtion {
    font-size: 1rem;
  }

  .intro_btn {
    font-size: 1rem;
  }
}
</style>
  