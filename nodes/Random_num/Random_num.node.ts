import {
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	INodeExecutionData,
	//INodeProperties,
} from 'n8n-workflow';

export class Random_num implements INodeType {
	description: INodeTypeDescription = {
		// ... (o restante da descrição do nó permanece igual) ...
		displayName: 'True Random Number Generator',
		name: 'randomNum',
		group: ['transform'],
		version: 1,
		description: 'Generates a random number using an external API.',
		defaults: {
			name: 'Random Number',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Minimum Value',
				name: 'min',
				type: 'number',
				default: 1,
				description: 'The minimum value for the random number.',
			},
			{
				displayName: 'Maximum Value',
				name: 'max',
				type: 'number',
				default: 100,
				description: 'The maximum value for the random number.',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const newItems: INodeExecutionData[] = [];

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			const min = this.getNodeParameter('min', itemIndex, 1) as number;
			const max = this.getNodeParameter('max', itemIndex, 100) as number;

			// URL da API que gera números aleatórios
			const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

			// Faz a chamada HTTP para a API externa
			const response = await this.helpers.request({
				uri: url,
				json: false,
				method: 'GET',
			});

			const randomNumber = parseInt(response as string, 10);

			const newItem = {
				json: { ...items[itemIndex].json, randomNumber },
				binary: items[itemIndex].binary,
			};

			newItems.push(newItem);
		}

		return this.prepareOutputData(newItems);
	}
}