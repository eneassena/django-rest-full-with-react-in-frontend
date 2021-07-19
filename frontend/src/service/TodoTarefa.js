import { ApiService } from './ApiService';

const endpoint = 'todos';

export const TodoService = {
  getTodos() {
    return ApiService.getService(endpoint);
  }
}

