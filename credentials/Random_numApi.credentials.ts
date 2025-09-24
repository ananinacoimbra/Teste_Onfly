import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

// Renomeei a classe para Random_numApi para bater com o que o loader espera.
export class Random_numApi implements ICredentialType {
	name = 'randomNumApi';        // id interno (não precisa bater com o nome da classe)
	displayName = 'Random Num API';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				// mantém o placeholder do n8n para usar as credenciais
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			// ajuste a baseURL e endpoint conforme sua API real
			baseURL: 'https://api.sendgrid.com/v3',
			url: '/marketing/contacts',
			// se precisar de método/headers extras, adicione aqui:
			// method: 'GET',
		},
	};
}

