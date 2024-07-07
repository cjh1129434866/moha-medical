import { useState } from '#app'; 

/** 简单数据类型示例 */
export const useCachedData = () => {
  // 从 localStorage 中获取数据，如果没有则使用默认值 'defaultValue'
  const initialData = localStorage.getItem('langIds') || '[ "en", "zh" ]'; 
  // 使用 useState 定义状态，并将初始值设置为获取到的数据
  return useState<string>('cachedData', () => initialData); 
};

// 持久化相关代码
export const saveToLocalStorage = (key: string, val: any = "") => {
  const state = useCachedData(); 
  localStorage.setItem(key, val || state.value); 
};

// 在 app.vue 的 onMounted 中统一调用保存函数，或者在其他挂载后合适的时机调用
// saveToLocalStorage('langIds'); 