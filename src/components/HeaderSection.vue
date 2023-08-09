<template>
  <header>
    <div class="hold">
      <a class="head_logo" href="/"><img src="@/assets/logo.svg" alt="" /></a>
      <ul class="head_nav">
        <li class="head_item"><a class="head_link" href="/">Features</a></li>
        <li class="head_item"><a class="head_link" href="/">Team</a></li>
        <li class="head_item"><a class="head_link" href="/">Sign In</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>

<style scoped>
.hold {
  width: 90%;
  margin: 0 auto;
}

header {
  background-color: #1c2431;
}

header .hold {
  padding: 4rem 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.head_logo > img {
  height: 3.25rem;
  -o-object-fit: contain;
     object-fit: contain;
}

.head_nav {
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.head_link {
  margin-left: 3rem;
  text-decoration: none;
  font-size: 1.1rem;
  opacity: 0.5;
  border: 1px solid transparent;
}

.head_link:hover {
  opacity: 1;
  border-bottom-color: white;
}

@media (max-width: 700px) {
  .head .hold {
    padding: 2rem 0;
  }
  .head_logo > img {
    height: 2rem;
  }
  .head_link {
    margin-left: 1rem;
    font-size: 0.9rem;
  }
}
</style>
