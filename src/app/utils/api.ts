const API_BASE_URL = 'http://localhost:5001';

async function parseResponse(response: Response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    // Server returned non-JSON (e.g. HTML error page)
    throw new Error('Server error. Please try again.');
  }
}

export const api = {
  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await parseResponse(response);
    if (!response.ok) {
      throw new Error(result.message || result.error || 'Something went wrong');
    }
    return result;
  },

  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await parseResponse(response);
    if (!response.ok) {
      throw new Error(result.message || result.error || 'Something went wrong');
    }
    return result;
  },

  delete: async (endpoint: string, data?: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    const result = await parseResponse(response);
    if (!response.ok) {
      throw new Error(result.message || result.error || 'Something went wrong');
    }
    return result;
  },
};
