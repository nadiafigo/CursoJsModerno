function solution(A) {
    for (let e = 1; e <= 1000000; e++) {
        let exists = false

        for (let i = 0; i < A.length; i++) {
            if (A[i] <= 0) {
                continue
            }
            if (A[i] == e) {
                exists = true;
                break
            }
        }

        if (exists == false) {
            return e;
        }
        
    }
}