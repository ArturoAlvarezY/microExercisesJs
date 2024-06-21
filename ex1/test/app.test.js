import { describe, expect, it } from 'vitest';
import makeThePrint from '../app.js';

describe('makeThePrint', () => {
    let title;

    beforeEach(() => {
        // Configurar el DOM antes de cada prueba
        document.body.innerHTML = '<h1 id="myH1"></h1>';
        title = document.getElementById('myH1');
    });

    it('should set innerHTML of h1 to "Hello Javascript!"', () => {
        makeThePrint();
        expect(title.innerHTML).toBe('Hello Javascript!');
    });
});