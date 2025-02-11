
files = {
    'JavaScript': {
        'progress': 90,
        'categories': [
            'NodeJS',
            'React',
            'React Native',
            'VueJS',
            'Express',
            'Jest',
            'Mocha'
        ]
    },
    'CSS': {
        'progress': 80,
        'categories': [
            'SCSS',
            'Less',
            'OOCSS',
            'BEM',
            'ITCSS'
        ]
    },
    'HTML': {
        'progress': 75,
        'categories': [
            'HTML5',
            'Semantic HTML',
            'Accessibility'
        ]
    },
    'Ruby': {
        'progress': 71,
        'categories': [
            'Ruby on Rails',
            'Sinatra',
            'Rspec'
        ]
    },
    'Git': {
        'progress': 75,
        'categories': [
            'Git Flow',
            'Multi-repository',
            'Versioning Packages'
        ]
    },
    'MongoDB': {
        'progress': 65,
        'categories': []
    },
    'PostgreSQL': {
        'progress': 55,
        'categories': []
    },
    'Team Work': {
        'progress': 78,
        'categories': [
            'Multi disciplinary teams',
            'OKR and Sprint focused teams'
        ]
    },
    'Conflict Resolution': {
        'progress': 70,
        'categories': []
    },
    'Agile Methodologies': {
        'progress': 65,
        'categories': [
            'Scrum',
            'XP',
            'Kanban'
        ]
    },
    'Algorithms': {
        'progress': 80,
        'categories': [
            'Sort/Search Algorithms',
            'Clean Code',
            'Functional Programming',
            'Object Oriented Programming'
        ]
    },
    'Software Engineer': {
        'progress': 68,
        'categories': [
            'Clean Code',
            'Code Quality',
            'TDD'
        ]
    },
    'Python': {
        'progress': 75,
        'categories': [
            'Django',
            'Pandas',
            'Data Visualization',
            'Data Mining',
            'Exploratory Data Analysis'
        ]
    },
    'R': {
        'progress': 65,
        'categories': []
    },
    'Math': {
        'progress': 65,
        'categories': [
            'Discrete Math',
            'Statistics',
            'Linear Algebra',
            'Calculus',
        ]
    },
}

for skill_name in files:
    file_name  = "-".join(skill_name.lower().split(" "))

    file = open("_skills/%s.md" % file_name, 'w')
    file.write("---\n")
    file.write("layout: skill\n")
    file.write("name: \"%s\"\n" % skill_name)
    file.write("progress: %s\n" % files[skill_name]['progress'])

    if len(files[skill_name]['categories']):
        file.write("categories:\n")
        for category in files[skill_name]['categories']:
            file.write("  - %s\n" % category)

    file.write("---\n")
