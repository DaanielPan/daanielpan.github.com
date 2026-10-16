"use strict";

/* =========================================================
   PORTFOLIO CONTENT
   ========================================================= */

const app = document.querySelector("#app");

if (!app) {
  throw new Error("Portfolio root missing");
}

app.innerHTML = `
<header>
  <nav aria-label="Main navigation">
    <a class="brand" href="#home">daniel pan<span>.</span></a>

    <div class="links">
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#education">About</a>
      <a
        class="resume-nav"
        href="daniel-pan-resume.pdf"
        target="_blank"
        rel="noopener"
      >
        Resume ↗
      </a>
    </div>
  </nav>
</header>

<main class="wrap" id="home">

  <!-- HERO -->
  <section class="hero">
    <div>
      <span class="status">
        <span class="dot"></span>
        Co-op availability · Jan – Jun 2027
      </span>

      <h1>
        Hi, I’m<br>
        <em>Daniel Pan.</em>
      </h1>

      <p class="intro">
        Computer science student at Northeastern University, with a focus
        on software, systems, and solving practical problems.
      </p>

      <div class="actions">
        <a class="button primary" href="#projects">
          Explore my work <span>↗</span>
        </a>

        <a
          class="button"
          href="daniel-pan-resume.pdf"
          download
        >
          Download resume <span>↓</span>
        </a>
      </div>
    </div>

    <div
      class="profile"
      aria-label="Daniel Pan, Computer Science, Northeastern University"
    >
      <div class="profile-top">
        <span>PERSONAL PORTFOLIO</span>
        <span>01 / DP</span>
      </div>

      <div class="monogram" aria-hidden="true">
        dp.
      </div>

      <div class="profile-bottom">
        <div>
          <strong>Computer Science</strong>
          Northeastern University · Class of 2028
        </div>

        <span>
          Boston, MA<br>
          Queens, NY
        </span>
      </div>
    </div>
  </section>


  <!-- PROJECTS -->
  <section class="section" id="projects">

    <div class="section-head">
      <h2>
        <span class="number">01</span>
        Selected projects
      </h2>

      <span class="section-note">
        From core logic to connected workflows
      </span>
    </div>

    <div class="projects">

      <!-- CALENDAR PROJECT -->
      <article class="project">

        <div class="visual" aria-hidden="true">
          <div class="calendar">

            <div class="calendar-top">
              <b>AUGUST 2025</b>
              <span>‹ &nbsp; ›</span>
            </div>

            <div class="days">
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>

              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span class="event">5</span>
              <span>6</span>
              <span>7</span>

              <span>8</span>
              <span class="event">9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>

              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span class="event">18</span>
              <span>19</span>
              <span>20</span>
              <span>21</span>
            </div>

          </div>
        </div>

        <div class="project-copy">

          <div class="project-meta">
            <span>Desktop application</span>
            <span>Aug 2025</span>
          </div>

          <h3>Calendar Application</h3>

          <p>
            A Java calendar supporting event creation, editing, copying,
            and cross-calendar operations. Built a 950+ line command
            processor and 1,000+ lines of core model code for interactive
            and headless views.
          </p>

          <div class="tags">
            <span class="tag">Java</span>
            <span class="tag">Swing</span>
            <span class="tag">Object-oriented design</span>
          </div>

          <button class="project-open" type="button">
            View project details →
          </button>

        </div>
      </article>


      <!-- OAKHOURY TREE -->
      <article class="project">

        <div class="visual dark" aria-hidden="true">

          <div class="tree-diagram">

            <div class="db">
              OAKhoury Tree
            </div>

            <span>│</span>

            <div class="branches">
              <div class="db">Requests</div>
              <div class="db">Site visits</div>
              <div class="db">Planting</div>
            </div>

            <span>
              11 connected tables · MySQL
            </span>

          </div>
        </div>

        <div class="project-copy">

          <div class="project-meta">
            <span>Database application</span>
            <span>Mar – Apr 2025</span>
          </div>

          <h3>OAKhoury Tree</h3>

          <p>
            A system for coordinating tree planting operations.
            Designed an 11-table MySQL schema with 100+ sample records
            and built a Java/JDBC application for registration, requests,
            site visits, and planting workflows.
          </p>

          <div class="tags">
            <span class="tag">Java</span>
            <span class="tag">MySQL</span>
            <span class="tag">JDBC</span>
          </div>

          <button class="project-open" type="button">
            View project details →
          </button>

        </div>
      </article>

    </div>
  </section>


  <!-- EXPERIENCE -->
  <section class="section" id="experience">

    <div class="section-head">
      <h2>
        <span class="number">02</span>
        Experience
      </h2>

      <span class="section-note">
        Technology, with people at the center
      </span>
    </div>


    <!-- HARVARD -->
    <div class="experience-row">

      <div class="date">
        JAN 2026 — JUN 2026
        <span class="place">
          Cambridge, MA
        </span>
      </div>

      <div class="detail">

        <h3>Harvard University IT</h3>

        <div class="role">
          Technical Support Engineer · Co-op
        </div>

        <ul>
          <li>
            Handled 1,368 support calls and 937 ServiceNow tickets,
            resolving 753 tickets for students, faculty, staff, and
            alumni across Windows and macOS.
          </li>

          <li>
            Supported account security and identity management through
            Okta Verify, MFA, passwordless authentication, account
            recovery, and identity verification.
          </li>

          <li>
            Resolved hardware, software, network, and access issues with
            a 6:45 average talk time and 5/5 customer ratings across
            14 surveys.
          </li>
        </ul>

        <div class="metrics">

          <div>
            <strong>1,368</strong>
            <span>SUPPORT CALLS</span>
          </div>

          <div>
            <strong>90%</strong>
            <span>FIRST CALL RESOLUTION</span>
          </div>

          <div>
            <strong>5/5</strong>
            <span>CUSTOMER RATING</span>
          </div>

        </div>

      </div>
    </div>


    <!-- NORTHEASTERN -->
    <div class="experience-row">

      <div class="date">
        SEP 2025 — DEC 2025
        <span class="place">
          Boston, MA
        </span>
      </div>

      <div class="detail">

        <h3>Northeastern University</h3>

        <div class="role">
          Peer Tutoring Office Coordinator
        </div>

        <ul>
          <li>
            Managed Knack platform operations serving 13,000+ students
            and resolved an average of 10+ inquiries daily.
          </li>

          <li>
            Coordinated student communications and scheduling to improve
            response times and service quality.
          </li>

          <li>
            Maintained and analyzed program records in Excel to improve
            reporting accuracy and operational efficiency.
          </li>
        </ul>

      </div>
    </div>


    <!-- AACE -->
    <div class="experience-row">

      <div class="date">
        JUL 2025 — AUG 2025
        <span class="place">
          Queens, NY
        </span>
      </div>

      <div class="detail">

        <h3>Asian-American Coalition for Education II</h3>

        <div class="role">
          Lead TA Supervisor
        </div>

        <ul>
          <li>
            Supervised and mentored a team of 30+ TAs and 2 supervisors,
            implementing a structured feedback system that increased
            team performance and operational effectiveness.
          </li>

          <li>
            Developed and managed a centralized database in Google Sheets
            for over 80 students and TAs, ensuring 100% data accuracy
            and secure recordkeeping.
          </li>

          <li>
            Engineered and optimized weekly schedules and trip logistics,
            improving staff coverage and maintaining a perfect student
            safety record.
          </li>
        </ul>

      </div>
    </div>

  </section>


  <!-- EDUCATION -->
  <section class="section" id="education">

    <div class="section-head">
      <h2>
        <span class="number">03</span>
        Education & toolkit
      </h2>
    </div>

    <div class="education-grid">

      <div>

        <p class="eyebrow">
          Learning at Northeastern
        </p>

        <h3>
          Building a strong foundation.
        </h3>

        <p>
          B.S. in Computer Science<br>
          Khoury College of Computer Science<br>

          <span class="course">
            Expected May 2028 · GPA 3.5 / 4.0
          </span>
        </p>

        <p class="eyebrow">
          Relevant coursework
        </p>

        <p class="course">
          Algorithms and Data Structures ·
          Object-Oriented Design ·
          Discrete Structures ·
          Web Development ·
          Fundamentals of Computer Science I & II ·
          Foundations of Data Science
        </p>

      </div>


      <div>

        <p class="eyebrow">
          Technical skills
        </p>

        <div class="skill-group">
          <span>Languages</span>
          <div>
            Python, Java, Kotlin, JavaScript, SQL, HTML, CSS
          </div>
        </div>

        <div class="skill-group">
          <span>Data & systems</span>
          <div>
            Docker, MySQL
          </div>
        </div>

        <div class="skill-group">
          <span>Frameworks</span>
          <div>
            Java Swing, JUnit
          </div>
        </div>

        <div class="skill-group">
          <span>Developer tools</span>
          <div>
            IntelliJ IDEA, VS Code
          </div>
        </div>

        <p class="interests">
          Beyond coursework, my interests include artificial
          intelligence, autonomous vehicles and robots, basketball,
          and fitness.
        </p>

      </div>

    </div>
  </section>


  <!-- CONTACT -->
  <section class="contact" id="contact">

    <div>

      <p class="eyebrow">
        Get in touch
      </p>

      <h2>
        Let’s connect.
      </h2>

      <p>
        Available for a co-op from January through June 2027.
      </p>

    </div>

    <div class="actions">

      <a
        class="button"
        href="mailto:pan.dani@northeastern.edu"
      >
        Email me ↗
      </a>

      <a
        class="button"
        href="https://www.linkedin.com/in/danielpann/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>

    </div>

  </section>

</main>


<!-- FOOTER -->
<footer class="wrap">

  <span>
    © 2026 Daniel Pan
  </span>

  <span>
    Boston, MA / Queens, NY
  </span>

  <a href="#home">
    Back to top ↑
  </a>

</footer>
`;


/* =========================================================
   PAGE ANIMATIONS + SCROLL BEHAVIOR
   ========================================================= */

(() => {

  const reduced = matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  /* Scroll progress bar */
  const progress = document.createElement("div");

  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");

  document.body.prepend(progress);


  /* Reveal animations */
  const targets = [
    ...document.querySelectorAll(
      ".section-head, .project, .experience-row, .education-grid > div, .contact"
    )
  ];

  let revealObserver;

  if (
    !reduced.matches &&
    "IntersectionObserver" in window
  ) {

    revealObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");

          revealObserver?.unobserve(entry.target);

        });

      },
      {
        threshold: 0.08
      }
    );

    targets.forEach((element, index) => {

      element.classList.add("reveal");

      element.style.setProperty(
        "--reveal-delay",
        element.classList.contains("project")
          ? `${(index % 2) * 100}ms`
          : "0ms"
      );

      revealObserver?.observe(element);

    });

    document.documentElement.classList.add(
      "motion-ready"
    );
  }


  /* Animated statistics */
  const counters = [
    ...document.querySelectorAll(".metrics strong")
  ];

  let countObserver;

  if (
    !reduced.matches &&
    "IntersectionObserver" in window
  ) {

    countObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target;

          countObserver?.unobserve(element);

          const original =
            element.textContent || "";

          const match =
            original.match(/^([\d,]+)(.*)$/);

          if (!match) {
            return;
          }

          const value = Number(
            match[1].replace(/,/g, "")
          );

          const suffix = match[2];

          const start = performance.now();

          const run = (now) => {

            if (reduced.matches) {
              element.textContent = original;
              return;
            }

            const progressAmount = Math.min(
              (now - start) / 1100,
              1
            );

            const eased =
              1 -
              Math.pow(
                1 - progressAmount,
                3
              );

            element.textContent =
              Math.round(value * eased)
                .toLocaleString("en-US") +
              suffix;

            if (progressAmount < 1) {

              requestAnimationFrame(run);

            } else {

              element.textContent = original;

            }
          };

          requestAnimationFrame(run);

        });

      },
      {
        threshold: 0.7
      }
    );

    counters.forEach((element) => {
      countObserver?.observe(element);
    });

  }


  /* Scroll progress + active navigation */
  let scheduled = false;

  function updateScrollState() {

    scheduled = false;

    const range =
      document.documentElement.scrollHeight -
      innerHeight;

    const amount =
      range > 0
        ? Math.max(
            0,
            Math.min(
              scrollY / range,
              1
            )
          )
        : 0;

    progress.style.transform =
      `scaleX(${amount})`;


    const sections = [
      ...document.querySelectorAll(
        "main section[id]"
      )
    ];

    let current = "";

    sections.forEach((section) => {

      if (
        section.getBoundingClientRect().top <=
        150
      ) {
        current = section.id;
      }

    });


    document
      .querySelectorAll(
        '.links a[href^="#"]'
      )
      .forEach((link) => {

        if (
          link.hash ===
          `#${current}`
        ) {

          link.setAttribute(
            "aria-current",
            "location"
          );

        } else {

          link.removeAttribute(
            "aria-current"
          );

        }

      });

  }


  addEventListener(
    "scroll",
    () => {

      if (!scheduled) {

        scheduled = true;

        requestAnimationFrame(
          updateScrollState
        );

      }

    },
    {
      passive: true
    }
  );


  addEventListener(
    "resize",
    updateScrollState
  );


  updateScrollState();


  /* Profile card mouse tilt */
  const card =
    document.querySelector(".profile");

  if (
    card &&
    matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches
  ) {

    card.addEventListener(
      "pointermove",
      (event) => {

        if (reduced.matches) {
          return;
        }

        const bounds =
          card.getBoundingClientRect();

        const x =
          (event.clientX - bounds.left) /
            bounds.width -
          0.5;

        const y =
          (event.clientY - bounds.top) /
            bounds.height -
          0.5;

        card.style.animation = "none";

        card.style.transform =
          `perspective(900px)
           rotateX(${-y * 9}deg)
           rotateY(${x * 11}deg)
           rotateZ(2deg)`;

      }
    );


    card.addEventListener(
      "pointerleave",
      () => {

        card.style.transform = "";

      }
    );

  }


  /* Reduced motion preference changes */
  reduced.addEventListener(
    "change",
    () => {

      if (!reduced.matches) {
        return;
      }

      revealObserver?.disconnect();
      countObserver?.disconnect();

      targets.forEach((element) => {
        element.classList.add("visible");
      });

      if (card) {
        card.style.transform = "";
      }

    }
  );

})();


/* =========================================================
   PROFILE DECORATION
   ========================================================= */

const atmosphere =
  document.createElement("div");

atmosphere.className = "orbital";

atmosphere.setAttribute(
  "aria-hidden",
  "true"
);

atmosphere.innerHTML =
  "<i></i><i></i><i></i><i></i>";

document
  .querySelector(".profile")
  ?.append(atmosphere);


/* =========================================================
   PROJECT DETAILS DIALOG
   ========================================================= */

const modal =
  document.createElement("dialog");

modal.className = "project-dialog";

modal.setAttribute(
  "aria-labelledby",
  "project-dialog-title"
);

modal.innerHTML = `
  <button
    class="dialog-close"
    aria-label="Close project details"
  >
    ×
  </button>

  <p class="eyebrow">
    PROJECT NOTES
  </p>

  <h2 id="project-dialog-title"></h2>

  <div class="dialog-body"></div>
`;

document.body.append(modal);


/* Close button */
modal
  .querySelector(".dialog-close")
  ?.addEventListener(
    "click",
    () => {
      modal.close();
    }
  );


/* Click outside dialog to close */
modal.addEventListener(
  "click",
  (event) => {

    if (event.target !== modal) {
      return;
    }

    const bounds =
      modal.getBoundingClientRect();

    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (outside) {
      modal.close();
    }

  }
);


/* =========================================================
   PROJECT NOTES
   ========================================================= */

const notes = [

  `
    <p>
      A desktop calendar built around a Java core model and
      a Swing interface, with support for interactive and
      headless views.
    </p>

    <h3>Core model</h3>

    <p>
      Implemented Calendar, User, Event, and EventSeries
      entities in over 1,000 lines of Java model code.
    </p>

    <h3>Command processing</h3>

    <p>
      Built a 950+ line CommandProcessor supporting event
      creation, editing, copying, and operations across
      calendars.
    </p>
  `,

  `
    <p>
      A Java and MySQL application modeling the steps
      involved in coordinating tree planting.
    </p>

    <h3>Relational data design</h3>

    <p>
      Designed an 11-table relational database schema and
      populated it with more than 100 sample records.
    </p>

    <h3>Application workflow</h3>

    <p>
      Built a Java/JDBC application supporting registration,
      requests, site visits, and tree planting workflows.
    </p>
  `

];


/* =========================================================
   OPEN PROJECT DIALOG
   ========================================================= */

const projects = [
  ...document.querySelectorAll(".project")
];

projects.forEach(
  (project, index) => {

    const button =
      project.querySelector(
        ".project-open"
      );

    button?.addEventListener(
      "click",
      () => {

        const title =
          project.querySelector("h3")
            ?.textContent ||
          "Project";

        const dialogTitle =
          modal.querySelector(
            "#project-dialog-title"
          );

        const dialogBody =
          modal.querySelector(
            ".dialog-body"
          );


        if (dialogTitle) {

          dialogTitle.textContent =
            title;

        }


        if (dialogBody) {

          dialogBody.innerHTML =
            notes[index] || "";

        }


        modal.showModal();

      }
    );

  }
);
