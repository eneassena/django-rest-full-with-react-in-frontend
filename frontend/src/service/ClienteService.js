import { ApiService } from './ApiService';

const endpoint = 'clientes';

export const ClienteService = {
  getClientes() {
    return ApiService.getService(endpoint);
  },
  save(data) {
    return ApiService.insert(endpoint, data);
  },
  edit(data) {
    return ApiService.update(endpoint, data);
  }
}

