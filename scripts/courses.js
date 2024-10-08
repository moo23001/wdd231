const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
courseCards(courses);

function courseCards(filteredCards) {

    const section2 = document.querySelector("#cardSection2");
    section2.innerHTML = "";

    filteredCards.map((course) => {
        const cCard = document.createElement("h4");
        cCard.classList = 'course';
        if (course.completed == true) {
            cCard.innerHTML = `${course.subject} ${course.number} ✅`;
        } else {
            cCard.innerHTML = `${course.subject} ${course.number} ⬜`;

        }

        section2.appendChild(cCard);
        cCard.addEventListener("click", () => displayModal(course));
    })

}

const allCourses = document.querySelector('#allCourses');
const cseCourses = document.querySelector('#cseCourses');
const wddCourses = document.querySelector('#wddCourses');

allCourses.addEventListener("click", () => {
    document.querySelector("#cardSection2").innerHTML = "";
    courseCards(courses);
})

cseCourses.addEventListener("click", () => {
    document.querySelector("#cardSection2").innerHTML = "";
    courseCards(courses.filter(course => course.subject == 'CSE'));
})

wddCourses.addEventListener("click", () => {
    document.querySelector("#cardSection2").innerHTML = "";
    courseCards(courses.filter(course => course.subject == 'WDD'));
})

const credits = courses.reduce((accumulator, course) => {
    return accumulator + course.credits;
}, 0);

const displayCredits = document.querySelector("#credits");
displayCredits.innerHTML = `Credits required ${credits}`;


function displayModal (course) {
    const courseDetails = document.querySelector('.course-details');
    const closeButton = document.createElement('button');
    const subjectNumber = document.createElement('h2');
    const title = document.createElement('h3');
    const credits = document.createElement('p');
    const description = document.createElement ('p');
    const certificate = document.createElement('p');
    const techStack = document.createElement('p');

    courseDetails.innerHTML = '';
    closeButton.textContent = '❌';
    subjectNumber.innerHTML = `${course.subject} ${course.number}`;
    title.innerHTML = `${course.title}`;
    credits.innerHTML = `<strong>Credits</strong>: ${course.credits}`;
    certificate.innerHTML = `<strong>Certificate</strong>: ${course.certificate}`
    description.innerHTML = `${course.description}`;
    techStack.innerHTML = `<strong>Technologies</strong>: ${course.technology.join(', ')}`

    courseDetails.appendChild(closeButton);
    courseDetails.appendChild(subjectNumber);
    courseDetails.appendChild(title);
    courseDetails.appendChild(credits);
    courseDetails.appendChild(certificate);
    courseDetails.appendChild(description);
    courseDetails.appendChild(techStack);


    
    /*courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;*/
    
    courseDetails.showModal();

    closeButton.addEventListener("click", () => {
        courseDetails.close();
    })

}