import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Page>
      <Main id='home'>
        <HeroSection>
          <HeroText>
            <HeroTitle>Ronny Alvarado</HeroTitle>
            <HeroSubtitle>
              Staff Software Engineer at MANTL, an Alkami Technology solution
              team.
            </HeroSubtitle>
            <HeroTagline>
              Building reliable, user-focused products and leading teams to ship
              high-impact software.
            </HeroTagline>
          </HeroText>
          <Headshot
            src='/ronny_alvarado_profile_pic.jpg'
            alt='Ronny Alvarado'
          />
        </HeroSection>

        <Section id='about'>
          <SectionTitle>About</SectionTitle>
          <SectionBody>
            <p>
              I&apos;m a staff-level software engineer based in the Houston, TX
              area. At MANTL, I focus on building and scaling modern web
              applications that help financial institutions deliver better
              digital experiences for their customers.
            </p>
            <p>
              Before software, I spent several years as an Environmental
              Geologist and Field Scientist, working with soil and groundwater
              data to help restore contaminated environments. I later attended
              Lambda School, where I deepened my experience with full stack
              development and led teams as a Team/Section Lead.
            </p>
            <p>
              These days, I enjoy mentoring engineers, improving architecture
              and developer experience, and collaborating closely with product
              and design to ship thoughtful, resilient systems.
            </p>
          </SectionBody>
        </Section>

        <Section id='experience'>
          <SectionTitle>Experience</SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelineHeader>
                <Role>MANTL, an Alkami Technology solution team</Role>
                <Meta>Staff Software Engineer · ~5 years</Meta>
              </TimelineHeader>
              <TimelineBody>
                <ul>
                  <li>
                    Lead and contribute to complex features across a modern
                    JavaScript/TypeScript stack, with a focus on reliability,
                    performance, and maintainability.
                  </li>
                  <li>
                    Partner with product, design, and stakeholders to scope and
                    deliver projects that provide clear business and customer
                    value.
                  </li>
                  <li>
                    Mentor engineers, shape best practices, and help guide
                    technical direction as the product and team scale.
                  </li>
                </ul>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineHeader>
                <Role>Lambda School</Role>
                <Meta>Full Stack Student · Team / Section Lead</Meta>
              </TimelineHeader>
              <TimelineBody>
                <ul>
                  <li>
                    Completed an intensive full stack curriculum focused on
                    JavaScript, React, Node, and relational databases.
                  </li>
                  <li>
                    Led student teams, facilitated standups, and supported peers
                    through code reviews and debugging sessions.
                  </li>
                </ul>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineHeader>
                <Role>Environmental Geologist / Field Scientist</Role>
                <Meta>Various Environmental Consulting Firms</Meta>
              </TimelineHeader>
              <TimelineBody>
                <ul>
                  <li>
                    Collected and analyzed soil and water data to support
                    long-term remediation plans for contaminated environments.
                  </li>
                  <li>
                    Collaborated with multidisciplinary teams, giving me a
                    strong foundation in data-driven decision making and clear
                    communication.
                  </li>
                </ul>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </Section>

        <Section id='contact'>
          <SectionTitle>Contact</SectionTitle>
          <SectionBody>
            <p>
              The best way to reach me is by email or on LinkedIn. I&apos;m
              always happy to chat about engineering leadership, web
              architecture, and interesting product problems.
            </p>
            <ContactActions>
              <a href='mailto:rsalvarado777@gmail.com'>Email me</a>
              <a
                href='https://www.linkedin.com/in/ronnysalvarado/'
                target='_blank'
                rel='noopener noreferrer'
              >
                View LinkedIn
              </a>
            </ContactActions>
          </SectionBody>
        </Section>
      </Main>
      <Footer />
    </Page>
  );
};

export default App;

const projects = [
  {
    name: "GigaPets",
    githubUrl: "https://github.com/gigapets-pt-bw",
    deployedUrl: "https://gigapet-bw.netlify.com/",
    description: "A web app that allows users to create and feed virtual pets.",
    stack:
      "React · React Router · Redux · Styled Components · Charts.js · Express · SQLite · PostgreSQL · Jest · Supertest",
  },
  {
    name: "HiveStack",
    githubUrl: "https://github.com/wheretocode/WhereToCode",
    deployedUrl: "https://thehivestack.netlify.app/",
    description:
      "A community-driven web app that helps people find work and study locations with reliable internet.",
    stack:
      "React · React Router · Styled Components · Firebase · Google Maps API · Speedtest · Express · PostgreSQL",
  },
  {
    name: "Recharts + WebSocket Project",
    githubUrl: "https://github.com/RonnySAlvarado/Socketio-project",
    deployedUrl: "https://websocket-data-charts-renderer.netlify.com/",
    description:
      "A real-time dashboard that simulates incoming data over WebSockets and renders it using a charting library.",
    stack: "React · React Router · Recharts · Styled Components · Socket.io",
  },
  {
    name: "WeddingPlanner",
    githubUrl: "https://github.com/wedding-planner-portfolio",
    deployedUrl: "https://lambda-buildweek-wedding-planner.netlify.com/",
    description:
      "A web app that helps couples plan weddings and manage key event details in one place.",
    stack:
      "React · React Router · Redux · Styled Components · Reactstrap · Express · PostgreSQL",
  },
];

const Page = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top left, #1f2933, #020617 55%);
  color: #f9fafb;
  font-size: 1.6rem;
`;

const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4.8rem 2.4rem 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 3.2rem;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const HeroTitle = styled.h1`
  font-size: 4.4rem;
  margin: 0;
`;

const HeroSubtitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  color: #d1d5db;
  margin: 0;
`;

const HeroTagline = styled.p`
  margin: 0;
  color: #e5e7eb;
`;

const Headshot = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 999px;
  object-fit: cover;
  object-position: center 22%;
  border: 3px solid #facc15;
  justify-self: center;
`;

const Section = styled.section`
  scroll-margin-top: 80px;
`;

const SectionTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1.6rem;
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  p {
    margin: 0;
    color: #e5e7eb;
    line-height: 1.6;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const TimelineItem = styled.article`
  padding-left: 1.6rem;
  border-left: 2px solid #4b5563;
`;

const TimelineHeader = styled.header`
  margin-bottom: 0.8rem;
`;

const Role = styled.h4`
  margin: 0;
  font-size: 1.8rem;
`;

const Meta = styled.p`
  margin: 0.2rem 0 0;
  color: #9ca3af;
`;

const TimelineBody = styled.div`
  ul {
    margin: 0;
    padding-left: 1.6rem;
    color: #e5e7eb;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.4rem;
`;

const ProjectCard = styled.article`
  background: rgba(15, 23, 42, 0.8);
  border-radius: 1.2rem;
  padding: 2rem;
  border: 1px solid rgba(148, 163, 184, 0.4);
`;

const ProjectName = styled.h4`
  margin: 0 0 0.8rem;
  font-size: 1.8rem;
`;

const ProjectDescription = styled.p`
  margin: 0 0 0.8rem;
  color: #e5e7eb;
`;

const ProjectStack = styled.p`
  margin: 0 0 1.6rem;
  color: #9ca3af;
  font-size: 1.4rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  a {
    font-size: 1.4rem;
    color: #facc15;
    text-decoration: none;
  }
`;

const ContactActions = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  a {
    padding: 0.8rem 1.6rem;
    border-radius: 999px;
    border: 1px solid #facc15;
    color: #facc15;
    text-decoration: none;
    font-size: 1.4rem;
  }
`;
