import { competenceGroups } from '../../data/competences';
import CompetenceCard from './CompetenceCard';

const Competences = () => {
  return (
    <section id="competences">
      <div className="container">
        <h2 className="competences_head">COMPÉTENCES TECHNIQUES</h2>

        {competenceGroups.map((group) => (
          <div className="competence-group" key={group.title}>
            <h3 className="competence-group-title">{group.title}</h3>
            <div className="competences-container">
              {group.items.map((comp) => (
                <CompetenceCard key={comp.id} name={comp.name} img={comp.img} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competences;
