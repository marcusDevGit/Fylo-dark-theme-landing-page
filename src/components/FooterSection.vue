<template>
  <footer>
    <div class="hold">
      <div class="foot_top">
        <a class="footer_logo" href="/"><img class="footer_icon" src="@/assets/logo.svg" alt="" /></a>
      </div>

      <div class="footer_btn">
        <div class="footer_location">
          <img class="footer_icon" src="@/assets/icon-location.svg" alt="" />
          <p class="footer_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod temport inciddunt ut labore et dolore
            magna alique
          </p>
        </div>

        <div class="footer_contact">
          <div class="footer_contactItem">
            <img class="footer_icon" src="@/assets/icon-phone.svg" alt="" />
            <p class="footer_description">+1-543-124-4567</p>
          </div>
          <div class="footer_contactItem">
            <img class="footer_icon" src="@/assets/icon-email.svg" alt="" />
            <p class="footer_description">example@fylo.com</p>
          </div>
        </div>

        <div class="footer_links">
          <a class="footer_link" href="/">About Us</a>
          <a class="footer_link" href="/">Jobs</a>
          <a class="footer_link" href="/">Press</a>
          <a class="footer_link" href="/">Blog</a>
        </div>

        <div class="footer_links">
          <a class="footer_link" href="/">Contact Us</a>
          <a class="footer_link" href="#team">Terms</a>
          <a class="footer_link" href="/">Privacy</a>
        </div>

        <div class="footer_medias">
          <a href=""><ion-icon class="footer_icon " name="logo-facebook"></ion-icon></a>
          <a href=""><ion-icon class="footer_icon " name="logo-instagram"></ion-icon></a>
          <a href=""><ion-icon class="footer_icon " name="logo-twitter"></ion-icon></a>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: 'FooterSection',
}

</script>
  
<style scoped>
footer {
  padding-top: 8rem;
  font-size: 0.9rem;
  background-color: #0b1523;
  text-align: left;
}

footer .hold {
  padding: 4rem;
  padding-left: 3rem;
}

.footer_logo > img {
  height: 2rem;
  -o-object-fit: contain;
  object-fit: contain;
}

.footer_btn {
  margin-top: 3rem;
  display: -ms-grid;
  display: grid;
  grid-gap: 4rem;
  -ms-grid-rows: 1fr;
  -ms-grid-columns: 4fr 2.5fr (1fr) 2 1fr;
  grid-template: 1fr/4fr 2.5fr repeat(2, 1fr) 1fr;
}

.footer_location {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.footer_contactItem {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.footer_contactItem:first-child {
  margin-bottom: 1.25rem;
}
.footer_link {
  margin-bottom: 1.5rem;
  text-decoration: none;
}
.footer_links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.footer_link:last-child {
  margin-bottom: 0;
}
.footer_link:hover {
  opacity: 1;
  border-bottom-color: white;
}

.footer_medias {
  width: 2.5rem;
  height: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-pack: end;
  flex-direction: row;
}

.footer_medias:last-child {
  margin-right: 0;
}

.footer_medias > a > ion-icon {
  width: 3rem;
  height: 2rem;
  margin: 0;
  -webkit-filter: brightness(10);
  filter: brightness(10);
}

@media (max-width: 1024px) {
  .footer_btn {
    -ms-grid-rows: (auto) 3;
    -ms-grid-columns: (1fr) 2;
    grid-template: repeat(3, auto)/repeat(2, 1fr);
  }
  .footer_medias {
    grid-column: span 2;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: auto;
  }
}

@media (max-width: 910px) {
  .footer_medias {
    grid-column: span 2;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: auto;
  }
}

@media (max-width: 700px) {

  .footer_btn {
    -ms-grid-rows: (auto) 5;
    -ms-grid-columns: 1fr;
    grid-template: repeat(5, auto)/1fr;
  }

  .footer_medias {
    grid-column: span 1;
  }
}
</style>
  