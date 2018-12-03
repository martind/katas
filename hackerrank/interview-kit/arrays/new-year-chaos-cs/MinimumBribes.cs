using System;

namespace bribes {
    public class TooChaoticException : Exception {
        public TooChaoticException() {}
        public TooChaoticException(string message)
            : base (message) {}
    }

    public class MinimumBribes {
        private const int MAX_BRIBES = 2;

        public int GetBribesCount(int[] queue) {
            var N = queue.Length;
            var bribes = 0;

            for (var i = 0; i < N; i++) {
                if (queue[i] - MAX_BRIBES - 1 > i)
                    throw new TooChaoticException("Too Chaotic");

                var partialBribes = 0;
                for (var j = i + 1; j < N; j++) {
                    if (queue[j] < queue[i])
                        partialBribes++;
                    if (partialBribes >= MAX_BRIBES)
                        break;
                }
                bribes += partialBribes;
            }

            return bribes;
        }
    }
}
