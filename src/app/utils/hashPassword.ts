import bcrypt from 'bcrypt';

export function hashPassword(password:string) {
  let passwordHash= bcrypt.hashSync(password, 10);

  return passwordHash;
}

export function compareHashPassword(password:string,passwordUser:string ) {
  let passwordHashVerify:boolean= bcrypt.compareSync(password, passwordUser);

  return passwordHashVerify;
}