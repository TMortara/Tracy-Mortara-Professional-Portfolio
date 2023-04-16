import wanderlust from "../assets/images/wanderlust.png";
import weather from "../assets/images/weatherapp.png";
import codeQuiz from "../assets/images/jscodingquiz.png";

export const ProjectData = [
    {
        image: wanderlust,
        title: "Wanderlust Travel Blog",
        tags: ["MySQL", "JavaScript", "Express"],
        description: "Wanderlust allows users to view/manage their trip data. Users can also view and comment on others trips.",
        deployedLink: "https://quiet-everglades-33653.herokuapp.com/",
        gitHubLink: "https://github.com/TMortara/Travel-Blog"
    },
    {
        image: weather,
        title: "Weather Forecast",
        tags: ["JavaScript", "CSS", "HTML"],
        description: "Weather application that allows users to see the current and 5 day forecase for a selected city.",
        deployedLink: "https://tmortara.github.io/Weather-App/",
        gitHubLink: "https://github.com/TMortara/Weather-App"
    },
    {
        image: codeQuiz,
        title: "JavaScript Coding Quiz",
        tags: ["JavaScript", "CSS", "HTML"],
        description: "Basic coding quiz that allows users to test their JavaScript knowledge.",
        deployedLink: "https://tmortara.github.io/JavaScript-Code-Quiz/",
        gitHubLink: "https://github.com/TMortara/JavaScript-Code-Quiz"
    }
]