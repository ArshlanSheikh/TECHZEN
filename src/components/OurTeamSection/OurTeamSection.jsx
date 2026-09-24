import styles from "./OurTeamSection.module.css";

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    designation: "CEO",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtwvUeSBPAOpauve8z1BNVQ89EHMDeCJtPj496TAQiA&s=10",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    designation: "CTO",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Q_5YkDcApf9OOpXMLAl3fcAwtXWXiwBN2UVyF5tHdw&s=10",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "UI/UX Designer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1q-YNeqs4nsfuWLsmRq3A2IEHxxXKLzqIX54YL6siyw&s=10",
  },
  {
    id: 4,
    name: "Emma Wilson",
    designation: "Frontend Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrI88lCYsaapki063rxjpv1t1kvLU0gm6UKLxjFIUIQ&s=10",
  },
  {
    id: 5,
    name: "David Miller",
    designation: "Backend Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjezvWRoXwB_9W7DyyYe3bpjng77WQR7SnHxCXRKUsy285QUEz_7MbsSJd&s=10",
  },
  {
    id: 6,
    name: "James Lee",
    designation: "AI Engineer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gCokRkviK4MgBZJo-27JVzmtj4LgsrFw9Eth-ceZEDsEpbN8EZ2srIM&s=10",
  },
  {
    id: 7,
    name: "Olivia White",
    designation: "Project Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpPlg07uHeDtUcKCZrxexmtF5OMaYWZFvqyZXdKK9aw&s=10",
  },
];

// Duplicate for seamless infinite scroll
const sliderData = [...teamMembers, ...teamMembers];

const OurTeam = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Meet Our Team</h2>

        <div className={styles.slider}>
          <div className={styles.track}>
            {sliderData.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className={styles.card}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                />

                <h3>{member.name}</h3>

                <p>{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;