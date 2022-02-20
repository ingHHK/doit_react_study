export function debounce(func, delay) {
    let inDebounce;
    return function(...args) { //...args-> run() 함수의 인자를 담고 있는 배열을 얻기 위해 사용
        if (inDebounce) {       //inDebounce-> 지연 대기 시간 내에 입력 신호가 호출될 때 실행 대기 함수를 취소하기 위해 사용
            clearTimeout(inDebounce);
        }
        inDebounce = setTimeout(
            () => func(...args), //delay 시간 이후에 인자로 전달된 'console.log(val)' 함수 실행.
            delay);
    }
}

const run = debounce(val => console.log(val), 100);
run('a');
run('b');
run(2);