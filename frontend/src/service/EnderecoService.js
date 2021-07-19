import { ApiService } from './ApiService';

const endpoint = 'enderecos';

export const EnderecoService = {
  getEnderecos() {
    return ApiService.getService(endpoint);
  }
}



