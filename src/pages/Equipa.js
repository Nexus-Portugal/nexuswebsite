import React from 'react';
import './Equipa.css';

const Equipa = () => {
  const leadership = [
    {
      name: "Gabriel V",
      role: "Fundador e Programador Full Stack",
      image: "https://drippi.nexuspt.eu/static/uploads/3334978e08c749ff8071e30371fd8ebd.png",
      education: {
        course: "Curso Python Initiation",
        institution: "Sharkcoders",
        duration: "15h"
      }
    },
    {
      name: "Gabriel C.",
      role: "Co-Fundador e Programador Full Stack",
      image: "https://res.cloudinary.com/dczslxnsu/image/upload/v1745388923/fs65f6o1rfij2ve9gg77.png"
    }
  ];

  const collaborators = [
    {
      name: "Darkieshere",
      role: "Gestor de Projetos",
      image: "https://res.cloudinary.com/dczslxnsu/image/upload/v1745355333/xosizhckehc6eexmcthd.jpg"
    },
    {
      name: "Lazure",
      role: "Testador de produtos",
      image: "https://res.cloudinary.com/dczslxnsu/image/upload/v1745390608/hrjdrqu1v0eutx8qpzju.png"
    },
    {
      name: "Gonçalo",
      role: "Gestor da Comunidade",
      image: "https://res.cloudinary.com/dczslxnsu/image/upload/v1746023247/skcit31c3gyulvsprhvv.webp"
    },
    {
      name: "BielGamerYT",
      role: "Influencer",
      image: "https://res.cloudinary.com/dczslxnsu/image/upload/v1745424846/lfof2eyopicoz6p0dm4q.jpg",
      education: {
        course: "Curso Python Initiation",
        institution: "Sharkcoders",
        duration: "15h"
      }
    },
    {
      name: "Noah",
      role: "Designer",
      image: "https://tribe-s3-production.imgix.net/WnTZCpUa3oCFMnMdLXfiX?fit=max&w=200&auto=compress,format"
    }
  ];

  return (
    <main className="team-main">
      <section className="team-section">
        <h1 className="section-title">A Nossa Equipa</h1>

        <article className="team-category" aria-label="Liderança">
          <h2>Liderança</h2>
          <div className="team-grid">
            {leadership.map((member, index) => (
              <div key={index} className="team-member-card">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                {member.education && (
                  <div className="member-education">
                    <div className="education-info">
                      <img 
                        src="https://cdn.creazilla.com/icons/3254252/python-icon-sm.png" 
                        alt="Python" 
                        className="python-icon"
                      />
                      <span className="education-course">{member.education.course}</span>
                    </div>
                    <p className="education-details">
                      {member.education.institution} • {member.education.duration}
                    </p>
                  </div>
                )}
              </div>
            ))}
            {/* Espaços vazios para manter o grid */}
            <div className="team-member-card" style={{visibility: 'hidden', pointerEvents: 'none'}}></div>
            <div className="team-member-card" style={{visibility: 'hidden', pointerEvents: 'none'}}></div>
          </div>
        </article>

        <article className="team-category" aria-label="Colaboradores">
          <h2>Colaboradores</h2>
          <div className="team-grid">
            {collaborators.map((member, index) => (
              <div key={index} className="team-member-card">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                {member.education && (
                  <div className="member-education">
                    <div className="education-info">
                      <img 
                        src="https://cdn.creazilla.com/icons/3254252/python-icon-sm.png" 
                        alt="Python" 
                        className="python-icon"
                      />
                      <span className="education-course">{member.education.course}</span>
                    </div>
                    <p className="education-details">
                      {member.education.institution} • {member.education.duration}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Equipa; 
