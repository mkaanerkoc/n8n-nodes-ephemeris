import { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData, INodeParameters } from 'n8n-workflow';
import ephemeris from 'ephemeris';

export class EphemerisNode implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Ephemeris',
        name: 'ephemeris',
        group: ['transform'],
        version: 1,
        description: 'Fetch planetary positions using ephemeris',
        defaults: {
            name: 'Ephemeris',
        },
        inputs: ['main'],
        outputs: ['main'],
        properties: [
            {
                displayName: 'Date',
                name: 'date',
                type: 'string',
                default: '',
                placeholder: 'YYYY-MM-DD',
                required: true,
                description: 'Date for which to fetch planetary positions',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];

        for (let i = 0; i < items.length; i++) {
            const date = this.getNodeParameter('date', i) as string;
            const jd = ephemeris.toJDE(new Date(date));
            const positions = ephemeris.getAllPlanets(jd);

            returnData.push({ json: { date, positions } });
        }

        return [returnData];
    }
}
