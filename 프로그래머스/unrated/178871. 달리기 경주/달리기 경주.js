function solution(players, callings) {
    // 선수들의 이름을 키로, 현재 위치를 값으로 하는 객체(hashMap)을 생성
    var playerPositions = {};
    for (var i = 0; i < players.length; i++) {
        playerPositions[players[i]] = i;
    }

    for (var j = 0; j < callings.length; j++) {
        var calledPlayer = callings[j];
        var calledPlayerIndex = playerPositions[calledPlayer];

        if (calledPlayerIndex > 0) { // 첫 번째 위치가 아닐 때만 추월
            // 추월한 선수와 그 선수의 앞에 있는 선수의 위치 변경
            var frontPlayer = players[calledPlayerIndex - 1];
            players[calledPlayerIndex - 1] = calledPlayer;
            players[calledPlayerIndex] = frontPlayer;

            // 해시테이블에 각 선수의 새 위치를 업데이트
            playerPositions[frontPlayer] = calledPlayerIndex;
            playerPositions[calledPlayer] = calledPlayerIndex - 1;
        }
    }

    return players;
}
