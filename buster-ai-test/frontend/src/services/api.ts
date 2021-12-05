import axios, { AxiosInstance } from 'axios';

class Api {
  private baseUrl: string;

  private api: AxiosInstance;

  constructor() {
    this.baseUrl = `${process.env.REACT_APP_API_URL || ''}/api`;
    this.api = axios.create({ baseURL: this.baseUrl });
  }

  private updateToken(token: string): void {
    window.localStorage.setItem('token', token);

    this.api = axios.create({
      baseURL: this.baseUrl,
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  public async checkToken(): Promise<string | null> {
    const token = window.localStorage.getItem('token');

    if (!token) return null;

    try {
      const res = await this.api.get('/user', {
        headers: { Authorization: `Bearer ${token}` },
      });

      this.updateToken(token);

      return res.data.email;
    } catch {
      return null;
    }
  }

  public logout(): void {
    window.localStorage.removeItem('token');

    this.api = axios.create({ baseURL: this.baseUrl });
  }

  async login(email: string, password: string): Promise<void> {
    const res = await this.api.post('/auth/login', { email, password });
    const { token } = res.data;

    this.updateToken(token);
  }

  async signup(email: string, password: string): Promise<void> {
    const res = await this.api.post('/auth/signup', { email, password });
    const { token } = res.data;

    this.updateToken(token);
  }

  async getFibonacci(index: number): Promise<[number, number]> {
    const res = await this.api.get('/fibonacci/number', { params: { index } });

    const { result, creditLeft } = res.data;

    return [result, creditLeft];
  }

  async getCredit(): Promise<number> {
    const res = await this.api.get('/user');

    const { credit } = res.data;

    return credit;
  }

  async addCredit(amount: number): Promise<number> {
    const res = await this.api.post('/user/credit', { amount });

    const { credit } = res.data;

    return credit;
  }
}

export default (() => new Api())();
