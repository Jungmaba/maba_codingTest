    function solution(numer1, denom1, numer2, denom2) {
        let gcd = GCD(denom1, denom2);
        let lcm = denom1 * denom2 / gcd;
        let numer = (numer1*lcm/denom1) + (numer2*lcm/denom2);
        let denomGcd = GCD(numer, lcm);
        return [numer/denomGcd,lcm/denomGcd];
    }
    function GCD (x, y) {
        return y ? GCD(y, x%y) : x;
    }