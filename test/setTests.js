import assert from 'assert'
import mock from 'mock-fs';
import set from '../setHandlers.js'
import { readFileSync } from 'fs';

describe('SET', function () {
  beforeEach(() => {
      mock({
        'data.json': "{\"foo\":\"bar2\"}",
      });
  });
  it('should update the existing field', async () => {
    const file = `${process.cwd()}/data.json`
    await set("foo=newName")
    const result = readFileSync(file, 'utf8');
    assert.deepStrictEqual(JSON.parse(result), { foo: 'newName' });
  });

  it('should add the non-existing field', async () => {
    const file = `${process.cwd()}/data.json`
    await set("bar=newName2")
    const result = readFileSync(file, 'utf8');
    assert.deepStrictEqual(JSON.parse(result), { "foo": "bar2", "bar": 'newName2' });
  });

  after(() => {
      mock.restore();
  }); 
});