function solution(targets) {
    let answer = 0;
    
    // 타겟의 상한권(e)별로 정렬
    targets.sort((a, b) => a[1] - b[1]);
    
    // 요격 미사일의 x 좌표를 매우 낮은 값으로 초기화
    let interceptionMissile = -1e9;
    
    // 타겟 목록을 순회
    for (let i = 0; i < targets.length; i++) {
        // 요격 미사일의 x 좌표가 현재 타겟의 범위 (s, e) 내에 있지 않은 경우,
        // 현재 타겟의 상한권 (e)에 요격 미사일을 발사하고 미사일 카운터를 증가시킴
        if (interceptionMissile < targets[i][0] || interceptionMissile >= targets[i][1]) {
            answer++;
            interceptionMissile = targets[i][1] - 0.5;
        }
    }
    
    return answer;
}
