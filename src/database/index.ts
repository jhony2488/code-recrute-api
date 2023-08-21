import db from '../config/database';

export async function connectionDB() {
  try {
    const resultado = await db.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
