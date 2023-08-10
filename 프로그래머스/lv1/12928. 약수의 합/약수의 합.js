function solution(n) {
    // 누적 합을 저장할 변수를 초기화
    var answer = 0;

    // 1부터 n까지의 숫자를 반복문으로 돌며 약수를 탐색
    for (var i = 1; i <= n; i++) {
        // i가 n의 약수인지 확인
        if (n % i === 0) {
            // 약수를 발견하면, answer에 더하기
            answer += i;
        }
    }

    // 모든 숫자를 확인한 뒤, 누적 합인 answer을 반환
    return answer;
}
