import projects from './../Images/projects-img.png'
import blog from './../Images/blog-img.png'
import contact from './../Images/contact-img.png'

export function HomePage() {
  return (
    <div className="container my-4 px-4" id="introduction">
      <section className="container pb-5">
          <h5 className="py-2">Hi, I'm Karla</h5>
          <h1 className="py-2">Web Developer and Marketer</h1>
          <h3 className="pt-2 pb-3">I specialise in bringing digital projects to life and crafting exceptional user experiences.</h3>
          <a href="/about" id="link">Read more about me<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="currentColor"/></svg></a>
      </section>
      <section className="container pb-4">
        <section className="row">
        <section className="col">
          <article class="card text-center" id="cardHome">
            <img className="img-pages mx-auto d-block" id="projects-img" src={projects} alt="Projects"/>
              <section class="card-body">
                <header>
                  <h5 class="card-title">Projects</h5>
                </header>
                <a href="/projects" className="card-link">View work
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="currentColor"/></svg></a>
              </section>
          </article>
        </section>
        <section className="col">
          <article class="card text-center" id="cardHome">
            <img className="img-pages mx-auto d-block" id="blog-img" src={blog} alt="Blog"/>
              <section class="card-body">
                <header>
                  <h5 class="card-title">Blog</h5>
                </header>
                <a href="/blogs" className="card-link">Read journal
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="currentColor"/></svg></a>
              </section>
          </article>
        </section>
        <section className="col">
          <article class="card text-center" id="cardHome">
            <img className="img-pages mx-auto d-block" id="contact-img" src={contact} alt="Contact"/>
              <section class="card-body">
                <header>
                  <h5 class="card-title">Contact</h5>
                </header>
                <a href="/contact" className="card-link">Send message
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" fill="currentColor"/></svg></a>
              </section>
          </article>
        </section>
      </section>
    </section>
  </div>
  );
};

// Alternative home page layout with profile image
// export function HomePage() {
//   return (
//     <div className="container my-5 px-4" id="introduction">
//       <section className="container">
//         <header>
//           <h5 className="py-2">Hi, I'm Karla</h5>
//         </header>
//       <section className="row">
//         <header className="col-lg-9">
//           <h1 className="py-2">Web Developer and Marketer</h1>
//         <h3 className="py-2">I specialise in bringing digital projects to life and crafting exceptional user experiences.</h3>
//         </header>
//         <section className="col">
//             <img className="img-home " id="profile-home" src={profile} alt="Profile"/>
//         </section>
//       </section>
//     </section>
//       <AboutButton />
//     </div>
//   );
// };

