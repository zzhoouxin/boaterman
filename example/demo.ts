/**
 * 例子  这样可以完美支持ts
 */
import api from '../controller/api';

async function test() {
  const data = await api.HomeController.homeGetName();
  console.log(data.age);
}
