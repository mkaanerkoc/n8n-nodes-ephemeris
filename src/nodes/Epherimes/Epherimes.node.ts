import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData, INodeParameters } from 'n8n-workflow';
import ephemeris from 'ephemeris';

export class Epherimes implements INodeType {
    description = Epherimes;

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const dateObj = new Date();
        const longitude = 10.0014; // Example longitude
        const latitude = 53.5653;  // Example latitude
        const height = 0;          // Example height

        const result = ephemeris.getAllPlanets(dateObj, longitude, latitude, height);
        const planetData = result.observed;

       
        return [[{
            json: {
                planetData
            },
        }]];
    }
}
