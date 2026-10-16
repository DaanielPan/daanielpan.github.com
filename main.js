"use strict";
const app = document.querySelector("#app");
if (!app)
    throw new Error("Portfolio root missing");
app.innerHTML = "\n<header><nav aria-label=\"Main navigation\"><a class=\"brand\" href=\"#home\">daniel pan<span>.</span></a><div class=\"links\"><a href=\"#projects\">Projects</a><a href=\"#experience\">Experience</a><a href=\"#education\">About</a><a class=\"resume-nav\" href=\"daniel-pan-resume.pdf\" target=\"_blank\" rel=\"noopener\">Resume \u2197</a></div></nav></header>\n<main class=\"wrap\" id=\"home\"><section class=\"hero\"><div><span class=\"status\"><span class=\"dot\"></span>Co-op availability \u00b7 Jan \u2013 Jun 2027</span><h1>Hi, I\u2019m<br><em>Daniel Pan.</em></h1><p class=\"intro\">Computer science student at Northeastern University, with a focus on software, systems, and solving practical problems.</p><div class=\"actions\"><a class=\"button primary\" href=\"#projects\">Explore my work <span>\u2197</span></a><a class=\"button\" href=\"daniel-pan-resume.pdf\" download>Download resume <span>\u2193</span></a></div></div><div class=\"profile\" aria-label=\"Daniel Pan, Computer Science, Northeastern University\"><div class=\"profile-top\"><span>PERSONAL PORTFOLIO</span><span>01 / DP</span></div><div class=\"monogram\" aria-hidden=\"true\">dp.</div><div class=\"profile-bottom\"><div><strong>Computer Science</strong>Northeastern University \u00b7 Class of 2028</div><span>Boston, MA<br>Queens, NY</span></div></div></section>\n<section class=\"section\" id=\"projects\"><div class=\"section-head\"><h2><span class=\"number\">01</span>Selected projects</h2><span class=\"section-note\">From core logic to connected workflows</span></div><div class=\"projects\"><article class=\"project\"><div class=\"visual\" aria-hidden=\"true\"><div class=\"calendar\"><div class=\"calendar-top\"><b>AUGUST 2025</b><span>\u2039 &nbsp; \u203a</span></div><div class=\"days\"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span><span>1</span><span>2</span><span>3</span><span>4</span><span class=\"event\">5</span><span>6</span><span>7</span><span>8</span><span class=\"event\">9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span class=\"event\">18</span><span>19</span><span>20</span><span>21</span></div></div></div><div class=\"project-copy\"><div class=\"project-meta\"><span>Desktop application</span><span>Aug 2025</span></div><h3>Calendar Application</h3><p>A Java calendar supporting event creation, editing, copying, and cross-calendar operations. Built a 950+ line command processor and 1,000+ lines of core model code for interactive and headless views.</p><div class=\"tags\"><span class=\"tag\">Java</span><span class=\"tag\">Swing</span><span class=\"tag\">Object-oriented design</span></div></div></article><article class=\"project\"><div class=\"visual dark\" aria-hidden=\"true\"><div class=\"tree-diagram\"><div class=\"db\">OAKhoury Tree</div><span>\u2502</span><div class=\"branches\"><div class=\"db\">Requests</div><div class=\"db\">Site visits</div><div class=\"db\">Planting</div></div><span>11 connected tables \u00b7 MySQL</span></div></div><div class=\"project-copy\"><div class=\"project-meta\"><span>Database application</span><span>Mar \u2013 Apr 2025</span></div><h3>OAKhoury Tree</h3><p>A system for coordinating tree planting operations. Designed an 11-table MySQL schema with 100+ sample records and built a Java/JDBC application for registration, requests, site visits, and planting workflows.</p><div class=\"tags\"><span class=\"tag\">Java</span><span class=\"tag\">MySQL</span><span class=\"tag\">JDBC</span></div></div></article></div></section>\n<section class=\"section\" id=\"experience\"><div class=\"section-head\"><h2><span class=\"number\">02</span>Experience</h2><span class=\"section-note\">Technology, with people at the center</span></div><div class=\"experience-row\"><div class=\"date\">JAN 2026 \u2014 JUN 2026<span class=\"place\">Cambridge, MA</span></div><div class=\"detail\"><h3>Harvard University IT</h3><div class=\"role\">Technical Support Engineer \u00b7 Co-op</div><ul><li>Handled 1,368 support calls and 937 ServiceNow tickets, resolving 753 tickets for students, faculty, staff, and alumni across Windows and macOS.</li><li>Supported account security and identity management through Okta Verify, MFA, passwordless authentication, account recovery, and identity verification.</li><li>Resolved hardware, software, network, and access issues with a 6:45 average talk time and 5/5 customer ratings across 14 surveys.</li></ul><div class=\"metrics\"><div><strong>1,368</strong><span>SUPPORT CALLS</span></div><div><strong>90%</strong><span>FIRST CALL RESOLUTION</span></div><div><strong>5/5</strong><span>CUSTOMER RATING</span></div></div></div></div><div class=\"experience-row\"><div class=\"date\">SEP 2025 \u2014 DEC 2025<span class=\"place\">Boston, MA</span></div><div class=\"detail\"><h3>Northeastern University</h3><div class=\"role\">Peer Tutoring Office Coordinator</div><ul><li>Managed Knack platform operations serving 13,000+ students and resolved an average of 10+ inquiries daily.</li><li>Coordinated student communications and scheduling to improve response times and service quality.</li><li>Maintained and analyzed program records in Excel to improve reporting accuracy and operational efficiency.</li></ul></div></div><div class=\"experience-row\"><div class=\"date\">JUL 2025 \u2014 AUG 2025<span class=\"place\">Queens, NY</span></div><div class=\"detail\"><h3>Asian-American Coalition for Education II</h3><div class=\"role\">Lead TA Supervisor</div><ul><li>Supervised and mentored a team of 30+ TAs and 2 supervisors, implementing a structured feedback system that increased team performance and operational effectiveness.</li><li>Developed and managed a centralized database in Google Sheets for over 80 students and TAs, ensuring 100% data accuracy and secure recordkeeping.</li><li>Engineered and optimized weekly schedules and trip logistics, improving staff coverage and maintaining a perfect student safety record.</li></ul></div></div></section>\n<section class=\"section\" id=\"education\"><div class=\"section-head\"><h2><span class=\"number\">03</span>Education & toolkit</h2></div><div class=\"education-grid\"><div><p class=\"eyebrow\">Learning at Northeastern</p><h3>Building a strong foundation.</h3><p>B.S. in Computer Science<br>Khoury College of Computer Science<br><span class=\"course\">Expected May 2028 \u00b7 GPA 3.5 / 4.0</span></p><p class=\"eyebrow\">Relevant coursework</p><p class=\"course\">Algorithms and Data Structures \u00b7 Object-Oriented Design \u00b7 Discrete Structures \u00b7 Web Development \u00b7 Fundamentals of Computer Science I & II \u00b7 Foundations of Data Science</p></div><div><p class=\"eyebrow\">Technical skills</p><div class=\"skill-group\"><span>Languages</span><div>Python, Java, Kotlin, JavaScript, SQL, HTML, CSS</div></div><div class=\"skill-group\"><span>Data & systems</span><div>Docker, MySQL</div></div><div class=\"skill-group\"><span>Frameworks</span><div>Java Swing, JUnit</div></div><div class=\"skill-group\"><span>Developer tools</span><div>IntelliJ IDEA, VS Code</div></div><p class=\"interests\">Beyond coursework, my interests include artificial intelligence, autonomous vehicles and robots, basketball, and fitness.</p></div></div></section>\n<section class=\"contact\" id=\"contact\"><div><p class=\"eyebrow\">Get in touch</p><h2>Let\u2019s connect.</h2><p>Available for a co-op from January through June 2027.</p></div><div class=\"actions\"><a class=\"button\" href=\"mailto:pan.dani@northeastern.edu\">Email me \u2197</a><a class=\"button\" href=\"https://www.linkedin.com/in/danielpann/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn \u2197</a></div></section></main><footer class=\"wrap\"><span>\u00a9 2026 Daniel Pan</span><span>Boston, MA / Queens, NY</span><a href=\"#home\">Back to top \u2191</a></footer>";
(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.prepend(progress);
    const targets = [...document.querySelectorAll('.section-head,.project,.experience-row,.education-grid>div,.contact')];
    let revealObserver;
    if (!reduced.matches && 'IntersectionObserver' in window) {
        revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver?.unobserve(e.target);
        } }), { threshold: .08 });
        targets.forEach((el, i) => { el.classList.add('reveal'); el.style.setProperty('--reveal-delay', el.classList.contains('project') ? (i % 2) * 100 + 'ms' : '0ms'); revealObserver?.observe(el); });
        document.documentElement.classList.add('motion-ready');
    }
    const counters = [...document.querySelectorAll('.metrics strong')];
    let countObserver;
    if (!reduced.matches && 'IntersectionObserver' in window) {
        countObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting)
            return; const el = entry.target; countObserver?.unobserve(el); const original = el.textContent || ""; const match = original.match(/^([\d,]+)(.*)$/); if (!match)
            return; const value = Number(match[1].replace(/,/g, '')); const suffix = match[2]; const start = performance.now(); const run = (now) => { if (reduced.matches) {
            el.textContent = original;
            return;
        } const t = Math.min((now - start) / 1100, 1); el.textContent = Math.round(value * (1 - Math.pow(1 - t, 3))).toLocaleString('en-US') + suffix; if (t < 1)
            requestAnimationFrame(run);
        else
            el.textContent = original; }; requestAnimationFrame(run); }), { threshold: .7 });
        counters.forEach(el => countObserver?.observe(el));
    }
    let scheduled = false;
    function update() { scheduled = false; const range = document.documentElement.scrollHeight - innerHeight; progress.style.transform = 'scaleX(' + (range > 0 ? Math.max(0, Math.min(scrollY / range, 1)) : 0) + ')'; const sections = [...document.querySelectorAll('main section[id]')]; let current = ''; sections.forEach(el => { if (el.getBoundingClientRect().top <= 150)
        current = el.id; }); document.querySelectorAll('.links a[href^="#"]').forEach(a => { if (a.hash === '#' + current)
        a.setAttribute('aria-current', 'location');
    else
        a.removeAttribute('aria-current'); }); }
    addEventListener('scroll', () => { if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
    } }, { passive: true });
    addEventListener('resize', update);
    update();
    const card = document.querySelector('.profile');
    if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
        card.addEventListener('pointermove', e => { if (reduced.matches)
            return; const b = card.getBoundingClientRect(); const x = (e.clientX - b.left) / b.width - .5; const y = (e.clientY - b.top) / b.height - .5; card.style.animation = 'none'; card.style.transform = 'perspective(900px) rotateX(' + (-y * 9) + 'deg) rotateY(' + (x * 11) + 'deg) rotateZ(2deg)'; });
        card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    }
    reduced.addEventListener('change', () => { if (reduced.matches) {
        revealObserver?.disconnect();
        countObserver?.disconnect();
        targets.forEach(el => el.classList.add('visible'));
        card.style.transform = '';
    } });
})();
// Decorative atmosphere remains outside the accessibility tree.
const atmosphere = document.createElement('div');
atmosphere.className = 'orbital';
atmosphere.setAttribute('aria-hidden', 'true');
atmosphere.innerHTML = '<i></i><i></i><i></i><i></i>';
document.querySelector('.profile')?.append(atmosphere);
// Project details use the native modal for focus management and Escape support.
const modal = document.createElement('dialog');
modal.className = 'project-dialog';
modal.setAttribute('aria-labelledby', 'project-dialog-title');
modal.innerHTML = '<button class="dialog-close" aria-label="Close project details">×</button><p class="eyebrow">PROJECT NOTES</p><h2 id="project-dialog-title"></h2><div class="dialog-body"></div>';
document.body.append(modal);
modal.querySelector('button')?.addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) {
    const b = modal.getBoundingClientRect();
    if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom)
        modal.close();
} });
const notes = [
    '<p>A desktop calendar built around a Java core model and a Swing interface, with support for interactive and headless views.</p><h3>Core model</h3><p>Implemented Calendar, User, Event, and EventSeries entities in over 1,000 lines of Java model code.</p><h3>Command processing</h3><p>Built a 950+ line CommandProcessor supporting event creation, editing, copying, and operations across calendars.</p>',
    '<p>A Java and MySQL application modeling the steps involved in coordinating tree planting.</p><h3>Relational data design</h3><p>Designed an 11-table schema and populated it with ov