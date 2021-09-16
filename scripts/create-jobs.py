
files = [
  {
    'name': 'Social Media - Internship',
    'company': 'faeterj-rio',
    'tags': [],
    'description': 'I worked in WebCom Team, which is an team that mantains the FAETERJ Social Medias(Facebook, Wordpress) and focus a lot on User interactions using a lot of marketing techniques, and agile praticles.',
    'start_date': '2015-08',
    'end_date': '2016-4',
  },
  {
    'name': 'Front-end Developer - Technological Research Project(PICT)',
    'company': 'faeterj-rio',
    'tags': ['JavaScript', 'PHP', 'jQuery'],
    'description': 'PICT is an Technological Research Project focused on creating educational applications using technologies like HTML5, CSS3, Canvas, JavaScript. It uses pure JavaScript, has an very deep agile philosophy, using Kanban, Scrum focusing on code quality and UX/UI.',
    'start_date': '2015-11',
    'end_date': '2016-11',
  },
  {
    'name': 'Front-end Developer - Internship',
    'company': 'minds-at-work',
    'tags': ['JavaScript', 'Node.js', 'Angular.js', 'jQuery'],
    'description': 'Minds At Work is an enterprise software developer, the I\'ve worked in different Projects from facial recognition to network simulation, we used AngularJS, jQuery, Mocha, Chai, Sinon, Istanbul, SCSS, Gulp, Websockets and others technologies.',
    'start_date': '2016-05',
    'end_date': '2017-01',
  },
  {
    'name': 'Full-stack Developer - Junior',
    'company': 'b2w-digital',
    'tags': ['JavaScript', 'React', 'Node.js'],
    'description': 'B2W digital is the greatest E-commerce in Latina America. There we used React/Redux stack React Native for universal apps with RESTful APIs, and a lot of technologies like RestQL, a GraphQL-like implementation, and NodeJS for most of the Front-end APIs. Metric focused work, testing new feature with A/B, A/B/C tests, and it has scrum teams OKRs focused. And teams divided as Squads.',
    'start_date': '2017-02',
    'end_date': '2018-09',
  },
  {
    'name': 'Full-stack Developer - Middle',
    'company': 'zoox',
    'tags': ['JavaScript', 'Node.js', 'VueJavaScript', 'Angular'],
    'description': 'Zoox is a software company focused on Big Data projects and working with the Facial recognition engines. There we use Node.js and Vue stack.',
    'start_date': '2018-09',
    'end_date': '2019-12',
  },
  {
    'name': 'Full-stack Developer - Middle',
    'company': 'working-minds',
    'tags': ['JavaScript', 'React', 'Node.js', 'Ruby on Rails', 'Angular', 'Ionic'],
    'description': '',
    'start_date': '2020-01',
    'end_date': 'Present',
  }
]

companies = {
    'faeterj-rio': {
        'name': 'FAETERJ-Rio',
        'img': 'faeterj-rio.png',
        'ref': 'https://www.linkedin.com/school/faeterj-rio/'
    },
    'minds-at-work': {
        'name': 'Minds At Work Sistemas e Projetos Ltda',
        'img': 'minds-at-work.png',
        'ref': 'https://www.linkedin.com/company/minds-at-work-sistemas-e-projetos-ltda/'
    },
    'b2w-digital': {
        'name': 'B2W Digital',
        'img': 'b2w-digital.png',
        'ref': 'https://www.linkedin.com/company/b2w---companhia-global-do-varejo/'
    },
    'zoox': {
        'name': 'Zoox Smart Data',
        'img': 'zoox.jpeg',
        'ref': 'https://www.linkedin.com/company/zoox-smart-data-brasil/'
    },
    'working-minds': {
        'name': 'Working Minds',
        'img': 'working-minds.png',
        'ref': 'https://www.linkedin.com/company/working-minds/',
    }
}

for job in files:
    file_name  = "%s-%s" %(job['start_date'], job['company'])

    file = open("_jobs/%s.md" % file_name, 'w')
    file.write("---\n")
    file.write("layout: job\n")
    file.write("name: %s\n" % job['name'])
    file.write("tags: %s\n" % ",".join(job['tags']))
    file.write("description: \"%s\"\n" % job['description'])
    file.write("start_date: \"%s\"\n" % "/".join(job['start_date'].lower().split("-")[::-1]))


    if job['end_date'] == 'Present':
      file.write("end_date: \"%s\"\n" % job['end_date'])
    else:
      file.write("end_date: \"%s\"\n" % "/".join(job['end_date'].lower().split("-")[::-1]))

    file.write("key: %s\n" % file_name)
    file.write("company_name: %s\n" % companies[job['company']]['name'])
    file.write("company_img: %s\n" % companies[job['company']]['img'])
    file.write("company_ref: %s\n" % companies[job['company']]['ref'])
    file.write("---\n")