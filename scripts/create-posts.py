post_data = {
  'title': '',
  'img': '',
  'alt': '',
  'link': '',
  'date': '',
}

print('Post title: ')
post_data['title'] = input()
print('Post img: ')
post_data['img'] = "/images/posts/" + input()
print('Post alt: ')
post_data['alt'] = input()
print('Post link: ')
post_data['link'] = input()
print('Post date: ')
post_data['date'] = input()

file_name  = "%s-%s" %(post_data['date'], "-".join(post_data['title'].lower().split(" ")))

file = open("_posts/%s.md" % file_name, 'w')
file.write("---\n")
file.write("layout: post\n")
file.write("title: %s\n" % post_data['title'])
file.write("img: %s\n" % post_data['img'])
file.write("alt: %s\n" % post_data['alt'])
file.write("link: %s\n" % post_data['link'])
file.write("---\n")
