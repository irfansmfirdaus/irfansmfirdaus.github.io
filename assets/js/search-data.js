// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-fun-thing",
          title: "Fun Thing",
          description: "Code and Paper/Article Summary",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-paper-mechanism-of-initiation-and-regeneration-of-convective-cell-in-bandung-basin-indonesia-is-now-published-in-geoscience-letter",
          title: 'Paper “Mechanism of initiation and regeneration of convective cell in Bandung Basin, Indonesia”...',
          description: "",
          section: "News",},{id: "news-pre-print-of-manuscript-with-title-indonesia-tornado-database-tornado-climatology-of-indonesia-is-now-available-in-natural-hazards-and-earth-system-sciences-nhess-open-for-discussion-and-under-review",
          title: 'Pre-print of manuscript with title “Indonesia Tornado Database: Tornado Climatology of Indonesia” is...',
          description: "",
          section: "News",},{id: "news-i-presented-our-progress-results-with-title-tornado-climatology-of-indonesia-in-japan-geoscience-union-jpgu-meeting-2025-on-30-may-2025-and-in-earth-sea-and-sky-xi-workshop-on-3-june-2025",
          title: 'I presented our progress results with title ‘Tornado Climatology of Indonesia’ in Japan...',
          description: "",
          section: "News",},{id: "news-our-paper-with-title-indonesia-tornado-database-tornado-climatology-of-indonesia-has-been-accepted-for-publication-in-natural-hazards-and-earth-system-sciences-nhess",
          title: 'Our paper with title “Indonesia Tornado Database: Tornado Climatology of Indonesia” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-with-title-indonesia-tornado-database-tornado-climatology-of-indonesia-has-been-published-in-natural-hazards-and-earth-system-sciences-nhess",
          title: 'Our paper with title “Indonesia Tornado Database: Tornado Climatology of Indonesia” has been...',
          description: "",
          section: "News",},{id: "news-i-presented-our-progress-results-with-title-comparison-of-era5-and-sounding-data-over-tropical-maritime-region-in-2025-msj-autumn-meeting-on-7-november-2025",
          title: 'I presented our progress results with title ‘Comparison of ERA5 and Sounding Data...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project%20-%20Copy/";
            },},{id: "projects-ocean-warming",
          title: 'Ocean Warming',
          description: "Observation and Projected Impact on Marine Environment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
