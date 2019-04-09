function exampleFunction() {
};

// Event Listeners
// Debounce takes in three params
// 1. Func to debounce
// 2. Time to wait
// 3. If we should debounce immediately
window.addEventListener('scroll', debounce(exampleFunction, 30, true));
