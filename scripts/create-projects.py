
files = {
    'react-express-ssr': {
        'title': 'SSR example using React and ExpressJS',
        'repo': 'react-express-ssr',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/react-express-ssr',
        'date': '2020-10-08'
    },
    'pbl-tcc-bucket': {
        'title': 'This is the AWS Bucket API for the PBL project',
        'repo': 'pbl-tcc-bucket',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/pbl-tcc-bucket',
        'date': '2019-11-17'
    },
    'pbl-tcc-front': {
        'title': 'This is the Front-end built in VueJS for the PBL project',
        'repo': 'pbl-tcc-front',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/pbl-tcc-front',
        'date': '2019-11-01'
    },
    'pbl-tcc-api': {
        'title': 'This is the Rest Api Back-end built in Ruby on Rails and PostgreSQL for the PBL project',
        'repo': 'pbl-tcc-api',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/pbl-tcc-api',
        'date': '2019-11-01'
    },
    'authorization-api': {
        'title': 'JWT Api Authorization built in several languages',
        'repo': 'authorization-api',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/authorization-api',
        'date': '2017-06-15'
    },
    'cross-event': {
        'title': 'Module for Event communication for React Native, Node and Browser',
        'repo': 'cross-event',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/cross-event',
        'date': '2018-07-09'
    },
    'data-science-studies': {
        'title': 'Repo to show how my studies about data science are going',
        'repo': 'data-science-studies',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/data-science-studies',
        'date': '2020-10-04'
    },
    'golang-studies': {
        'title': 'Repo to show how my studies about Golang are going',
        'repo': 'golang-studies',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/golang-studies',
        'date': '2020-06-15'
    },
    'clojure-catalog-service': {
        'title': 'Example of a catalog api built in Clojure',
        'repo': 'clojure-catalog-service',
        'user': 'joaomarcuslf2',
        'link': 'https://github.com/joaomarcuslf2/clojure-catalog-service',
        'date': '2017-02-19'
    },
}


for project_name in files:
    file_name  = "%s-%s" %(files[project_name]['date'], "-".join(project_name.lower().split(" ")))

    file = open("_projects/%s.md" % file_name, 'w')
    file.write("---\n")
    file.write("layout: project\n")
    file.write("title: %s\n" % files[project_name]['title'])
    file.write("repo: %s\n" % files[project_name]['repo'])
    file.write("user: %s\n" % files[project_name]['user'])
    file.write("link: %s\n" % files[project_name]['link'])
    file.write("---\n")