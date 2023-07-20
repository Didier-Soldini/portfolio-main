import React from 'react';
import portrait from '../../assets/images/portrait.webp';
import SectionTitle from '../sectionTitle/SectionTitle';
import { FaRegFilePdf } from 'react-icons/fa';
import Header from '../Discribe/Discribe';
import pdf from '../../assets/images/CV-Didier-Soldini.pdf';


const About = () => {
  const handleDownload = () => {
    window.open(pdf, '_blank');
  };

  return (
    <>
    <SectionTitle id="about" />
    <section className="about-me" >
      <div className="about-me__container">
        <div className="about-me__content">
          <h1 className="about-me__title">Didier Soldini</h1>
          <h2 className="about-me__subtitle">Développeur Front-end</h2>
        </div>
        <div className="about-me__image">
            <img src={portrait} alt="portrait" title='Didier S.' />
        </div>
          <h2 className="about-me__discribe">
            <Header/>
        </h2>
      </div>
    
        <aside className="about-me__text">
          <p>&nbsp;&nbsp;Graphiste décorateur et opérateur PAO, DAO et numérique depuis plus de 25 ans, je maitrise toutes les facettes de ce métier de la conception jusqu'à la pose. Je voulais ajouter une corde à mon arc, pour mon avenir professionnel, afin de proposer à mes clients un service complet et ainsi, pouvoir les accompagner de A à Z. La partie web me faisait défaut j'ai donc suivi, avec succès, une formation de neuf mois chez OpenClassrooms. J'ai acquis, grâce à celle-ci, des compétences solides en HTML, CSS, JavaScript, React et d'autres telles que le greenCode, le SEO et les méthodes Agile.<br /><br />&nbsp;&nbsp;Je suis à la recherche d'une entreprise accueillante afin de mettre en pratique mes nouvelles connaissances tout en conservant mon métier et acquérir une expérience concrète auprès d'experts du domaine. Mon projet étant de développer une carrière freelance, ou pourquoi pas, intégrer l'équipe à plein temps! Passionné, déterminé et avide de défis, je suis convaincu que ma transition et mon expérience feront de moi un atout précieux pour toute équipe de développement. Je suis impatient de contribuer à vos projets innovants.
</p>
          <br />
          <button className='btn_download ' onClick={handleDownload}><p>Télécharger mon CV :<FaRegFilePdf className='pdf'/></p> </button>
        </aside>
    </section>
    </>
);
};
export default About;