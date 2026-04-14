import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({ margin: 50 });

doc.pipe(fs.createWriteStream('public/resume.pdf'));

// Header
doc.font('Helvetica-Bold').fontSize(24).text('MARK ANTHONY MAGLEO', { align: 'center' });
doc.font('Helvetica').fontSize(12).text('Sr. Full Stack Engineer | Manila, Philippines', { align: 'center' });
doc.text('goldensnake0611@gmail.com', { align: 'center' });
doc.moveDown();

// Summary
doc.font('Helvetica').fontSize(10).text('I’m a skilled Full-stack Engineer with expertise in designing user-friendly, responsive interfaces, and full-stack web applications. Proficient in leveraging modern web development frameworks and methodologies, with a strong focus on efficient, clean, and maintainable code. Demonstrated leadership in collaborative projects and adept in agile, remote-first work environments.');
doc.moveDown();

// Skills
doc.font('Helvetica-Bold').fontSize(14).text('TECHNICAL SKILLS');
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.5);

const skills = [
  'Front-End: React, React Native, Redux, TypeScript, MobX, Next.js, Angular, RxJS, Remix',
  'UI/UX Design: Material UI, Bootstrap, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)',
  'API & Security: REST API, OAuth, JWT, WebSockets, GraphQL, Contentful',
  'Back-End: Node.js, Express.js, Nest.js, Python, Django, Flask, Java, Spring Boot',
  'Databases: MySQL, PostgreSQL, Oracle, MongoDB',
  'Serverless Computing: AWS Lambda, Azure Functions, Google Cloud Functions',
  'Testing: Jest, Enzyme, Mocha, Selenium, Cypress',
  'DevOps Tools: Docker, Kubernetes, AWS CI/CD pipelines, GitHub Actions',
  'Version Control: Git, GitHub, Bitbucket',
  'Cloud Services: AWS, Azure, GCP, Firebase, Vercel'
];

doc.font('Helvetica').fontSize(10);
skills.forEach(skill => {
  doc.text(`• ${skill}`);
});
doc.moveDown();

// Experience
doc.font('Helvetica-Bold').fontSize(14).text('PROFESSIONAL EXPERIENCE');
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.5);

const experiences = [
  {
    title: 'Senior Software Engineer | Talkdesk',
    location: 'Lisbon, Portugal | June 2025 – November 2025',
    bullets: [
      'Developed and delivered a cloud-based data foundation system and AI agent platform.',
      'Collaborated with cross-functional teams to deliver a reliable, scalable service with assured AI quality.',
      'Ensured alignment with technical design and technology roadmap while adopting best practices.'
    ]
  },
  {
    title: 'Sr. Software Engineer | Teamwork',
    location: 'Cork, Ireland | September 2022 – December 2024',
    bullets: [
      'Integrated complex API endpoints and Open AI models using Python for Coca-Cola HBC.',
      'Used React Hooks for front-end functionality and integrated Coke Fusion API.',
      'Developed Node.js and Java based web services to integrate with existing backend systems.',
      'Implemented REST API to handle user interactions and data management.',
      'Migrated backend servers to AWS and supervised server configuration and deployment.',
      'Implemented real time chat features using Firebase for Mortodoo.',
      'Developed iOS app using Angular and Ionic framework.',
      'Created API client in React Native for QuickCheck mobile apps.'
    ]
  },
  {
    title: 'Full Stack Engineer | PayPal',
    location: 'San Jose, CA, United States | September 2019 – August 2022',
    bullets: [
      'Worked on Billing and Subscription using JavaScript, React, Angular and Node.',
      'Improved application performance and reliability by utilizing cloud services.',
      'Implemented Test-Driven Development (TDD) and Behavior-Driven Development (BDD).'
    ]
  },
  {
    title: 'Frontend Engineer | Corva',
    location: 'Houston, TX, United States | January 2016 – July 2019',
    bullets: [
      'Developed real time applications using React, Redux, MobX, Material UI and Corva UI components.',
      'Implemented comprehensive unit tests using Jest and React Testing Library.'
    ]
  },
  {
    title: 'Web Developer | Promatics Technologies',
    location: 'Delhi, India | September 2014 – December 2015',
    bullets: [
      'Integrated data analytics into hotel operations, catalyzing strategic decisions.',
      'Developed responsive user interfaces with HTML, CSS, and JavaScript.',
      'Applied server-side rendering for website, optimizing SEO and loading times.',
      'Secured data transfer by HTTPS and OAuth authentication implementation in mobile app.'
    ]
  }
];

experiences.forEach(exp => {
  doc.font('Helvetica-Bold').fontSize(11).text(exp.title);
  doc.font('Helvetica-Oblique').fontSize(10).text(exp.location);
  doc.font('Helvetica').fontSize(10);
  exp.bullets.forEach(bullet => {
    doc.text(`  • ${bullet}`);
  });
  doc.moveDown(0.5);
});

// Education
doc.font('Helvetica-Bold').fontSize(14).text('EDUCATIONAL BACKGROUND & CERTIFICATIONS');
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.5);

doc.font('Helvetica').fontSize(10);
doc.text('• Master’s degree in Computer Science, Indian Institute of Science');
doc.text('• Bachelor’s degree in Computer Science, Indian Institute of Science');
doc.text('• React Developer Professional Certificate, Meta (Facebook)');

doc.end();
