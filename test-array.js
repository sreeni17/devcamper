const courses = [
	{
		"_id": "5d725a4a7b292f5f8ceff789",
		"title": "Front End Web Development",
		"description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
		"weeks": 8,
		"tuition": 8000,
		"minimumSkill": "beginner",
		"scholarhipsAvailable": true,
		"bootcamp": "5d713995b721c3bb38c1f5d0",
		"user": "5d7a514b5d2c12c7449be045"
	},
	{
		"_id": "5d725c84c4ded7bcb480eaa0",
		"title": "Full Stack Web Development",
		"description": "In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB",
		"weeks": 12,
		"tuition": 10000,
		"minimumSkill": "intermediate",
		"scholarhipsAvailable": true,
		"bootcamp": "5d713995b721c3bb38c1f5d0",
		"user": "5d7a514b5d2c12c7449be045"
	},
	{
		"_id": "5d725cb9c4ded7bcb480eaa1",
		"title": "Full Stack Web Dev",
		"description": "In this course you will learn all about the front end with HTML, CSS and JavaScript. You will master tools like Git and Webpack and also learn C# and ASP.NET with Postgres",
		"weeks": 10,
		"tuition": 12000,
		"minimumSkill": "intermediate",
		"scholarhipsAvailable": true,
		"bootcamp": "5d713a66ec8f2b88b8f830b8",
		"user": "5d7a514b5d2c12c7449be046"
	},
	{
		"_id": "5d725cd2c4ded7bcb480eaa2",
		"title": "UI/UX",
		"description": "In this course you will learn to create beautiful interfaces. It is a mix of design and development to create modern user experiences on both web and mobile",
		"weeks": 12,
		"tuition": 10000,
		"minimumSkill": "intermediate",
		"scholarhipsAvailable": true,
		"bootcamp": "5d713a66ec8f2b88b8f830b8",
		"user": "5d7a514b5d2c12c7449be046"
	},
	{
		"_id": "5d725ce8c4ded7bcb480eaa3",
		"title": "Web Design & Development",
		"description": "Get started building websites and web apps with HTML/CSS/JavaScript/PHP. We teach you",
		"weeks": 10,
		"tuition": 9000,
		"minimumSkill": "beginner",
		"scholarhipsAvailable": true,
		"bootcamp": "5d725a037b292f5f8ceff787",
		"user": "5c8a1d5b0190b214360dc031"
	},
	{
		"_id": "5d725cfec4ded7bcb480eaa4",
		"title": "Data Science Program",
		"description": "In this course you will learn Python for data science, machine learning and big data tools",
		"weeks": 10,
		"tuition": 12000,
		"minimumSkill": "intermediate",
		"scholarhipsAvailable": false,
		"bootcamp": "5d725a037b292f5f8ceff787",
		"user": "5c8a1d5b0190b214360dc031"
	},
	{
		"_id": "5d725cfec4ded7bcb480eaa5",
		"title": "Web Development",
		"description": "This course will teach you how to build high quality web applications with technologies like React, Node.js, PHP & Laravel",
		"weeks": 8,
		"tuition": 8000,
		"minimumSkill": "beginner",
		"scholarhipsAvailable": false,
		"bootcamp": "5d725a1b7b292f5f8ceff788",
		"user": "5c8a1d5b0190b214360dc032"
	},
	{
		"_id": "5d725cfec4ded7bcb480eaa6",
		"title": "Software QA",
		"description": "This course will teach you everything you need to know about quality assurance",
		"weeks": 6,
		"tuition": 5000,
		"minimumSkill": "intermediate",
		"scholarhipsAvailable": false,
		"bootcamp": "5d725a1b7b292f5f8ceff788",
		"user": "5c8a1d5b0190b214360dc032"
	},
	{
		"_id": "5d725cfec4ded7bcb480eaa7",
		"title": "IOS Development",
		"description": "Get started building mobile applications for IOS using Swift and other tools",
		"weeks": 8,
		"tuition": 6000,
		"minimumSkill": "intermediate",
		"scholarhipsAvailable": false,
		"bootcamp": "5d725a1b7b292f5f8ceff788",
		"user": "5c8a1d5b0190b214360dc032"
	}
]

console.log(courses.map((c)=>{
    return c._id}));

console.log(courses.reduce((acc,course)=>{
    acc[course._id] = course;
    return acc;
},{}))