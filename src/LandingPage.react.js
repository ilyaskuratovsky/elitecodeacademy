import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <header className="sticky-header">
        <div className="header-container">
          <div className="logo">Elite Code Academy - Greenwich</div>
          <button
            className="contact-button"
            onClick={() => alert("Contact us at info@elitecodeacademy.com")}
          >
            Contact
          </button>
        </div>
      </header>
      <section className="image-section">
        <img
          src="/students_coding1.jpg"
          //src="students_coding1.jpg"
          alt="Kids learning to code"
          className="hero-image"
        />
      </section>
      <main className="landing-page">
        <header className="main-header">
          <h1>Sparking a lifelong passion for software engineering</h1>
          <p>
            Hands-on, in-person learning that ignites curiosity and builds
            confidence. We know kids learn best by doing — that’s why our expert
            instructors guide students every step of the way, working together
            on real projects using the latest tools. This personal, interactive
            experience sparks a genuine passion for technology and prepares your
            child to thrive in a rapidly evolving digital world.
          </p>
          <button className="enroll-button">Enroll Now</button>
        </header>

        <section className="section">
          <h2>Real Programming From Day One</h2>
          <p>
            We teach real coding from the very start—even to elementary school
            students. We believe kids are more capable than traditional systems
            give them credit for, and that over-gamifying education (like
            relying on Scratch) can actually limit long-term growth. Our
            curriculum is both challenging and engaging, empowering students to
            build real-world apps, games, and tools that are fun and
            intellectually stimulating.
          </p>
        </section>

        <section className="section">
          <h2>Custom-Tailored, Evidence-Based Curriculum</h2>
          <p>
            Our curriculum is research-informed and completely custom-built. It
            adapts to each student’s age and ability, ensuring they’re always
            challenged—but never overwhelmed. Whether they're beginners or
            budding pros, every student moves forward at the right pace for
            them.
          </p>
        </section>

        <section className="section">
          <h2>AI-Integrated Learning</h2>
          <p>
            Artificial Intelligence isn't just a buzzword—it's a tool. Our
            students don’t just learn about AI, they learn how to leverage it to
            write better code, faster and smarter. We teach the same modern
            tools used by today's top developers.
          </p>
        </section>

        <section className="section">
          <h2>Instruction From Top Engineers</h2>
          <p>
            Our instruction is led by senior software engineers with decades of
            experience at some of the world’s most renowned tech companies. We
            know what it takes to succeed in tech—because we’ve done it
            ourselves.
          </p>
        </section>

        <section className="section">
          <h2>Fueling a Lifelong Passion</h2>
          <p>
            Our mission is to spark a love for programming that grows with the
            student. Whether they become industry professionals or
            entrepreneurs, they'll have the foundation to succeed.
          </p>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
