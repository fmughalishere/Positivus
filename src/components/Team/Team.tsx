import styles from "./Team.module.css";
import Img1 from "../../assets/team/t1.png";
import Img2 from "../../assets/team/t2.png";
import Img3 from "../../assets/team/t3.png";
import Img4 from "../../assets/team/t4.png";
import Img5 from "../../assets/team/t5.png";
import Img6 from "../../assets/team/t6.png";
import Icon from "../../assets/linkedin.png"
const teamMembers = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: Img1 ,
  },
  {
    name: "Jane Doe",
    title: "Director of Operations",
    experience:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: Img2 ,
  },
  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    experience:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: Img3 ,
  },
  {
    name: "Emily Johnson",
    title: "PPC Manager",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: Img4 ,
  },
  {
    name: "Brian Williams",
    title: "Social Media Specialist",
    experience:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: Img5 ,
  },
  {
    name: "Sarah Kim",
    title: "Content Creator",
    experience:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    image: Img6,
  },
];

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.header}>
        <span className={styles.label}>Team</span>
        <p>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
           <img
            src={member.image}
            alt={member.name}
            className={styles.teamImage}
             />
            <div className={styles.linkedinIconWrapper}>
           <img
           src={Icon}
           alt="LinkedIn"
           className={styles.linkedinIcon}
           />
          </div>
           </div>
            <div className={styles.textWrapper}>
            <h3>{member.name}</h3>
            <p className={styles.title}>{member.title}</p>
            </div>
            <hr />
            <p className={styles.experience}>{member.experience}</p>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.viewAllButton}>See all team</button>
      </div>
    </section>
  );
};


export default Team;
