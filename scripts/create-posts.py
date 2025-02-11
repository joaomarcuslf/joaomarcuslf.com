
files = {
    'moving-from': {
        'title': 'How moving from Design to Back-end made me a better Front-end',
        'img': '/images/posts/how-moving-from-design.jpeg',
        'alt': 'Devices on a table, this is a image showcase to the post.',
        'link': 'https://medium.com/@joaomarcuslf/back-to-2011-my-mother-said-d87dee1847e6',
        'date': '2016-07-29'
    },
    'testing-javascript': {
        'title': 'Testando JavaScript corretamente com Mocha + ES6 + Gulp',
        'img': '/images/posts/mocha-es6-gulp.jpeg',
        'alt': 'Notebook in table, this is a image showcase to the post.',
        'link': 'https://medium.com/@joaomarcuslf/testando-javascript-corretamente-com-mocha-es6-gulp-a29e9e4f25c1',
        'date': '2016-09-25'
    },
    'comunidades-toxicas': {
        'title': 'Refletindo sobre mulheres na computação e comunidades tóxicas',
        'img': '/images/posts/women-in-tech.png',
        'alt': 'Women in Tech written in the image, this is a image showcase to the post.',
        'link': 'https://code.likeagirl.io/refletindo-sobre-mulheres-na-computa%C3%A7%C3%A3o-e-comunidades-t%C3%B3xicas-85a7efaa435',
        'date': '2017-06-22'
    },
    'front-end-em-2020': {
        'title': 'Front-end in 2020 - Presentation',
        'img': '/images/presentations/front-end-2020.png',
        'alt': 'Front page of the slide, this is a image showcase to the post.',
        'link': 'https://github.com/joaomarcuslf2/front-end-2020/blob/master/Front-end%20em%202020.pdf',
        'date': '2020-07-14'
    }
}

for post_name in files:
    file_name  = "%s-%s" %(files[post_name]['date'], "-".join(post_name.lower().split(" ")))

    file = open("_posts/%s.md" % file_name, 'w')
    file.write("---\n")
    file.write("layout: post\n")
    file.write("title: %s\n" % files[post_name]['title'])
    file.write("img: %s\n" % files[post_name]['img'])
    file.write("alt: %s\n" % files[post_name]['alt'])
    file.write("link: %s\n" % files[post_name]['link'])
    file.write("---\n")