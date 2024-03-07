import wanderlust from "../assets/images/wanderlust.png";
import weather from "../assets/images/weatherapp.png";
import codeQuiz from "../assets/images/jscodingquiz.png";
// import robotic from "../assets/images/roboticrenaissance.png";

export const ProjectData = [
    {
        image: wanderlust,
        title: "Wanderlust Travel Blog",
        tags: ["MySQL", "JavaScript", "Express"],
        description: "Wanderlust allows users to view/manage their trip data. Users can also view and comment on others trips.",
        deployedLink: "https://quiet-everglades-33653.herokuapp.com/",
        gitHubLink: "https://github.com/TMortara/Travel-Blog"
    },
    // {
    //     image: robotic,
    //     title: "Robotic RenAIssance",
    //     tags: ["React", "GraphQL", "MongoDB"],
    //     description: "Gallery that displays artwork created by AI during the Robotic Renaissance.",
    //     deployedLink: "https://robotic-renaissance.herokuapp.com/",
    //     gitHubLink: "https://github.com/fabien1313/Robotic_RenAIssance"
    // },
    {
        image: weather,
        title: "Weather Forecast",
        tags: ["JavaScript", "CSS", "HTML"],
        description: "Weather application that allows users to see the current and 5 day forecast for a selected city.",
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