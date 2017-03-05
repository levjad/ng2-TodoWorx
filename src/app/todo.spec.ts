import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
  
  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'Hello World!',
      complete: true
    })
    expect(todo.title).toEqual('Hello World!');
    expect(todo.complete).toEqual(true);
  });

});
