import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private baseUrlBackend: string;
  private baseUrlEmail: string;

  constructor() {
    const runtimeEnv = (window as any).__env || {};
    this.baseUrlBackend = runtimeEnv.BASE_URL_BACKEND || environment.baseUrlBackend || '';
    this.baseUrlEmail = runtimeEnv.BASE_URL_EMAIL || environment.baseUrlEmail || '';
  }

  getBaseUrlBackend(): string {
    return this.baseUrlBackend;
  }

  getBaseUrlEmail(): string {
    return this.baseUrlEmail;
  }
}
