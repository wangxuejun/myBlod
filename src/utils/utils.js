import { Message } from 'iview';
// 检查不能为空项
export function $checkEmpty (arr) {
  let count = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i].key === '' || !arr[i].key) {
      Message.error(arr[i].msg);
      break;
    }
    count++;
  }
  if (len === count) {
    return true;
  } else {
    return false;
  }
}
