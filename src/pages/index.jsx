import About from 'src/components/About';
import Education from 'src/components/Education';
import Header from 'src/components/Header';
import Layout from 'src/components/Layout';
import Publications from 'src/components/Publications';
import Skills from 'src/components/Skills';

export default function Home() {
  return (
    <Layout>
      <Header />
      <section id='about-container'>
        <About />
      </section>
      <section id='skills-container'>
        <Skills />
      </section>
      <section id='publications-container'>
        <Publications />
      </section>
      <section id='education-container'>
        <Education />
      </section>
    </Layout>
  );
}
