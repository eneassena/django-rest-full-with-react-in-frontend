import { ApiService } from './ApiService';

const endpoint = 'clientes';

export const ClienteService = {
  getClientes() {
    return ApiService.getService(endpoint);
  }
}

