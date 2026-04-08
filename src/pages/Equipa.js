import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import CertificateModal from '../components/CertificateModal';
import './Equipa.css';

const TeamMemberCard = ({ member, onCertificateClick }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovering) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setMousePos({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos({ rotateX: 0, rotateY: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const cardStyle = isHovering ? {
    transform: `perspective(1000px) rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg)`,
  } : {};

  return (
    <motion.div
      ref={cardRef}
      className="team-member-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={cardStyle}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -20 }}
    >
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
              src="/__images/python.webp" 
              alt="Python" 
              className="python-icon"
            />
            <span className="education-course">{member.education.course}</span>
            {member.education.certificateUrl && (
              <button
                className="certificate-icon-btn"
                onClick={() => onCertificateClick(member.education.certificateUrl, member.name)}
                title="Ver certificado"
              >
                <FontAwesomeIcon icon={faCertificate} />
              </button>
            )}
          </div>
          <p className="education-details">
            {member.education.institution} ��� {member.education.duration}
          </p>
        </div>
      )}
    </motion.div>
  );
};

const Equipa = () => {
  const [certificateModal, setCertificateModal] = useState({
    isOpen: false,
    certificateUrl: '',
    memberName: ''
  });

  const leadership = [
    {
      name: "Gabriel V",
      role: "Fundador e Programador Full Stack",
      image: "/__images/equipa/gabrielv.webp",
      education: {
        course: "Curso Python Initiation",
        institution: "Sharkcoders",
        duration: "15h",
        certificateUrl: "https://kikalabs-server.nexuspt.eu/images/site-nxweb/cert/gabrielvcertsharkcoders.jpeg"
      }
    },
    {
      name: "gambriel182",
      role: "Co-Fundador e Programador Full Stack",
      image: "/__images/equipa/gabrielc.webp"
    }
  ];

  const collaborators = [
    {
      name: "Danilo_goFail",
      role: "Produtor de áudio",
      image: "https://drippi.nexuspt.eu/static/uploads/51940dafaa844974bbc7918ec622f738.png"
    },
    {
      name: "Lazure",
      role: "Supervisor",
      image: "https://res.cloudinary.com/dczslxnsu/image/upload/v1745390608/hrjdrqu1v0eutx8qpzju.png"
    },
    {
      name: "Gonçalo",
      role: "Testador de Produtos",
      image: "/__images/equipa/goncaloc.webp"
    },
    {
      name: "BielGamerYT",
      role: "Influencer",
      image: "https://res.cloudinary.com/dczslxnsu/image/upload/v1745424846/lfof2eyopicoz6p0dm4q.jpg",
      education: {
        course: "CursoPython Initiation",
        institution: "Sharkcoders",
        duration: "15h"
      }
    },
    {
      name: "Noah",
      role: "Designer",
      image: "https://tribe-s3-production.imgix.net/WnTZCpUa3oCFMnMdLXfiX?fit=max&w=200&auto=compress,format"
    },
    {
      name: "vxnisshhh",
      role: "Staff Geral",
      image: "/__images/equipa/vanish.png"
    }
  ];

  const openCertificateModal = (certificateUrl, memberName) => {
    setCertificateModal({
      isOpen: true,
      certificateUrl,
      memberName
    });
  };

  const closeCertificateModal = () => {
    setCertificateModal({
      isOpen: false,
      certificateUrl: '',
      memberName: ''
    });
  };

  return (
    <main className="team-main">
      <motion.div
        className="glow-bg"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <section className="team-section">
        <motion.h1 
          className="section-title"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >A Nossa Equipa</motion.h1>

        <motion.article 
          className="team-category" 
          aria-label="Liderança"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >Liderança</motion.h2>
          <div className="team-grid">
            {leadership.map((member, index) => (
              <TeamMemberCard
                key={index}
                member={member}
                onCertificateClick={openCertificateModal}
              />
            ))}
            {/* Espaços vazios para manter o grid */}
            <div className="team-member-card" style={{visibility: 'hidden', pointerEvents: 'none'}}></div>
            <div className="team-member-card" style={{visibility: 'hidden', pointerEvents: 'none'}}></div>
          </div>
        </motion.article>

        <motion.article 
          className="team-category" 
          aria-label="Colaboradores"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >Colaboradores</motion.h2>
          <div className="team-grid">
            {collaborators.map((member, index) => (
              <TeamMemberCard
                key={index}
                member={member}
                onCertificateClick={openCertificateModal}
              />
            ))}
          </div>
        </motion.article>
      </section>

      <CertificateModal
        isOpen={certificateModal.isOpen}
        onClose={closeCertificateModal}
        certificateUrl={certificateModal.certificateUrl}
        memberName={certificateModal.memberName}
      />
    </main>
  );
};

export default Equipa;
