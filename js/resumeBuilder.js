//This JavaScript is for my interactive resume website as assigned by Udacity.
//It is based off the Udacity basic skeleton code provided, as well as the
//directed code writing in the lessons. The rest is my own work. Signed: EK

var bio = {
  "name": "Emily Keator",
  "role": "Web Developer",
  "contacts": {
    "mobile": ["555-555-5555", "#"],
    "email": ["emkeator@gmail.com", "mailto:emkeator@gmail.com"],
    "github": ["emkeator", "https://github.com/emkeator"],
    "twitter": ["@emkeator", "https://twitter.com/emkeator"],
    "linkedin": ["Emily Keator", "https://www.linkedin.com/in/emkeator"],
    "location": ["Park City, UT", "https://www.google.com/maps/place/Park+City,+UT"]
  },
  "welcomeMessage": "Welcome to my inteactive resume. A little bit about me: I've lived all around the country, I have an interest in hiking, skiing, runnning, ballet, cooking--and coding! Despite majoring in Biology in college, I fell in love with coding and have been working in tech ever since.",
  "skills": ["Python", "Java", "JS", "HTML/CSS", "Proficiency in Spanish"],
  "biopic": "images/emkeator-biopic_650.jpg",
  "logopic": "images/EKlogo_750.png",
  "menu": ["Projects", "Work", "Education", "Contacts"]
};

//Full header
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name.toUpperCase());
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  // var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedLogoPic = HTMLbioPic.replace("%data%", bio.logopic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  //Header
  $("#headerImg").prepend(formattedRole);
  $("#headerImg").prepend(formattedName);
  $("#header").append(formattedWelcome);
  bio.displayMenu();
  bio.displaySkills();
  bio.displayContacts();
};

//Skills
bio.displaySkills = function() {
  $("#skill-sector").append(HTMLskillsStart);
  if (bio.skills && bio.skills.length){
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
};

//Contacts
bio.displayContacts = function() {

  // var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email[0]).replace("#", bio.contacts.email[1]);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github[0]).replace("#", bio.contacts.github[1]);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter[0]).replace("#", bio.contacts.twitter[1]);
  var formattedLinkedIn = HTMLcontactGeneric.replace("%data%", bio.contacts.linkedin[0]).replace("%contact%", "linkedin").replace("#", bio.contacts.linkedin[1]);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location[0]).replace("#", bio.contacts.location[1]);

  //footer
  //$("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedLinkedIn);
  $("#footerContacts").append(formattedLocation);
};

//Menu
bio.displayMenu = function() {
  for (i = 0; i < bio.menu.length; i++) {
    var menuItem = HTMLmenu.replace("%data1%", bio.menu[i].toLowerCase()).replace("%data%", bio.menu[i].toUpperCase());
    $("#menu").append(menuItem);
  }
};

//Education
var education = {
  "schools": [
    { "name": "DevMountain",
      "location": "Provo, UT",
      "majors": ["Full-Stack Web Development"],
      "dates": "Pending: July 17-October 13, 2017",
      "degree": "Certificate",
      "url": "https://devmountain.com/"
    },
    { "name": "Davidson College",
      "location": "Davidson, NC",
      "majors": ["Biology"],
      "dates": "2012-2016",
      "degree": "B.S.",
      "classRank": "Magna Cum Laude, with Honors",
      "releventCourses": "Bioinformatics (Python), Data Structures (Java), Statistics, Documentary Film, Digital Studies",
      "url": "https://www.davidson.edu/"
    },
    { "name": "University of St. Andrews",
      "location": "St. Andrews, Fife, Scotland",
      "majors": [],
      "dates": "2014",
      "degree": "Semester Abroad",
      "releventCourses": "Art History, English Lit, and Medieval History",
      "url": "http://www.st-andrews.ac.uk/"
    },
    { "name": "The Bolles School",
      "location": "Jacksonville, FL",
      "majors": [],
      "dates": "2008-2012",
      "degree": "High School Diploma",
      "classRank": "Salutatorian",
      "releventCourses": "AP BC Calculus (5), Pre-Calculus, Algebra II",
      "url": "http://www.bolles.org/"
    }

  ],
  "onlineCourses": [
    { "school": "Udacity",
      "title": "Deep Learning Foundation",
      "dates": "2017",
      "url": "https://www.udacity.com/course/deep-learning-nanodegree-foundation--nd101"
    },
    { "school": "Udacity",
      "title": "Front-End Web Development",
      "dates": "2016-2017",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

education.display = function() {
  if(education.schools && education.schools.length > 0) {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name).replace("#", school.url) + HTMLschoolDegree.replace("%data%", school.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      if (school.hasOwnProperty("majors") && school.majors.length) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[0]));
      }
      if (school.hasOwnProperty("classRank")) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("Major: %data%", school.classRank));
      }
      if (school.hasOwnProperty("releventCourses")) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("Major: %data%", "Relevant Courses: " + school.releventCourses));
      }
    });
  }

  $("#education").append(HTMLonlineClasses);

  if(education.onlineCourses && education.onlineCourses.length > 0) {
    education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLonlineStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url) + HTMLonlineSchool.replace("%data%", course.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
    });
  }
};

//Work
var work = {
  "jobs": [
    { "employer": "National Institutes of Health",
      "dates": "June 6, 2016 - Present",
      "title": "Post-baccalaureate Fellow",
      "location": "Bethesda, MD",
      "description": "Fellow in neuroscience lab at the National Institute of Mental Health; focus on genetic engineering within the lab.",
      "url": "https://www.training.nih.gov/programs/postbac_irta"
    },
    { "employer": "Davidson College",
      "dates": "2013 - 2016",
      "title": "Biology Tutor",
      "location": "Davidson, NC",
      "description": "Tutored peers on biology & related subjects, 8-10 hours/week.",
      "url": "https://www.davidson.edu/offices/ctl"
    },
    { "employer": "The Jackson Laboratory",
      "dates": "Summer 2014 & 2015",
      "title": "Summer Student",
      "location": "Bar Harbor, ME",
      "description": "Genetic engineering summer fellowship.",
      "url": "https://www.jax.org/education-and-learning/high-school-students-and-undergraduates/learn-earn-and-explore"
    },
    { "employer": "Camp Fernwood Summer Camp for Girls",
      "dates": "Summer 2013",
      "title": "Counselor",
      "location": "Poland, ME",
      "description": "Rock climbing & ballet counselor; live-in \'bunk mom\' for cabin of 12 girls, ages 8-9.",
      "url": "http://www.campfernwood.com/"
    }
  ]
};

work.display = function() {
  if(work.jobs && work.jobs.length > 0) {
    work.jobs.forEach(function(job) {
      $("#work").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url) + HTMLworkTitle.replace("%data%", job.title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));

    });
  }
};

//Projects--Large Screen Display
var projectImages = {
  "nativeHeight": 371,
  "projectImages": [
    {"name": "images/Portfolio1.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Portfolio Site</a><div class="date-text">February 2017</div><p><br>Designed a responsive, mobile personal website using HTML, CSS, JavaScript, Bootstrap framework, and some original framework design. Very basic code skeleton originally developed in a Udacity assignment, but expanded and customized; produced all photographs as well.<br><br><em>Image of portfolio page.</em></p>',
    "url": 'https://emkeator.github.io/emkeator/'},
    {"name": "images/Portfolio2.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Portfolio Site</a><div class="date-text">February 2017</div><p><br>Designed a responsive, mobile personal website using HTML, CSS, JavaScript, Bootstrap framework, and some original framework design. Very basic code skeleton originally developed in a Udacity assignment, but expanded and customized; produced all photographs as well.<br><br><em>When images in portfolio are selected, modals pop-up.</em></p>',
    "url": 'https://emkeator.github.io/emkeator/'},
    {"name": "images/Portfolio3.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Portfolio Site</a><div class="date-text">February 2017</div><p><br>Designed a responsive, mobile personal website using HTML, CSS, JavaScript, Bootstrap framework, and some original framework design. Very basic code skeleton originally developed in a Udacity assignment, but expanded and customized; produced all photographs as well.<br><br><em>How page displays on mobile format.</em></p>',
    "url": 'https://emkeator.github.io/emkeator/'},
    {"name": "images/Arcade1.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Arcade Game Clone</a><div class="date-text">March 2017</div><p><br>Clone of the classic arcade game Frogger, designed to be user-friendly and a delightful “Star Wars” game experience. Created a JavaScript app as part of Udacity assignment, customizing functions and Canvas drawings to my own design.<br><br><em>Image of the game screen.</em></p>',
    "url": "https://github.com/emkeator/frontend-nanodegree-arcade-game"},
    {"name": "images/Arcade2.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Arcade Game Clone</a><div class="date-text">March 2017</div><p><br>Clone of the classic arcade game Frogger, designed to be user-friendly and a delightful “Star Wars” game experience. Created a JavaScript app as part of Udacity assignment, customizing functions and Canvas drawings to my own design.<br><br><em>Image of the loss screen.</em></p>',
    "url": "https://github.com/emkeator/frontend-nanodegree-arcade-game"},
    {"name": "images/Arcade3.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Arcade Game Clone</a><div class="date-text">March 2017</div><p><br>Clone of the classic arcade game Frogger, designed to be user-friendly and a delightful “Star Wars” game experience. Created a JavaScript app as part of Udacity assignment, customizing functions and Canvas drawings to my own design.<br><br><em>Image of the win screen.</em></p>',
    "url": "https://github.com/emkeator/frontend-nanodegree-arcade-game"},
    {"name": "images/ImageProcess1.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">ImageJ Cell-Count Processor</a><div class="date-text">Fall 2015</div><p><br>Produced a Python program to process images of fluorescent cells, returning a CSV file of the total cell count and analyzed data. Class project, later used in Biology Honors Thesis research. Program accessed ImageJ (Java-based) software through Terminal; required outside-class study of Java.<br><br><em>Sample of Python code.<em><br><br><em>Code for this project not available online.<em></p>',
    "url": "#"},
    {"name": "images/ImageProcess2.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">ImageJ Cell-Count Processor</a><div class="date-text">Fall 2015</div><p><br>Produced a Python program to process images of fluorescent cells, returning a CSV file of the total cell count and analyzed data. Class project, later used in Biology Honors Thesis research. Program accessed ImageJ (Java-based) software through Terminal; required outside-class study of Java.<br><br><em>Demonstration of test code: sample images used in processing, and CSV file of data.<em><br><br><em>Code for this project not available online.<em></p>',
    "url": "#"}
  ]
};

projectImages.initialDisplay = function() {
  var rows = projectImages.projectImages.length;

  $("#projects").append(HTMLprojectStart);
  for (var i = 0; i < rows; i++){
    if (projectImages.projectImages[i].url != "#") {
      var newImage = HTMLprojectImage.replace("%data%", projectImages.projectImages[i].name).replace('%_%', i).replace('%_%', i).replace("#", projectImages.projectImages[i].url);
    } else {
      var newImage = HTMLprojectImage.replace("%data%", projectImages.projectImages[i].name).replace('%_%', i).replace('%_%', i).replace("href=\"#\"", "");
    }
    $(".fisheye-container:last").append(newImage);
    var curLinkImageID = "linkImage"+ i;
    var curImageID = "image"+ i;
    var width = 100 / rows;
    document.getElementById(curLinkImageID).style.width = String(width) + "%";
    document.getElementById(curLinkImageID).style.height = String(projectImages.nativeHeight) + "px";
    document.getElementById(curImageID).style.width = String(100) + "%";
    document.getElementById(curImageID).style.height = String(100) + "%";
  }
  $("#projects").append(HTMLprojectCaption.replace("%data%", "<br><br>"));
};

projectImages.fisheyeImage = function(num) {
  var rows = projectImages.projectImages.length;
  var curImageWidth = projectImages.projectImages[num].nativeWidth;
  document.getElementById("linkImage"+num).style.width = String(curImageWidth + "px");
  for (i = 0; i < rows; i++) {
    if (i != num) {
      var curImageID = "linkImage" + i;
      document.getElementById(curImageID).style.width = "calc( (100% - " + curImageWidth + "px) / " + (rows - 1) +")";
    }
  }
  $('.caption').html(projectImages.projectImages[num].caption);
};

projectImages.unfisheyeImage = function() {
  var rows = projectImages.projectImages.length;
  for (var j = 0; j < rows; j++){
    var curImageID = "linkImage"+ j;
    var width = 100 / rows;
    document.getElementById(curImageID).style.width = String(width) + "%";
  }
  $('.caption').text(" ");
};

projectImages.display = function() {

  projectImages.initialDisplay();

  $( "#image0" ).mouseover(function() {
    projectImages.fisheyeImage(0);
  });
  $( "#image0" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });

  $( "#image1" ).mouseover(function() {
    projectImages.fisheyeImage(1);
  });
  $( "#image1" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });

  $( "#image2" ).mouseover(function() {
    projectImages.fisheyeImage(2);
  });
  $( "#image2" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });

  $( "#image3" ).mouseover(function() {
    projectImages.fisheyeImage(3);
  });
  $( "#image3" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });

  $( "#image4" ).mouseover(function() {
    projectImages.fisheyeImage(4);
  });
  $( "#image4" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });

  $( "#image5" ).mouseover(function() {
    projectImages.fisheyeImage(5);
  });
  $( "#image5" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });

  $( "#image6" ).mouseover(function() {
    projectImages.fisheyeImage(6);
  });
  $( "#image6" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });

  $( "#image7" ).mouseover(function() {
    projectImages.fisheyeImage(7);
  });
  $( "#image7" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });

  $( "#image8" ).mouseover(function() {
    projectImages.fisheyeImage(8);
  });
  $( "#image8" ).mouseleave(function() {
    projectImages.unfisheyeImage();
  });
};

//Projects--Mobile Display
var mobileProjects = {
  "projects": [
    { "title": "Portfolio Site",
      "dates": "February 2017",
      "description": "Designed a responsive, mobile personal website using HTML, CSS, JavaScript, Bootstrap framework, and some original framework design. Very basic code skeleton originally developed in a Udacity assignment, but expanded and customized; produced all photographs as well.",
      "images": ["images/Portfolio1.jpg", "images/Portfolio3.jpg"],
      "url": 'https://emkeator.github.io/emkeator/'
    },
    { "title": "Arcade Game Clone",
      "dates": "March 2017",
      "description": "Clone of the classic arcade game Frogger, designed to be user-friendly and a delightful “Star Wars” game experience. Created a JavaScript app as part of Udacity assignment, customizing functions and Canvas drawings to my own design.",
      "images": ["images/Arcade1.jpg", "images/Arcade2.jpg"],
      "url": "https://github.com/emkeator/frontend-nanodegree-arcade-game"
    },
    { "title": "ImageJ Cell-Count Processor",
      "dates": "Fall 2015",
      "description": "Produced a Python program to process images of fluorescent cells, returning a CSV file of the total cell count and analyzed data. Class project, later used in Biology Honors Thesis research. Program accessed ImageJ (Java-based) software through Terminal; required outside-class study of Java. <em>Code for this project not available online.</em>",
      "images": ["images/ImageProcess1.jpg", "images/ImageProcess2.jpg"],
      "url": "#"
    }
  ]
};

mobileProjects.display = function() {
  if(mobileProjects.projects && mobileProjects.projects.length > 0) {
    mobileProjects.projects.forEach(function(project) {
      $("#mobileProjects").append(mobileProjectStart);
      if (project.url != "#") {
        $(".mobile-project-entry:last").append(mobileProjectTitle.replace("%data%", project.title).replace("#", project.url));
      } else {
        $(".mobile-project-entry:last").append(mobileProjectTitle.replace("%data%", project.title).replace("href=\"#\"", ""));
      }
      $(".mobile-project-entry:last").append(mobileProjectDates.replace("%data%", project.dates));
      $(".mobile-project-entry:last").append(mobileProjectDescription.replace("%data%", project.description));
      for (var i = 0; i < project.images.length; i++) {
        $(".mobile-project-entry:last").append(mobileProjectImage.replace("%data%", project.images[i]));
      }
    });
  }
};

//Header
bio.display();

//Work experience
work.display();

//Projects--Large
projectImages.display();

//Projects--Mobile
mobileProjects.display();

//Education
education.display();

//MAP
$("#mapDiv").append(googleMap);

//LOGGING CLICKS
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});
