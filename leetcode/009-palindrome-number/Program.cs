using System;
using System.Diagnostics;

namespace _009_palindrome_number
{
    class Program
    {
        static void Main(string[] args)
        {
            var s = new Solution();
            Debug.Assert(s.IsPalindrome(121) == true);
            Debug.Assert(s.IsPalindrome(-121) == false);
            Debug.Assert(s.IsPalindrome(10) == false);
            Debug.Assert(s.IsPalindrome(int.MaxValue) == false);
        }
    }

    public class Solution {
        public bool IsPalindrome(int x) {
            var x1 = x;
            if (x < 0) return false;

            long p = 0;
            while (x > 0) {
                p = (p * 10) + (x % 10);
                x /= 10;
            }

            if (p > int.MaxValue) return false;

            return p == x1;
        }
    }
}
