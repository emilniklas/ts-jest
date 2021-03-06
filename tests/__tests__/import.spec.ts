import { } from 'jest';
import { } from 'node';
import * as path from 'path'; 
import runJest from '../__helpers__/runJest';

describe('import with relative and absolute paths', () => {

    it('should run successfully', () => {

        const result = runJest('../imports-test', ['--no-cache']);

        const stderr = result.stderr.toString();
        const output = result.output.toString();

        expect(result.status).toBe(1);
        expect(output).toContain('4 failed, 4 total');

        expect(stderr).toContain('at new Hello (src' + path.sep + 'classes' + path.sep + 'Hello.ts:11:11)');

        expect(stderr).toContain('at Object.<anonymous> (__tests__' + path.sep + 'classes' + path.sep + 'Hello.test.ts:9:19)');
        expect(stderr).toContain('at Object.<anonymous> (__tests__' + path.sep + 'classes' + path.sep + 'Hello-relative.test.ts:9:19)');

        expect(stderr).toContain('at Object.simpleFunction (src' + path.sep + 'absolute-import.ts:4:17)');
        expect(stderr).toContain('at Object.<anonymous> (__tests__' + path.sep + 'absolute-import.test.ts:8:9)');

        expect(stderr).toContain('at Object.simpleFunction (src' + path.sep + 'relative-import.ts:4:17)');
        expect(stderr).toContain('at Object.<anonymous> (__tests__' + path.sep + 'relative-import.test.ts:8:9)');
    });

});