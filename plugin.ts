import { type Plugin } from 'vite';
import { exec } from 'child_process';

export const dts: Plugin = {
  name: 'dts-generator',
  buildEnd: (error?: Error) => {
    if (!error) {
      return new Promise((res, rej) => {
        exec('vue-tsc --declaration --emitDeclarationOnly', (err) => (err ? rej(err) : res()));
      });
    }
  },
};
