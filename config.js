// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Jacob Kwan",
    program: "BTech Automation Technology / Faculty of Engineering",
    university: "McMaster University, Canada",
    email: "kwanj21@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Mini Project A - Roadway Traffic Simulation and Analysis (SUMO)",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Comparison of intersection traffic: Base Scenario (100% HDV) vs. Scenario 1 (100% CAV)"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Traffic is a daily cost, with congestion causing queues, delays, and wasted fuel/emissions.",
			"Simulations can be used by traffic engineers to test new technologies and modified parameters.",
			"Conencted autonomous vehicles (CAVs) change how traffic flows.",
			"Benefits of adding CAVs to our roads are not guaranteed."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"No digital baseline exists for the given intersection.",
			"Effects of CAVs on the selected road are untested.",
			"There is no before-and-after evidence for the timing intervention.",
			"Results are difficult to communicate."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Build the digital simulation and HDV baseline.",
			"Compare 100% CAV beahviours against the baseline.",
			"Evaluate the effects of a signal timing intervention.",
			"Present results in different styles through KPIs, figures, and a showcase website."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Network Development and HDV Baseline",
				text: "Build the road network in SUMO using GIS data, then add demand and signal timings to establish a 100% HDV baseline.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Controlled 100% CAV Simulation",
				text: "Alter behaviours of drivers to mimic a CAV while all other parameters remain the same.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Signal Timing Intervention",
				text: "Change the signal timings of the intersection and observe to see if it improves traffic flow.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Results & Communication (Figures + Showcase Website)",
				text: "Summarize results using figures, KPIs, and the showcase website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Network Development and HDV Baseline",
        bullets: [
		  { text: "Build a SUMO road network of the Steeles Ave W and Keele St intersection from GIS data, including lanes, turning lanes, and junction connections." },
          { text: "Configure traffic demand, signal timing, and default HDV passenger cars, with 450 veh/h east-west, 300 veh/h north-south, and a 60 s cycle." },
          { text: "Run the baseline simulation and generate the speed-density diagram for edge E78 from edgeData output." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Controlled 100% CAV Simulation",
        bullets: [
          { text: "Replace all HDVs with CAVs while holding geometry, demand, routes, signals, and duration constant." },
          { text: "Define CAV car-following parameters, including a 0.6 s time headway, 1.5 m minimum gap, and stronger acceleration and braking." },
          { text: "Compare the CAV speed-density relationship on edge E78 against the HDV baseline to isolate the effect of vehicle behaviour.." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Signal Timing Intervention",
        bullets: [
		  { text: "Diagnose queue buildup on the east-west approaches, where demand (450 veh/h) exceeds the north-south movement (300 veh/h)." },
          { text: "Extend the east-west green from 27 s to 41 s, keep the north-south green at 27 s, and run Scenario 2 with 100% HDVs." },
          { text: "Compare before-and-after speed-density results on edge E78 to evaluate changes in speed, congestion onset, and capacity." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Dashboard or plot set: KPI cards, bar charts, and/or time series." },
          { text: "Scenario story: what changed, what improved, and what tradeoffs appeared." },
          { text: "Limitations + next steps: what data would strengthen confidence." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Road network traffic across a specified edge, comparing two scenarios. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Base Scenario: 100% HDV — Speed-Density Diagram of Edge 78",
					src: "assets/img/image6.jpg",
					alt: "Base scenario showing HDV traffic at the intersection across edge 78"
				},
				right: {
					title: "Scenario 1: 100% CAV — Speed-Density Diagram of Edge 78",
					src: "assets/img/image7.jpg",
					alt: "Scenario 2 showing CAV traffic at the intersection across edge 78"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"The recommendation is for the City not to implement the 41 s green on this evidence alone, and to commission further analysis with field data, delay metrics, and both approaches.",
				"Baseline (100% HDV) on edge E78 fits well (R² = 0.841) with about 816 veh/h capacity, and speeds below 2 m/s at about 100 veh/km indicate queue buildup.",
				"The 100% AV scenario is nearly identical (R² = 0.836, about 822 veh/h), since the signal, not car-following, governs speed on this edge.",
				"The 41 s east-west green gives a mixed result: capacity rises about 2.5% to about 837 veh/h, but R² falls to 0.744.",
				"Limitations include assumed inputs, a single run and edge, and no calibration, so the evidence supports further study, not implementation."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Your Name", role: "Rail Scheduling & Signaling + Digital Twin I, Immersive VR Visualization + Results & Communication" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
