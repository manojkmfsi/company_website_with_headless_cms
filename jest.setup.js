import dotenv from 'dotenv';
import '@testing-library/jest-dom';

// Load environment variables from .env.test file
dotenv.config({ path: '.env.test' });

jest.mock('next/cache', () => ({
  unstable_cache: jest.fn((fn) => fn), // Simply return the function itself
}));
