import { PriorityTodoPipe } from './priority-todo.pipe';

describe('PriorityTodoPipe', () => {
  it('create an instance', () => {
    const pipe = new PriorityTodoPipe();
    expect(pipe).toBeTruthy();
  });
});
