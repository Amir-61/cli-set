import assert from 'assert'
import mock from 'mock-fs';
import { readFileSync } from 'fs';
import set from '../setHandlers.js'

describe('SET', function () {
  beforeEach(() => {
      mock({
        'data.json': "{\"foo\":\"bar\"}",
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
    await set("baz=newBazName")
    const result = readFileSync(file, 'utf8');
    assert.deepStrictEqual(JSON.parse(result), { "foo": "bar", "baz": 'newBazName' });
  });

  after(() => {
      mock.restore();
  }); 
});