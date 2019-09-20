import { Toast } from 'vant';
let loading;
let start = 0;
let loadingCount = 0;
function $loadings () {
  loading = Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  });
}
export function $loading () {
  $loadings();
  return loading;
}
export function $showLoading () {
  if (loadingCount === 0) {
    start = Date.now();
    $loadings();
  }
  loadingCount++;
}
export function $closeLoading () {
  if (loadingCount <= 0) return;
  loadingCount--;
  if (loadingCount === 0) {
    let end = Date.now();
    if (end - start < 200) {
      setTimeout(() => {
        loading.clear();
      }, 200);
    } else {
      loading.clear();
    }
  }
}
