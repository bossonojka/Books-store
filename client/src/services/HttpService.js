export class HttpService {
  static request = (url, method = 'GET', body) => {
    const options = {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(`http://localhost:3000/api${url}`, options).then(this.parseResponce);
  };

  static get(url) {
    return this.request(url);
  }

  static post(url, body) {
    return this.request(url, 'POST', JSON.stringify(body));
  }

  static parseResponce(response) {
    if (response.status === 401) {
      window.location.replace('http://localhost:3001/login');
    }
    if (response.ok) {
      return response.json().then((data) => ({ data, params: +response.headers.get('X-Total-Count') }));
    }
    return Promise.reject(response);
  }
}
