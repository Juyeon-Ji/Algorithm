function solution(name, yearning, photo) {
    var answer = [];

    const nameYearningMap = {};
    for (let i = 0; i < name.length; i++) {
        nameYearningMap[name[i]] = yearning[i];
    }

    for (let eachPhoto of photo) {
        let memoryScore = 0;
        for (let person of eachPhoto) {
            if (nameYearningMap[person]) {
                memoryScore += nameYearningMap[person];
            }
        }
        answer.push(memoryScore);
    }   

return answer;
}