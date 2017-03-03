//This JavaScript is for my interactive resume website as assigned by Udacity.
//It is based off the Udacity basic skeleton code provided, as well as the
//directed code writing in the lessons. The rest is my own work. Signed: EK

var bio = {
  "name": "Emily Keator",
  "role": "Web Developer",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "emkeator@gmail.com",
    "github": "emkeator",
    "twitter": "@emkeator",
    "location": "Park City, UT"
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
  if (bio.skills && bio.skills.length > 0){
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
};

//Contacts
bio.displayContacts = function() {

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  // $("#topContacts").append(formattedMobile);
  // $("#topContacts").append(formattedEmail);
  // $("#topContacts").append(formattedGithub);
  // $("#topContacts").append(formattedTwitter);
  // $("#topContacts").append(formattedLocation);

  //footer
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedTwitter);
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
      "dates": "2017",
      "degree": "Certificate",
      "url": "https://devmountain.com/"
    },
    { "name": "Davidson College",
      "location": "Davidson, NC",
      "majors": ["Biology"],
      "dates": "2012-2016",
      "degree": "B.S.",
      "classRank": "Magna Cum Laude, with Honors",
      "url": "https://www.davidson.edu/"
    },
    { "name": "The Bolles School",
      "location": "Jacksonville, FL",
      "dates": "2008-2012",
      "degree": "High School Diploma",
      "classRank": "Salutatorian",
      "url": "http://www.bolles.org/"
    }

  ],
  "onlineCourses": [
    { "school": "Udacity",
      "title": "Front-End Web Development",
      "dates": "2016-2017",
      "url": "https://www.udacity.com/"
    }
  ]
};

education.display = function() {
  if(education.schools && education.schools.length > 0) {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      if (school.hasOwnProperty("majors")) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[0]));
      }
      if (school.hasOwnProperty("classRank")) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("Major: %data%", school.classRank));
      }
    });
  }


  if(education.onlineCourses && education.onlineCourses.length > 0) {
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
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
      "description": "Fellow in neuroscience lab at the National Institute of Mental Health; focus on genetic engineering within the lab."
    },
    { "employer": "Davidson College",
      "dates": "2013 - 2016",
      "title": "Biology Tutor",
      "location": "Davidson, NC",
      "description": "Tutored peers on biology & related subjects, 8-10 hours/week."
    },
    { "employer": "The Jackson Laboratory",
      "dates": "Summer 2014 & 2015",
      "title": "Summer Student",
      "location": "Bar Harbor, ME",
      "description": "Genetic engineering summer fellowship."
    },
    { "employer": "Camp Fernwood Summer Camp for Girls",
      "dates": "Summer 2013",
      "title": "Counselor",
      "location": "Poland, ME",
      "description": "Rock climbing & ballet counselor; live-in \'bunk mom\' for cabin of 12 girls, ages 8-9."
    }
  ]
};

work.display = function() {
  if(work.jobs && work.jobs.length > 0) {
    work.jobs.forEach(function(job) {
      $("#work").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));

    });
  }
}

//Projects--Large Screen Display
var projectImages = {
  "projectImages": [
    {"name": "images/cap.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 1: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'},
    {"name": "images/cap2.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 2: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'},
    {"name": "images/cap.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 3: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'},
    {"name": "images/cap2.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 4: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'},
    {"name": "images/cap.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 5: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'},
    {"name": "images/cap2.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 6: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'},
    {"name": "images/cap.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 7: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'},
    {"name": "images/cap2.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 8: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'},
    {"name": "images/cap.jpg",
    "nativeWidth": 500,
    "caption": '<a href="#">Project 9: Captain America</a><div class="date-text">1945</div><p><br>Don\'t have any projects yet, but if I\'m going to code all day long, I might as well look at something nice as a placeholder image...</p>'}
  ]
};

projectImages.initialDisplay = function() {
  var rows = projectImages.projectImages.length;

  $("#projects").append(HTMLprojectStart);
  for (var i = 0; i < rows; i++){
    var newImage = HTMLprojectImage.replace("%data%", projectImages.projectImages[i].name).replace('%_%', i);
    $(".fisheye-container:last").append(newImage);
    var curImageID = "image"+ i;
    var width = 100 / rows;
    document.getElementById(curImageID).style.width = String(width) + "%";
  }
  $("#projects").append(HTMLprojectCaption.replace("%data%", "<br><br>"));
}

projectImages.initialDisplay();

projectImages.fisheyeImage = function(num) {
  var rows = projectImages.projectImages.length;
  var curImageWidth = projectImages.projectImages[num].nativeWidth;
  document.getElementById("image"+num).style.width = String(curImageWidth + "px");
  for (i = 0; i < rows; i++) {
    if (i != num) {
      var curImageID = "image" + i;
      document.getElementById(curImageID).style.width = "calc( (100% - " + curImageWidth + "px) / " + (rows - 1) +")";
    }
  }
  $('.caption').html(projectImages.projectImages[num].caption);
};

projectImages.unfisheyeImage = function() {
  var rows = projectImages.projectImages.length;
  for (var j = 0; j < rows; j++){
    var curImageID = "image"+ j;
    var width = 100 / rows;
    document.getElementById(curImageID).style.width = String(width) + "%";
  }
  $('.caption').text(" ");
};

projectImages.display = function() {
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
    { "title": "Project 1: Captain America",
      "dates": "1945",
      "description": "If I\'m going to code all day long, I might as well look at something nice as a placeholder image...",
      "images": ["images/cap.jpg", "images/cap2.jpg"]
    },
    { "title": "Project 2: Captain America",
      "dates": "1945",
      "description": "If I\'m going to code all day long, I might as well look at something nice as a placeholder image...",
      "images": ["images/cap.jpg", "images/cap2.jpg"]
    },
    { "title": "Project 3: Captain America",
      "dates": "1945",
      "description": "If I\'m going to code all day long, I might as well look at something nice as a placeholder image...",
      "images": ["images/cap.jpg", "images/cap2.jpg"]
    }
  ]
};

mobileProjects.display = function() {
  if(mobileProjects.projects && mobileProjects.projects.length > 0) {
    mobileProjects.projects.forEach(function(project) {
      $("#mobileProjects").append(mobileProjectStart);
      $(".mobile-project-entry:last").append(mobileProjectTitle.replace("%data%", project.title));
      $(".mobile-project-entry:last").append(mobileProjectDates.replace("%data%", project.dates));
      $(".mobile-project-entry:last").append(mobileProjectDescription.replace("%data%", project.description));
      for (var i = 0; i < project.images.length; i++) {
        $(".mobile-project-entry:last").append(mobileProjectImage.replace("%data%", project.images[i]));
      }
    });
  }
}

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
