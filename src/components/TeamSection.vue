<template>
    <section class="team">
      <div class="hold">
        <img class="team_img" src="@/assets/illustration-stay-productive.png" alt="" />
  
        <div class="team_txt">
          <h1 class="team_title">Stay productive, wherever you are</h1>
          <p class="team_description">
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
          </p>
          <p class="team_description">
            Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.
          </p>
          <a class="team_btn" href="/">See how Fylo works <img src="@/assets/icon-arrow.svg" alt="" /></a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TeamSection'
  }
  </script>
  
  <style scoped>
  .team .hold {
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

.team_img {
  width: 50%;
}

.team_txt {
  width: 45%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.team_title {
  margin-top: 1em;
  max-width: 20ch;
  font-size: 2.5rem;
  font-weight: 600;
}

.team_description {
  max-width: 57ch;
  margin-top: 1em;
  opacity: 0.75;
}

.team_btn {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin-top: 1em;
  text-decoration: none;
  padding: 0.3em 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #339ecc;
  border-bottom: 1px solid #339ecc;
  -webkit-transition: color 0.2s ease, border-bottom-color 0.2s ease;
  transition: color 0.2s ease, border-bottom-color 0.2s ease;
}

.team_btn img {
  margin-left: 0.4em;
}

.team_btn:hover {
  color: white;
  border-bottom-color: white;
}

@media (max-width: 910px) {
  .team .hold {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .team_img {
    width: 100%;
    max-width: 600px;
  }
  .team_txt {
    width: 85%;
  }
}

@media (max-width: 700px) {
  .team_title {
    max-width: -webkit-fit-content;
    max-width: -moz-fit-content;
    max-width: fit-content;
    font-size: 1.5rem;
  }
}
  </style>
  