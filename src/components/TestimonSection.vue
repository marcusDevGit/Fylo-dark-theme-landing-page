<template>
    <section class="testimon">
      <div class="hold">
        <article class="testimon_card">
          <p class="testimon_msg">
            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div class="testimon_user">
            <img class="testimon_img" src="@/assets/profile-1.jpg" alt="" />
            <div class="testimon_info">
              <h3 class="testimon_name">Satish Patel</h3>
              <p class="testimon_description">Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>
  
        <article class="testimon_card">
          <p class="testimon_msg">
            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div class="testimon_user">
            <img class="testimon_img" src="@/assets/profile-2.jpg" alt="" />
            <div class="testimon_info">
              <h3 class="testimon_name">Bruce McKenzle</h3>
              <p class="testimon_description">Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>
  
        <article class="testimon_card">
          <p class="testimon_msg">
            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div class="testimon_user">
            <img class="testimon_img" src="@/assets/profile-3.jpg" alt="" />
            <div class="testimon_info">
              <h3 class="testimon_name">Iva Boyd</h3>
              <p class="testimon_description">Founder & CEO, Huddle</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TestimonialSection'
  }
  </script>
  
  <style scoped>

  .testimon {
    background-image: url(@/assets/bg-quotes.png);
    background-repeat: no-repeat;
    background-position-x: 3.7rem;
    background-position-y: 1rem;
  }
  .testimon .hold {
  padding: 4rem;
  display: -ms-grid;
  display: grid;
  grid-gap: 3rem;
  -ms-grid-rows: 1fr;
  -ms-grid-columns: (1fr)3;
      grid-template: 1fr/repeat(3, 1fr);
}

.testimon_card {
  padding: 2rem;
  background-color: #202a3c;
  border-radius: 4px;
  -webkit-box-shadow: 7.5px 7.5px 7.5px rgba(104, 104, 104, 0.05);
          box-shadow: 7.5px 7.5px 7.5px rgba(104, 104, 104, 0.05);
}

.testimon_msg {
  max-width: 42ch;
  margin-top: 1rem;
  opacity: 0.75;
}

.testimon_user {
  margin-top: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.testimon_img {
  width: 2rem;
  height: 2rem;
  -o-object-fit: contain;
     object-fit: contain;
  border-radius: 2rem;
}

.testimon_info {
  margin-left: 0.75rem;
}

.testimon_name {
  font-size: 0.8rem;
}

.testimon_description {
  font-size: 0.7rem;
  opacity: 0.5;
}

@media (max-width: 910px) {
  .testimon .hold {
    -ms-grid-rows: (1fr)3;
    -ms-grid-columns: 1fr;
        grid-template: repeat(3, 1fr)/1fr;
    place-items: center;
  }
}

  </style>
  