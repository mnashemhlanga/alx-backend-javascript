export default function divideFunction(numerator, denominator) {
  try {
    const answer = numerator / denominator;
    return answer;
  } catch (error) {
    throw new Error('cannot divide by 0');
  }
}
