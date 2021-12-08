import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name='Hlib';
    expect(userData.name).toEqual('Hlib');
  });

  it('login is accessible', () => {
    expect(userData.login).toEqual('');
    userData.login='Hlib';
    expect(userData.login).toEqual('Hlib');
  });

  it('pass is accessible', () => {
    expect(userData.sex).toEqual('');
    userData.sex='Hlib';
    expect(userData.sex).toEqual('Hlib');
  });

  it('age is accessible', () => {
    expect(userData.age).toEqual('');
    userData.age='123';
    expect(userData.age).toEqual('123');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='Hlib';
    expect(userData.email).toEqual('Hlib');
  });

  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone='Hlib';
    expect(userData.phone).toEqual('Hlib');
  });

  it('msgText is accessible', () => {
    expect(userData.msgText).toEqual('');
    userData.msgText='Hlib';
    expect(userData.msgText).toEqual('Hlib');
  });

});
