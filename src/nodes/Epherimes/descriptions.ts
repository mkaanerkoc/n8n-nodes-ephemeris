import { INodeTypeDescription } from "n8n-workflow";

export const PlanetCoordinatesDescription: INodeTypeDescription = {
    displayName: "Planet Coordinates",
    name: "planetCoordinates",
    group: ["transform"],
    version: 1,
    description: "Gets the coordinates of planets using epherimes",
    defaults: {
        name: "Planet Coordinates",
        color: "#1F8DED",
    },
    inputs: ["main"],
    outputs: ["main"],
    properties: [
        {
            displayName: "Planet Name",
            name: "planet",
            type: "options",
            options: [
                { name: "Mercury", value: "Mercury" },
                { name: "Venus", value: "Venus" },
                { name: "Earth", value: "Earth" },
                { name: "Mars", value: "Mars" },
                { name: "Jupiter", value: "Jupiter" },
                { name: "Saturn", value: "Saturn" },
                { name: "Uranus", value: "Uranus" },
                { name: "Neptune", value: "Neptune" },
                { name: "Pluto", value: "Pluto" }
            ],
            default: "Mars",
            description: "Select a planet to get its coordinates."
        }
    ],
};