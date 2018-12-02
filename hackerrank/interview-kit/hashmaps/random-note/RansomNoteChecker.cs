using System;
using System.Collections.Generic;

namespace RansomNote
{
    public class RansomNoteChecker
    {
        public string CheckMagazine(string[] magazine, string[] note) {
            var words = new Dictionary<string, int>();

            foreach (var word in magazine) {
                if (words.TryGetValue(word, out int count)) {
                    words[word] = count + 1;
                }
                else {
                    words[word] = 1;
                }
            }

            foreach (var word in note) {
                if (words.TryGetValue(word, out int count)) {
                    if (count == 0) {
                        return "No";
                    }
                    words[word] = count - 1;
                }
                else {
                    return "No";
                }
            }

            return "Yes";
        }
    }
}
