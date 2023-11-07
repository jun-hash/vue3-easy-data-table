import { describe, it, expect } from 'vitest';
import assembleFormData from '../src/utils/formDataAssembly';
import verifyFormData from '../src/utils/verifyFormData';
import submitFormData from '../src/utils/submitFormData';

describe('FormData Assembly, Verification, and Submission', () => {
  it('should assemble FormData correctly', () => {
    const formData = assembleFormData();
    expect(formData).toHaveProperty('individualInfo');
    expect(formData).toHaveProperty('careerInfo');
  });

  it('should verify FormData correctly', () => {
    expect(() => verifyFormData()).not.toThrow();
  });

  it('should submit FormData correctly', async () => {
    const url = 'http://example.com/submit';
    const response = await submitFormData(url);
    expect(response).toBeDefined();
  });
});