
files = {
    'JavaScript': 90,
    'CSS': 80,
    'HTML': 75,
    'Ruby': 71,
    'Git': 75,
    'MongoDB': 55,
    'PostgreSQL': 55,
    'Team Work': 78,
    'Conflict Resolution': 70,
    'Agile Methodologies': 65,
    'Algorithms': 70,
    'Software Engineer': 68
}

for skill_name in files:
    file_name  = "-".join(skill_name.lower().split(" "))

    file = open("_skills/%s.md" % file_name, 'w')
    file.write("---\n")
    file.write("layout: skill\n")
    file.write("name: %s\n" % skill_name)
    file.write("progress: %s\n" % files[skill_name])
    file.write("---\n")