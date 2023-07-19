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
          <p>&nbsp;&nbsp;Graphiste décorateur et opérateur PAO, DAO et numérique depuis plus de 25 ans, je maitrise toutes les facettes de ce métier de la conception jusqu'à la pose. Je souhaite ajouter une corde à mon arc pour mon future professionnel. Afin de pouvoir proposer à mes clients un service complet et pouvoir les accompagnés de A à Z. Car la partie web était la seul chose qui me fessait défaut. J'ai donc suivi avec succès une formation de neuf mois chez OpenClassrooms, au cours de laquelle j'ai acquis des compétences solides en HTML, CSS, JavaScript, React, ainsi que d'autres compétences telles que le greenCode, le SEO et les méthodes Agile.<br /><br />&nbsp;&nbsp;Je suis à la recherche d'une entreprise accueillante pour effectuer une alternance, afin de mettre en pratique mes connaissances et d'acquérir une expérience concrète auprès d'experts du domaine. Pour me perfectionné et acquérir de l'expérience pour développeur une carrière freelance, Ou intégrer l'équipe à plein temps si des affinités ce crées dans les 2 sens. Passionné, déterminé et avide de défis, je suis convaincu que ma transition réussie et mon expérience feront de moi un atout précieux pour toute équipe de développement. Je suis impatient de contribuer à des projets innovants et de continuer à grandir en tant que professionnel.
</p>
          <br />
          <button className='btn_download ' onClick={handleDownload}><p>Télécharger mon CV :<FaRegFilePdf className='pdf'/></p> </button>
        </aside>
    </section>
    </>
);
};
export default About;