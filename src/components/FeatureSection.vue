<template>
    <section class="feature">
      <div class="hold">
        <article class="feature_card">
          <img class="feature_img" src="@/assets/icon-access-anywhere.svg" alt="" />
          <h2 class="feature_title">Access your files, anywhere</h2>
          <p class="feature_tescription">
            The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
          </p>
        </article>
  
        <article class="feature_card">
          <img class="feature_img" src="@/assets/icon-security.svg" alt="" />
          <h2 class="feature_title">Security you can trust</h2>
          <p class="feature_description">
            2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
          </p>
        </article>
  
        <article class="feature_card">
          <img class="feature_img" src="@/assets/icon-collaboration.svg" alt="" />
          <h2 class="feature_title">Real-time collaboration</h2>
          <p class="feature_description">
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
        </article>
  
        <article class="featureCard">
          <img class="feature_img" src="@/assets/icon-any-file.svg" alt="" />
          <h2 class="feature_title">Store any type of file</h2>
          <p class="feature_description">
            Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
          </p>
        </article>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FeatureSection'
  }
  </script>
  
  <style scoped>
  .feature {
  width: 90%;
  margin: 0 auto;
}

.feature .hold {
  padding: 4rem 0;
  text-align: center;
  display: -ms-grid;
  display: grid;
  grid-gap: 5rem;
  -ms-grid-rows: (1fr) 2;
  -ms-grid-columns: (1fr) 2;
  grid-template-rows: repeat(2, 1fr); /* Correção aqui */
  grid-template-columns: repeat(2, 1fr); /* Correção aqui */
}


.feature_card {
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

.feature_title {
  margin-top: 1em;
  font-size: 1.25rem;
  font-weight: 600;
}

.feature_description {
  max-width: 42ch;
  margin-top: 0.5em;
  opacity: 0.75;
}

@media (max-width: 910px) {
  .feature .hold {
    -ms-grid-rows: (1fr) 4;
    -ms-grid-columns: 1fr;
        grid-template: repeat(4, 1fr)/1fr;
  }
}
  </style>
  